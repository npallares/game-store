import { createContext, useState } from "react";

interface props {
  children: JSX.Element | JSX.Element[];
}

export type CardState = {
  id: string;
  value: string;
  frontImg: string;
  backImg: string;
  done: boolean | null;
  ViewFront: boolean | null;
};

export type CardsContextProps = {
  cards: CardState[];
  changeCardToDone: (firstId: string | null, secondId: string | null) => void;
};

export const CardsContext = createContext<CardsContextProps>(
  {} as CardsContextProps
);

const INITIAL_STATE: CardState[] = [
  {
    id: "goku01",
    value: "goku",
    frontImg: "img/goku.jpg",
    backImg: "img/bk.jpg",
    done: false,
    ViewFront: false,
  },
  {
    id: "vegeta01",
    value: "vegeta",
    frontImg: "img/vegeta.jpg",
    backImg: "img/bk.jpg",
    done: false,
    ViewFront: false,
  },
  {
    id: "goku02",
    value: "goku",
    frontImg: "img/goku.jpg",
    backImg: "img/bk.jpg",
    done: false,
    ViewFront: false,
  },
  {
    id: "vegeta02",
    value: "vegeta",
    frontImg: "img/vegeta.jpg",
    backImg: "img/bk.jpg",
    done: false,
    ViewFront: false,
  },
];

export const CardsComponentContext = ({ children }: props) => {
  const [cards, setCards] = useState<CardState[]>(INITIAL_STATE);

  const changeCardToDone = (firstId: string | null, secondId: string | null) => {
    const index = cards.findIndex((card) => card.id === firstId);
    const index2 = cards.findIndex((card) => card.id === secondId);

    const updatedCard = { ...cards[index], done: true };
    const updatedCard2 = { ...cards[index2], done: true };

    const updatedCards = [
      ...cards.slice(0, index),
      updatedCard,
      ...cards.slice(index + 1),
    ];
    
    const updatedCards2 = [
      ...updatedCards.slice(0, index2),
      updatedCard2,
      ...updatedCards.slice(index2 + 1),
    ];
    
    console.log("updated", updatedCards2,);
    setCards(updatedCards2);
  };

  return (
    <CardsContext.Provider value={{ cards, changeCardToDone }}>
      {children}
    </CardsContext.Provider>
  );
};
