import { useEffect, useState } from "react";
import { CardState, CardsContext } from "../context/CardsComponentContext";
import { CardItem } from "./CardItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetAll, setFirstCard } from "../../redux/slices/game.slice";
import { cardsSlice, initialState, setCardIsDone } from "../../redux/slices/cards.slice";
import { useDispatch } from "react-redux";


const CardGame = () => {
  const cardsState = useAppSelector((state) => state.cards);
  const gameState = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  //const [cards, setCards] = useState(cardsState);
  const [firstCardId, setFirstCardId] = useState<string>('');
  const [secondCardId, setSecondCardId] = useState<string>('');
  const [firstCard, setFirstCard] = useState<string | null>(null);
  const [secondCard, setSecondCard] = useState<string | null>(null);
  const [isDone, setIsDone] = useState(false);

  const reset = () =>{
    setFirstCard(null)
    setFirstCardId('')
    setSecondCard(null)
    setSecondCardId('')
  };
  const timeOut = () => setTimeout(reset, 3000);

 /*  const searchCard = (id: string) => {
    const selectedCard = cards.filter((card) => card.id === id);
    return selectedCard;
  };
 */
  const valuesId = {

  }

  // const ceckIsMatch = () => firstCard === secondCard ? console.log("isMatch") : console.log("No")
  
  const handlesClick = (value: string, id:string) => {
    if (!firstCard) {
      console.log("seteo first");
      setFirstCardId(id);
      return setFirstCard(value);
    }
    if (!secondCard) {
      console.log("seteo second");
      setSecondCardId(id);
      setSecondCard(value);
    }
  };

  const ceckIsMatch = () => {
    //console.log(firstCard, secondCard)
    //console.log("selected Cards Values :", firstCard, secondCard);
    if (firstCard !== null && secondCard !== null && firstCard === secondCard) {
      dispatch(setCardIsDone(firstCardId));
      dispatch(setCardIsDone(secondCardId));
      setIsDone(true)
      //console.log("cardState", cards);
      timeOut();

      return console.log("isMatch");
    }
    if (firstCard !== null && secondCard !== null)
      return console.log("NoMatch");
    return;
  };
  
  useEffect(() => {
    ceckIsMatch();
    //console.log("cards", cards);

    // console.log("first", firstCard, "second", secondCard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstCard, secondCard]);

  return (
    <>
      {cardsState.map((card: CardState) => {
        return (
          <button
            key={card.id}
            onClick={() => handlesClick(card.value, card.id)}
          >
            <CardItem card={card} />
          </button>
        );
      })}
    </>
  );
};

export default CardGame;
