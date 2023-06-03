import { useEffect, useState } from "react";
import { CardState, CardsContext } from "../context/CardsComponentContext";
import { CardItem } from "./CardItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetAllRedux,
  setFirstCardRedux,
  setIsMatchRedux,
  setSecondCardRedux,
} from "../../redux/slices/game.slice";
import {
  cardsSlice,
  initialState,
  setCardIsDone,
} from "../../redux/slices/cards.slice";
import { useDispatch } from "react-redux";
import { GameState } from "../context/GameComponentContext";
//import { initialState } from '../../redux/slices/cards.slice';

const CardGame = () => {
  const cardsState = useAppSelector((state) => state.cards);
  const gameState = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  //const [cards, setCards] = useState(cardsState);
  const [firstCardId, setFirstCardId] = useState<string>("");
  const [secondCardId, setSecondCardId] = useState<string>("");
  const [firstCard, setFirstCard] = useState<string | null>(null);
  const [secondCard, setSecondCard] = useState<string | null>(null);
  const [isDone, setIsDone] = useState(false);

  const getGameState = () => {
    const newGameState = {
      firstCard: gameState.firstCard,
      firstCardId: gameState.firstCardId,
      secondCard: gameState.secondCard,
      secondCardId: gameState.secondCardId,
      isMatch: gameState.isMatch,
    };
    console.log("newGameState", newGameState);
    return newGameState;
  };

  const reset = () => {
    dispatch(resetAllRedux());
    setFirstCard(null);
    setFirstCardId("");
    setSecondCard(null);
    setSecondCardId("");
  };
  const timeOut = () => setTimeout(reset, 3000);

  /*  const searchCard = (id: string) => {
    const selectedCard = cards.filter((card) => card.id === id);
    return selectedCard;
  };
  */

  // const ceckIsMatch = () => firstCard === secondCard ? console.log("isMatch") : console.log("No")

  const handlesClick = (value: string, id: string) => {
    let newgameState = getGameState();
    if (!newgameState.firstCardId) {
      console.log("seteo first");
      dispatch(setFirstCardRedux({ value, id }));
      newgameState = getGameState();
      console.log("newgameState", newgameState);
      //
      return newgameState;
    }
    if (!newgameState.secondCardId) {
      console.log("seteo second");
      dispatch(setSecondCardRedux({ value, id }));
      newgameState = getGameState();
      dispatch(setIsMatchRedux());
      newgameState = getGameState();
      if(newgameState.isMatch){
        newgameState = getGameState();
        return
      }
     /*  checkIsMatch(newgameState){
        const isMatch = newgameState.isMatch
        console.log("isMatch",isMatch)
        return isMatch 
      } */
      /* const isMatch = (newgameState.firstCardId === newgameState.secondCardId) {
        //ceckIsMatchRedux(newgameState);
        return newgameState;
      } */
      //setSecondCardId(id);
      //setSecondCard(value);
      console.log("newgameState", newgameState);
      return newgameState
    }
    return newgameState;
  };

  useEffect(() => {
    //console.log("cards", cards);
    // console.log("first", firstCard, "second", secondCard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstCard, secondCard, gameState]);

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
