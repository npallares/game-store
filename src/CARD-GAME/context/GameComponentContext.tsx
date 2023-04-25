import { createContext, useContext, useState } from "react"
import { CardsContext } from "./CardsComponentContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

export type GameState = {
  firstCard: null | string;
  firstCardId: null | string;
  secondCard: null | string;
  secondCardId: null | string;
  isMatch: boolean;
}

export type GameContextProps = {
  game: GameState;
  setFirstCard: (value: string, id: string) => void;
  setSecondCard: (value: string, id: string) => void;
  resetAll: () => void;
  checkMatch: () => void;
};

export const GameContext = createContext<GameContextProps>( {} as GameContextProps );

const INITIAL_STATE : GameState = {
  firstCard : null ,
  firstCardId : null ,
  secondCard : null ,
  secondCardId : null ,
  isMatch: false,
}
export const GameComponentContext = ({ children }:props) => {

  const cardsContext = useContext(CardsContext);
  const { changeCardToDone } = cardsContext;

  const [game, setGame] = useState<GameState>(INITIAL_STATE);

  const setFirstCard = (value:string, id:string) => {
    const firstCard = game.firstCard = value
    const firstCardId = game.firstCardId = id
    setGame({...game,firstCard, firstCardId})
  }
  
  const setSecondCard = (value:string, id:string) => {
    const secondCard = game.secondCard = value
    const secondCardId = game.secondCardId = id
    setGame({...game,secondCard, secondCardId})
  }

  const setIsMatch = (value: boolean) =>{
    const isMatch = game.isMatch = value;
    setGame({...game, isMatch})
  }

  const resetAll = () => {
    const firstCard = null;
    const secondCard = null;
    const isMatch = false;
    setGame({ ...game, firstCard, secondCard, isMatch });
  }

  const checkMatch = () => {
    const isMatch = game.firstCard === game.secondCard ? true : false;
    setIsMatch(isMatch);
    if(isMatch){ 
      changeCardToDone(game.firstCardId, game.secondCardId);
    }
    setTimeout(resetAll, 2000);
  }

  return (
    <GameContext.Provider
      value={{ game, setFirstCard, setSecondCard, resetAll, checkMatch }}
    >
      {children}
    </GameContext.Provider>
  );
};
