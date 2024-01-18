import styles from "./Home.module.css";
import Typography from "@mui/material/Typography";
import Card from "../components/Card/Card";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { THEME } from "../../helpers/config";
import { setCardsInitialState } from "../../state/slices/cards.slice";
import { useEffect } from "react";
import { useAppDispatch } from "../../state/hooks";

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
