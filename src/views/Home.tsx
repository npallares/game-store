//import styles from "./styles/home.module.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect } from "react";
import { Box, Container, Grid, Paper, Typography, styled } from "@mui/material";
import HomeCard from "../CARD-GAME/components/HomeCard/HomeCard";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { setCardsInitialState } from "../state/slices/memoCards.slice";
import getImage from "../helpers/getImageByTheme";
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
    dispatch(triviaGameSliceToInitialState());
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
            <Typography
              variant="h5"
              m={"40px"}
              sx={{ fontFamily: "Bruno ace", fontSize: "30px" }}
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
            <Typography
              variant="h5"
              marginLeft={"10px"}
              marginBottom={"-40px"}
            >
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
      </Grid>
    </Container>
  );
};

export default Home;
