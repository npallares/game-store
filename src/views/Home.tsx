//import styles from "./styles/home.module.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect } from "react";
import { Container, Grid, styled } from "@mui/material";
import HomeCard from "../CARD-GAME/components/HomeCard/HomeCard";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { setCardsInitialState } from "../state/slices/memoCards.slice";
import getImage from "../helpers/getImageByTheme";
import { setTriviaCardInitialState } from "../state/slices/triviaCards.slice";
import getUrlByThemeAndGame from "../helpers/getUrlByThemeAndGame";
import { GAMES } from "../enums/games";
import { THEMES } from "../enums/theme";
import { getCurrentGameStatus, setCurrentGamseStatusToInitialState, setStatusLoaded } from "../state/slices/currentGame.slice";

const Home = () => {
  const dispatch = useAppDispatch();
  const currentGameStatus = useAppSelector(getCurrentGameStatus);

  useEffect(() => {
    dispatch(setCardsInitialState());
    dispatch(setTriviaCardInitialState());
  });
  
  useEffect(() => {
    void dispatch(setStatusLoaded());
    dispatch(setCurrentGamseStatusToInitialState());
  }, [dispatch, currentGameStatus]);
  

  const Img = styled("img")({
    width: "auto",
    height: "50%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Container component="section">
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
        <Grid item md={4}>
          <HomeCard
            theme={THEMES.POKEMON}
            to={getUrlByThemeAndGame({
              theme: THEMES.POKEMON,
              game: GAMES.CARDS_GAME,
            })}
          />
        </Grid>
        <Grid item md={4}>
          <HomeCard
            theme={THEMES.DRAGONBALL}
            to={getUrlByThemeAndGame({
              theme: THEMES.DRAGONBALL,
              game: GAMES.CARDS_GAME,
            })}
          />
        </Grid>
        <Grid item md={4}>
          <HomeCard
            theme={THEMES.FUTBOL}
            to={getUrlByThemeAndGame({
              theme: THEMES.FUTBOL,
              game: GAMES.TRIVIA_GAME,
            })}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
