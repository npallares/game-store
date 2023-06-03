import { useEffect, useState } from "react";
//import { CardState, CardsContext } from "../context/CardsComponentContext";
import { CardItem } from "./CardItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  initialState,
  resetAllRedux,
  setFirstCardRedux,
  setIsMatchRedux,
  setSecondCardRedux,
} from "../../redux/slices/game.slice";
import {
  CardState,
  setCardOneIsDoneFalse,
  setCardOneIsDoneTrue,
  setCardTwoIsDoneFalse,
  setCardTwoIsDoneTrue,
  setCardViewFrontTrue,
} from "../../redux/slices/cards.slice";

const CardGame = () => {
  const cardsState = useAppSelector((state) => state.cards);
  const gameState = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const getGameState = () => {
    const newGameState = {
      firstCard: gameState.firstCard,
      firstCardId: gameState.firstCardId,
      secondCard: gameState.secondCard,
      secondCardId: gameState.secondCardId,
      isMatch: gameState.isMatch,
    };
    //console.log("newGameState", newGameState);
    return newGameState;
  };

  const getCardState = () => {
    const newCardState = cardsState;
    //dispatch(setCardIsDone(newCardState[id]));
    //console.log("newCardState", newCardState);
    return newCardState;
  };

  let newGameState;
  let newCardState ;
  
  const settingCards = (value: string, id: string) => {
    //console.log("seteo first", newgameState, newCardState);
    if (gameState.firstCardId === null) {
      dispatch(setFirstCardRedux({ value, id }));
      dispatch(setCardOneIsDoneFalse(id));
      dispatch(setCardViewFrontTrue(id));
      return;
    }
    if (gameState.secondCardId === null) {
      dispatch(setSecondCardRedux({ value, id }));
      dispatch(setCardTwoIsDoneFalse(id));
      dispatch(setCardViewFrontTrue(id));
      dispatch(setIsMatchRedux());   
      return     //console.log("seteo second");
    }
    
  };

  const checkIsMatch =()=>{
    console.log("CheckisMatch", gameState);
    if(gameState)return;
    return
  }

  const handlesClick = async (value: string, id: string) => {
    try{
    const resultPromise = new Promise((resolve, reject) => {
        resolve(settingCards(value, id))
    })
    console.log("resultPromise",resultPromise)
    return resultPromise;
    } catch (error){
      console.log("error",Error)
      throw error;
    }
  };

  /* const dispatchCardsIsDoneTrue = (
    firstCardEffect: string,
    secondCardEffect: string
  ) => {
    dispatch(setCardIsDoneTrue(firstCardEffect));
    dispatch(setCardIsDoneTrue(secondCardEffect));
  }; */

  
  useEffect(() => {
    console.log("useEffect");
    if (gameState) {
      const firstCardEffect = gameState.firstCard;
      const firstCardIdEffect = gameState.firstCardId;
      const secondCardEffect = gameState.secondCard;
      const secondCardIdEffect = gameState.secondCardId;
      const isMatch =
        firstCardEffect !== null &&
        firstCardIdEffect !== null &&
        secondCardEffect !== null &&
        secondCardIdEffect !== null &&
        firstCardEffect === secondCardEffect;
      console.log("useEffect", isMatch, firstCardIdEffect, secondCardIdEffect);
      if (isMatch) {
        console.log("IS MATCH", firstCardIdEffect, secondCardIdEffect);
        dispatch(setCardOneIsDoneTrue(firstCardIdEffect));
        dispatch(setCardTwoIsDoneTrue(secondCardIdEffect));
      }
    }
    //if (isMatchNull ) dispatch(setCardIsDoneTrue(firstCardIdEffect));
    //if (isMatchNull) dispatch(setCardIsDoneTrue(secondCardidEffect));
  }, [gameState, dispatch]);
  
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
/* const reset = () => {
  dispatch(resetAllRedux());
  setFirstCard(null);
  //setFirstCardId("");
  setSecondCard(null);
  //setSecondCardId("");
}; */
//const timeOut = () => setTimeout(reset, 3000);

/*  const searchCard = (id: string) => {
  const selectedCard = cards.filter((card) => card.id === id);
  return selectedCard;
};
*/

// const ceckIsMatch = () => firstCard === secondCard ? console.log("isMatch") : console.log("No")

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
//console.log("newgameState", newgameState);