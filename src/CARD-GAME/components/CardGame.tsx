import { useContext } from "react";
import { GameContext } from "../context/GameComponentContext";
import { CardState, CardsContext } from "../context/CardsComponentContext";
import { CardItem } from "./CardItem";
import { useAppSelector } from "../../redux/hooks";



const CardGame = () => {

    const gameContext = useContext(GameContext);
    const cardsContext = useContext(CardsContext);

    const cardsState = useAppSelector((state) => state.cardsReducer);

    const { cards } = cardsContext; 
    const { game } = gameContext; 

   /*  console.log(cards)
    console.log(game) */



    return (
      <>
        <div>{game.firstCard}</div>
        <div>{game.secondCard}</div>
        <div>{game.isMatch ? "true" : "false"}</div>
        <div>
          {cardsState.map((card: CardState) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
      </>
    );
};

export default CardGame;
