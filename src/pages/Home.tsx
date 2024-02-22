//import styles from "./styles/home.module.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect } from "react";
import { Container, Grid, styled } from "@mui/material";
import HomeCard from "../CARD-GAME/components/HomeCard/HomeCard";
import { useAppDispatch } from "../state/hooks";
import { setCardsInitialState } from "../state/slices/cards.slice";
import getImage from "../helpers/getImage";
import getTo from "../helpers/getTo";
import { THEME } from "../helpers/config";
import { setTriviaCardInitialState } from "../state/slices/triviaCard.slice";

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
          <Img src={getImage(THEME.LOGO)} />
        </Grid>
        <Grid item md={4}>
          <HomeCard theme={THEME.POKEMON} to={getTo(THEME.POKEMON)} />
        </Grid>
        <Grid item md={4}>
          <HomeCard theme={THEME.DRAGONBALL} to={getTo(THEME.DRAGONBALL)} />
        </Grid>
        <Grid item md={4}>
          <HomeCard theme={THEME.FUTBOL} to={getTo(THEME.FUTBOL)} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
{
  /* <Typography variant="h1" sx={{ px: 5, fontWeight: 700 }}>
  {GAME_WELLCOME}
</Typography> */
}
{
  /* <Typography variant="body1" color="#191919" sx={{ px: 5 }}>
  {GAME_DESCRIPTION}
</Typography> */
}

/* import styles from "./home.module.scss";
import Typography from "@mui/material/Typography";
import Card from "../../components/HomeCard/HomeCard";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { THEME } from "../../../helpers/config";
import { setCardsInitialState } from "../../../state/slices/cards.slice";
import { useEffect } from "react";
import { useAppDispatch } from "../../../state/hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCardsInitialState());
  });

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Typography variant="h5" component="h2">
          Seleccioná un juego
        </Typography>
      </div>

      <div className={styles.body}>
        <section className={styles.cardContainer}>
          <Card theme={THEME.POKEMON} />
          <Card theme={THEME.DRAGONBALL} />
          <Card theme={THEME.OTHER} />
        </section>
      </div>
    </div>
  );
};

export default Home;
 */
