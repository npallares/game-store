import { Container, Grid,  styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import {
  selectTriviaCards,
  selectTriviaCardsStatus,
  setTriviaCard,
} from "../state/slices/triviaCards.slice";
import { useEffect, useState } from "react";
import {
  addMatchCounter,
  addQuestionCounter,
  getLogs,
} from "../state/slices/triviaGame.slice";
import { TriviaCard, TriviaDisplay } from "../ui";
import { STATUS } from "../enums/status";
import { getFutbolImages } from "../utils/getFutbolImages";
import { OPTIONS } from "../enums/options";
import { useParams } from "react-router-dom";
import getImage from "../helpers/getImageByTheme";
import { THEMES } from "../enums/theme";
import {
  getCurrentGameStatus,
  getCurrentGametheme,
  setCurrentGameTheme,
  setStatusLoaded,
  startCurrentGame,
} from "../state/slices/currentGame.slice";

const Img = styled("img")({
  width: "auto",
  height: "50%",
  objectFit: "cover",
  objectPosition: "center",
});

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
  const questionCounter = useAppSelector(getLogs);
  const [numberOfQuestionCounter, setNumberOfQuestionCounter] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    initialStateCurrentQuestion
  );
  const currentGameStatus = useAppSelector(getCurrentGameStatus);
  const currentGametheme = useAppSelector(getCurrentGametheme);

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
    if (currentGameStatus === STATUS.UNINITIALIZED)
      dispatch(startCurrentGame());
    if (!currentGametheme)
      dispatch(setCurrentGameTheme({ theme: currentGametheme }));
  }, [dispatch]);

  useEffect(() => {
    if (!theme || triviaCardsStatus === STATUS.LOADED) return;
    void dispatch(setTriviaCard(theme));
  }, [triviaCardsStatus, theme, dispatch]);

  useEffect(() => {
    if (currentGameStatus === STATUS.LOADING && isEndGame) {
      void dispatch(setStatusLoaded());
      console.log("GAME OVERR - RENDER MODAL");
      setCurrentQuestion(testQuestions[numberOfQuestionCounter]);
    }
  }, [
    questionCounter,
    isEndGame,
    numberOfQuestionCounter,
    dispatch,
    currentGameStatus,
  ]);

  return (
    <Container component="article">
      <Grid container spacing={1}>
        <Grid
          item
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Img src={getImage(THEMES.LOGO)} />
        </Grid>
      </Grid>
      <Grid container component="section" p={3}>
        <Grid
          border={1}
          borderRadius={3}
          item
          md={12}
          key={currentQuestion.id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: 0,
            backgroundColor: "#424242",
            color: "white",
          }}
        >
          <TriviaDisplay query={currentQuestion.value} />
        </Grid>
      </Grid>
      <Grid container component="ul" sx={{ paddingLeft: 0, paddingTop: 1 }}>
        {triviaCards.map((card) => {
          return (
            <Grid
              component="li"
              key={card.id}
              item
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
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
