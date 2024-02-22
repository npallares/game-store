import { Container, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import {
  selectTriviaCards,
  selectTriviaCardsStatus,
  setTriviaCard,
} from "../state/slices/triviaCard.slice";
import { useEffect, useState } from "react";
import {
  addMatchCounter,
  addQuestionCounter,
  selectQuestionCounter,
} from "../state/slices/trivia.slice";
import { TriviaCard } from "../ui";
import { STATUS } from "../enums/status";
import { getFutbolImages } from "../utils/getFutbolImages";
import { OPTIONS } from "../enums/options";
import { useParams } from "react-router-dom";

const PLAYERS = {
  CUTI: OPTIONS.ONE,
  MESSI: OPTIONS.TWO,
  DYBALA: OPTIONS.THREE,
  ENZO: OPTIONS.FOUR,
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
  const { theme } = useParams();
  const dispatch = useAppDispatch();
  const triviaCardsStatus = useAppSelector(selectTriviaCardsStatus);
  const triviaCards = useAppSelector(selectTriviaCards);
  const questionCounter = useAppSelector(selectQuestionCounter);
  const [numberOfQuestionCounter, setNumberOfQuestionCounter] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    initialStateCurrentQuestion
  );

  const lenghtOfQuestions = testQuestions.length;

  const isEndGame = numberOfQuestionCounter >= lenghtOfQuestions;

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
    if (!theme || triviaCardsStatus === STATUS.LOADED) return;
    void dispatch(setTriviaCard(theme));
  }, [triviaCardsStatus, theme, dispatch]);

  useEffect(() => {
    if (isEndGame) {
      return alert("GAME OVER - RENDER MODAL");
    }
    setCurrentQuestion(testQuestions[numberOfQuestionCounter]);
  }, [questionCounter, isEndGame, numberOfQuestionCounter]);

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
                onClick={() => handlerClick(card.id)}
                image={getFutbolImages(card.id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default TriviaGame;
