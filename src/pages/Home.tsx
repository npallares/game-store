//import styles from "./styles/home.module.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect } from "react";
import { Container, Grid, styled } from "@mui/material";
import HomeCard from "../CARD-GAME/components/HomeCard/HomeCard";
import { useAppDispatch } from "../state/hooks";
import { setCardsInitialState } from "../state/slices/gameCards.slice";
import getImage from "../helpers/getImageByTheme";
import { setTriviaCardInitialState } from "../state/slices/triviaCard.slice";
import getUrlByThemeAndGame from "../helpers/getTo";
import { GAMES } from "../enums/games";
import { THEMES } from "../enums/theme";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCardsInitialState());
    dispatch(setTriviaCardInitialState());
  });

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
