import { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameComponentContext";
import { CardState, CardsContext } from "../context/CardsComponentContext";
import { CardItem } from "./CardItem";



const CardGame = () => {

    const gameContext = useContext(GameContext);
    const cardsContext = useContext(CardsContext);

    const { cards } = cardsContext; 
    const { game } = gameContext; 

   /*  console.log(cards)
    console.log(game) */



    return (
      <>
        <div>{game.firstCard}</div>
        <div>{game.secondCard}</div>
        <div>{game.isMatch ? 'true' : 'false'}</div>
        <div>{cards.map((card:CardState)=><CardItem key={card.id} card={card}/>)}</div>
      </>
    );
};

export default CardGame;
