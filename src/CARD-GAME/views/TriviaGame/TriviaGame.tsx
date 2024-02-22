/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { futbolCards } from "../../themes/futbol/futbol";
import { Status } from "../../../types/status/status_types";
import {
  setTriviaCard,
  setTriviaCardLoaded,
} from "../../../state/slices/triviaCard.slice";
import { useEffect, useState } from "react";
import TriviaCard from "../../components/TriviaCard/TriviaCard";
import TriviaCardType from "../../../types/trivia/trivia_Card_type";
import {
  addMatchCounter,
  addQuestionCounter,
} from "../../../state/slices/counter.slice";

const PLAYERS = {
  CUTI: "one",
  MESSI: "two",
  DYBALA: "three",
  ENZO: "four",
};

const TOPIC = {
  DATE: {
    cuti: "Fecha de nacimiento: 27-abr-1998.",
    messi: " Fecha de nacimiento: 24/jun/1987.",
    dybala: "Fecha de nacimiento: 15/nov/1993.",
    enzo: "Fecha de nacimiento: 22/feb/1986.",
  },
  DEBUT: {
    cuti: "Debutó profesionalmente en el club Atlético Belgrano",
    messi: "Debutó profesionalmente en el club FC Barcelona",
    dybala: "Debutó profesionalmente en el club Instituto de Córdoba",
    enzo: "Debutó profesionalmente en el club Atlético Las Heras",
  },
};

const testQuestions = [
  // DATE
  { id: PLAYERS.CUTI, value: TOPIC.DATE.cuti },
  { id: PLAYERS.MESSI, value: TOPIC.DATE.messi },
  { id: PLAYERS.DYBALA, value: TOPIC.DATE.dybala },
  { id: PLAYERS.ENZO, value: TOPIC.DATE.enzo },
  // DEBUT
  { id: PLAYERS.CUTI, value: TOPIC.DEBUT.cuti },
  { id: PLAYERS.MESSI, value: TOPIC.DEBUT.messi },
  { id: PLAYERS.DYBALA, value: TOPIC.DEBUT.dybala },
  { id: PLAYERS.ENZO, value: TOPIC.DEBUT.enzo },
  // KEY
  //{ id: PLAYERS.DYBALA, value: TOPIC.KEY },
];

const initialStateCurrentQuestion = testQuestions[0];

const TriviaGame = () => {
  const dispatch = useAppDispatch();
  const triviaCardsStatus = useAppSelector((state) => state.triviaCard.status);
  const triviaCards = useAppSelector((state) => state.triviaCard.cards);
  const questionCounter = useAppSelector(
    (state) => state.counter.questionCounter
  );
  const [numberOfQuestionCounter, setNumberOfQuestionCounter] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    initialStateCurrentQuestion
  );

  const lenghtOfQuestions = testQuestions.length;

  const isEndGame = numberOfQuestionCounter >= lenghtOfQuestions;

  const setLastCard = ({ id, value }: TriviaCardType) => {
    void dispatch(setTriviaCard({ id: id, value: value }));
    void dispatch(setTriviaCardLoaded());
  };

  const setCards = () => {
    futbolCards.map((card) => {
      if (card.id === "four") {
        console.log("Nicolas", { ...card });
        return setLastCard({ ...card });
      }
      return dispatch(setTriviaCard({ id: card.id, value: card.value }));
    });
  };

  const matchHandler = () => {
    dispatch(addMatchCounter());
    return;
  };

  const handlerClick = (cardId: string) => {
    setNumberOfQuestionCounter(questionCounter.length);
    dispatch(addQuestionCounter({ id: cardId }));
    const checkIsMatch = currentQuestion.id === cardId;
    if (checkIsMatch) return matchHandler();
    return console.log("NO MATCH");
  };

  useEffect(() => {
    console.log("triviaCardsStatus", triviaCardsStatus);
    if (triviaCardsStatus !== Status.UNINITIALIZED) return setCards();
    void dispatch(setTriviaCardLoaded());
  }, [triviaCardsStatus]);

  useEffect(() => {
    if (isEndGame) {
      return console.log("RENDER MODAL");
    }
    setCurrentQuestion(testQuestions[numberOfQuestionCounter]);
    console.log("numberOfQuestionCounter", numberOfQuestionCounter);
  }, [questionCounter]);

  return (
    <Container component="section">
      <Grid container border={1}>
        <Grid
          item
          md={12}
          key={currentQuestion.id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            width: "100%",
            margin: 0,
          }}
        >
          <Typography>{currentQuestion.value}</Typography>
        </Grid>
      </Grid>
      <Grid container border={1}>
        {triviaCards.map((card) => {
          return (
            <Grid
              item
              md={3}
              key={card.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: 1,
                width: "100%",
                background: "red",
                margin: 0,
              }}
            >
              <TriviaCard
                id={card.id}
                value={card.value}
                handleClick={() => handlerClick(card.id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default TriviaGame;

{
  /* <Grid
  item
  md={12}
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Img src={getImage(THEME.LOGO)} />
</Grid>
<Grid item md={4}>
  <TriviaCard theme={THEME.FUTBOL}  />
</Grid>
<Grid item md={4}>
  <TriviaCard theme={THEME.FUTBOL}  />
</Grid>
<Grid item md={4}>
  <TriviaCard theme={THEME.FUTBOL}  />
</Grid> */
}
