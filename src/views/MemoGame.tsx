/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import styles from "./game.module.scss";
import { CardItem } from "../CARD-GAME/components/CardItem/CardItem";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import {
  resetAllRedux,
  setFirstCardRedux,
  setIsMatchRedux,
  setSecondCardRedux,
  selectMemoGame,
} from "../state/slices/memoGame.slice";
import {
  getMemoGameCards,
  getMemoGamesStatus,
  setCardIsDoneFalse,
  setCardIsDoneTrue,
  setCardViewFrontFalse,
  setCardViewFrontTrue,
} from "../state/slices/memoCards.slice";
import checkIsDone from "../utils/checkIsDone";
import type { GameCard } from "../types/cards/card_types";
import { useNavigate, useParams } from "react-router-dom";
import { setCards } from "../state/slices/memoCards.slice";
import { addStep } from "../state/slices/steps.slice";
import { STATUS } from "../enums/status";
import {
  getCurrentGameStatus,
  getCurrentGametheme,
  setCurrentGameTheme,
  startCurrentGame,
  setStatusLoaded,
  setCurrentGamseStatusToInitialState,
  setCurrentGame,
} from "../state/slices/currentGame.slice";
import { THEMES } from "../enums/theme";
import { Box, Typography } from "@mui/material";
import { GAMES } from "../enums/games";
import { PATHS } from "../enums/paths";

const getCurrentTheme = (theme: string | undefined): THEMES => {
  if (theme === `:${THEMES.POKEMON}`) return THEMES.POKEMON;
  if (theme === `:${THEMES.DRAGONBALL}`) return THEMES.DRAGONBALL;
  return THEMES.OTHER;
};

const MemoGame = () => {
  const { theme } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const memoGameStatus = useAppSelector(getMemoGamesStatus);
  const cards = useAppSelector(getMemoGameCards);
  const memoGame = useAppSelector(selectMemoGame);
  const currentGameStatus = useAppSelector(getCurrentGameStatus);
  const currentGametheme = useAppSelector(getCurrentGametheme);
  const currentTheme = getCurrentTheme(theme);

  const { firstCardId, secondCardId, isMatch } = memoGame;

  const resetAll = () => {
    dispatch(resetAllRedux());
  };

  const resetGametimeOut = () => setTimeout(resetAll, 500);

  const resetViewFront = (firstCardId: string, secondCardId: string) => {
    dispatch(setCardViewFrontFalse(firstCardId));
    dispatch(setCardViewFrontFalse(secondCardId));
  };

  const gameOver = () => {
    const isOver = cards.every((card) => card.done === true);
    if (isOver) {
      void dispatch(setStatusLoaded());
    }
  };

  const resetViewFrontTimeOut = (firstCardId: string, secondCardId: string) =>
    setTimeout(() => resetViewFront(firstCardId, secondCardId), 500);

  const checkIsMatchTrue =
    firstCardId !== null && secondCardId !== null && isMatch === true;

  const checkIsMatchFalse =
    firstCardId !== null && secondCardId !== null && isMatch === false;

  const checkIsMatchNull =
    firstCardId !== null && secondCardId !== null && isMatch === null;

  const gameFunction = () => {
    if (!checkIsMatchNull) {
      if (checkIsMatchTrue) {
        dispatch(setCardIsDoneTrue(firstCardId));
        dispatch(setCardIsDoneTrue(secondCardId));
        dispatch(addStep());
        resetViewFrontTimeOut(firstCardId, secondCardId);
        resetGametimeOut();
        return;
      }
      if (checkIsMatchFalse) {
        dispatch(addStep());
        resetViewFrontTimeOut(firstCardId, secondCardId);
        resetGametimeOut();
        return;
      }
      return;
    }
    return;
  };

  const settingCards = (value: string, id: string) => {
    if (firstCardId === null) {
      dispatch(setFirstCardRedux({ value, id }));
      dispatch(setCardIsDoneFalse(id));
      dispatch(setCardViewFrontTrue(id));
      return;
    }
    if (secondCardId === null) {
      dispatch(setSecondCardRedux({ value, id }));
      dispatch(setCardIsDoneFalse(id));
      dispatch(setCardViewFrontTrue(id));
      dispatch(setIsMatchRedux());
      return;
    }
  };

  const handlesClick = (value: string, id: string) => {
    const isDone = checkIsDone(id, cards);
    if (isDone) return;
    settingCards(value, id);
  };

  useEffect(() => {
    if (currentGameStatus === STATUS.UNINITIALIZED)
      dispatch(startCurrentGame());
    if (!currentGametheme)
      dispatch(setCurrentGameTheme({ theme: currentTheme }));
  }, [currentGameStatus, dispatch]);

  useEffect(() => {
    const isOver = cards.every((card) => card.done === true);
    if (currentGameStatus === STATUS.LOADING && isOver)
      dispatch(startCurrentGame());
    if (currentGameStatus === STATUS.LOADED && isOver)
      dispatch(setCurrentGamseStatusToInitialState());
  }, [currentGameStatus, dispatch]);

  useEffect(() => {
    if (!theme || memoGameStatus !== STATUS.UNINITIALIZED) return;
    void dispatch(setCards(theme));
  }, [dispatch, memoGameStatus, theme]);

  useEffect(() => {
    gameOver();
    gameFunction();
  }, [memoGame.isMatch]);

  useEffect(() => {
    dispatch(setCurrentGame({ game: GAMES.CARDS_GAME }));
  }, []);

  return (
    <div className={styles.background}>
      <Box>
        <Typography
          variant="h5"
          marginTop={"-30px"}
          marginBottom={"50px"}
          sx={{ fontFamily: "Bruno ace", fontSize: "90px", cursor: "pointer" }}
          onClick={() => navigate(PATHS.HOME)}
        >
          {"GAME STORE"}
        </Typography>
      </Box>
      <div className={styles.container}>
        {cards.map((card: GameCard) => {
          return (
            <div
              role="button"
              key={card.id}
              className={`${styles.cardContainer}`}
              onClick={() => handlesClick(card.value, card.id)}
            >
              <CardItem card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemoGame;
