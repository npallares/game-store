//import styles from "./styles/home.module.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect } from "react";
import { Box, Container, Grid,  Typography } from "@mui/material";
import HomeCard from "../CARD-GAME/components/HomeCard/HomeCard";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { setCardsInitialState } from "../state/slices/memoCards.slice";
import { setTriviaCardInitialState } from "../state/slices/triviaCards.slice";
import getUrlByThemeAndGame from "../helpers/getUrlByThemeAndGame";
import { GAMES } from "../enums/games";
import { THEMES } from "../enums/theme";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import {
  getCurrentGameStatus,
  setCurrentGamseStatusToInitialState,
  setStatusLoaded,
} from "../state/slices/currentGame.slice";
import { triviaGameSliceToInitialState } from "../state/slices/triviaGame.slice";
import { setStepsInitialState } from "../state/slices/steps.slice";

const Home = () => {
  const dispatch = useAppDispatch();
  const currentGameStatus = useAppSelector(getCurrentGameStatus);

  useEffect(() => {
    dispatch(setCardsInitialState());
    dispatch(setTriviaCardInitialState());
    dispatch(setStepsInitialState());
  });

  useEffect(() => {
    void dispatch(setStatusLoaded());
    dispatch(setCurrentGamseStatusToInitialState());
    dispatch(triviaGameSliceToInitialState());
  }, [dispatch, currentGameStatus]);

  const text =
    "Game store es un ejercicio práctico realizado con TypeScript, Redux Toolkit y Material UI. Los juegos apelan a la memoria y el conocimiento, para posteriormente contabilizar cuanto tiempo se demoró el usuario en la resolucón, en cuantos pasos lo hizo y otras metricas.";

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
          <Typography
            variant="h5"
            m={"20px"}
            sx={{
              fontFamily: "Bruno ace",
              fontSize: "90px",
            }}
          >
            {"GAME STORE"}
          </Typography>
        </Grid>

        <Grid item md={6}>
          <Box display={"flex"}>
            <VideogameAssetIcon
              fontSize={"large"}
              sx={{ marginLeft: "40px", marginBottom: "-90px" }}
            />
            <Typography variant="h5" marginLeft={"10px"}>
              Card Game
            </Typography>
          </Box>
          <HomeCard
            theme={THEMES.POKEMON}
            to={getUrlByThemeAndGame({
              theme: THEMES.POKEMON,
              game: GAMES.CARDS_GAME,
            })}
          />
        </Grid>
        <Grid item md={6}>
          <Box display={"flex"}>
            <VideogameAssetIcon
              fontSize={"large"}
              sx={{ marginLeft: "40px", marginBottom: "-90px" }}
            />
            <Typography variant="h5" marginLeft={"10px"}>
              Card Game
            </Typography>
          </Box>
          <HomeCard
            theme={THEMES.DRAGONBALL}
            to={getUrlByThemeAndGame({
              theme: THEMES.DRAGONBALL,
              game: GAMES.CARDS_GAME,
            })}
          />
        </Grid>

        <Grid item md={6}>
          <Box display={"flex"}>
            <VideogameAssetIcon
              fontSize={"large"}
              sx={{ marginLeft: "40px" }}
            />
            <Typography variant="h5" marginLeft={"10px"} marginBottom={"-40px"}>
              Trivia Game
            </Typography>
          </Box>
          <HomeCard
            theme={THEMES.FUTBOL}
            to={getUrlByThemeAndGame({
              theme: THEMES.FUTBOL,
              game: GAMES.TRIVIA_GAME,
            })}
          />
        </Grid>
        <Grid item md={6}>
          <Box display={"flex"}>
            <VideogameAssetIcon
              fontSize={"large"}
              sx={{ marginLeft: "40px" }}
            />
            <Typography variant="h5" marginLeft={"10px"} marginBottom={"-40px"}>
              Trivia Game
            </Typography>
          </Box>
          <HomeCard
            disabled
            theme={THEMES.OTHER}
            to={getUrlByThemeAndGame({
              theme: THEMES.OTHER,
              game: GAMES.OTHER,
            })}
          />
        </Grid>
        <Grid
          item
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Grid>
        <Grid
          item
          md={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            m={"10px"}
            sx={{
              fontSize: "10px",
              textAlign: "center",
              padding: "0 60px",
              margin: "-5px 0",
            }}
          >
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;