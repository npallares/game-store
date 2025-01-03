import { Typography } from "@mui/material";
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
import { TriviaCard } from "../ui";
import { STATUS } from "../enums/status";
import { getFutbolImages } from "../utils/getFutbolImages";
import { OPTIONS } from "../enums/options";
import { useNavigate, useParams } from "react-router-dom";
import { THEMES } from "../enums/theme";
import {
  getCurrentGameStatus,
  getCurrentGametheme,
  setCurrentGame,
  setCurrentGameTheme,
  setStatusLoaded,
  startCurrentGame,
} from "../state/slices/currentGame.slice";
import { GAMES } from "../enums/games";
import styles from "./TriviaGame.module.scss"
import { PATHS } from "../enums/paths";

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
  RANDOM_ONE: {
    cuti: "En julio de 2018 se unió al Genoa FC. ",
    messi: "Debutó profesionalmente en el club FC Barcelona",
    dybala: "Debutó profesionalmente en el club Instituto de Córdoba",
    enzo: "Debutó profesionalmente en el club Atlético Las Heras",
  },
  RANDOM_TWO: {
    cuti: "Debutó con la selección argentina el 3 de junio de 2021 en el empate 1-1 frente a Chile, siendo la figura del equipo argentino.",
    messi:
      "Fue su abuela materna, Celia, la que lo alentó a dedicarse al fútbol y a quien él agradece tras convertir un gol",
    dybala: "Debutó profesionalmente en el club Instituto de Córdoba",
    enzo: "Debutó profesionalmente en el club Atlético Las Heras",
  },
};

const testQuestions = [
  { id: PLAYERS.CUTI, value: TOPIC.RANDOM_ONE.cuti },
  { id: PLAYERS.MESSI, value: TOPIC.DATE.messi },
  { id: PLAYERS.DYBALA, value: TOPIC.DATE.dybala },
  { id: PLAYERS.ENZO, value: TOPIC.DATE.enzo },
  { id: PLAYERS.CUTI, value: TOPIC.RANDOM_TWO.cuti },
  { id: PLAYERS.MESSI, value: TOPIC.RANDOM_TWO.messi },
  { id: PLAYERS.DYBALA, value: TOPIC.DEBUT.dybala },
  { id: PLAYERS.ENZO, value: TOPIC.DEBUT.enzo },
];

const initialStateCurrentQuestion = testQuestions[0];

const TriviaGame = () => {
  const { theme } = useParams();
  const navigate = useNavigate();
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

  const handlerClick = (cardId: string, value: string) => {
    setNumberOfQuestionCounter(questionCounter.length);
    dispatch(addQuestionCounter({ id: value }));
    const checkIsMatch = currentQuestion.id === cardId;
    if (checkIsMatch) return matchHandler();
  };

  useEffect(() => {
    if (currentGameStatus === STATUS.UNINITIALIZED)
      dispatch(startCurrentGame());
    dispatch(setCurrentGame({ game: GAMES.TRIVIA_GAME }));
    dispatch(setCurrentGameTheme({ theme: THEMES.FUTBOL }));
    if (!currentGametheme)
      dispatch(setCurrentGameTheme({ theme: currentGametheme }));
  }, [currentGameStatus, currentGametheme, dispatch]);

  useEffect(() => {
    if (!theme) return;
    void dispatch(setTriviaCard(theme));
  }, [triviaCardsStatus, theme, dispatch]);

  useEffect(() => {
    if (currentGameStatus === STATUS.LOADING && isEndGame) {
      dispatch(setStatusLoaded());
    }
  }, [isEndGame, dispatch, currentGameStatus]);

  useEffect(() => {
    if (currentGameStatus === STATUS.LOADING && !isEndGame) {
      setCurrentQuestion(testQuestions[numberOfQuestionCounter]);
    }
  }, [
    questionCounter,
    isEndGame,
    numberOfQuestionCounter,
    dispatch,
    currentGameStatus,
  ]);

  if(!triviaCards) return(<div>{'Loading..'}</div>)
    console.log('Nico triviaCards', triviaCards)
  return (
    <section className={styles.triviaGameContainer}>
      <Typography
            variant="h5"
            marginLeft={"10px"}
            m={"20px"}
            sx={{
              fontFamily: "Bruno ace",
              fontSize: "90px",
              cursor: "pointer",
            }}
            onClick={() => navigate(PATHS.HOME)}
          >
            {"GAME STORE"}
      </Typography>
      <div id={currentQuestion.id} className={styles.questionContainer}>
        <span>{currentQuestion.value}</span>
      </div>
      <div className={styles.triviaCardsContainer}>
        {triviaCards.map((card)=>{
          return(
            <TriviaCard
                key={card.id}
                id={card.id}
                value={card.value}
                onClick={() => handlerClick(card.id, card.value)}
                image={getFutbolImages(card.id)}
              />
          )
        })}
      </div>
    </section>
  )
};

export default TriviaGame;
