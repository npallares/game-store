import { Link, useNavigate } from "react-router-dom";
import { setInitialTimestamp } from "../../redux/slices/time.slice";
import { useAppDispatch } from "../../redux/hooks";
import Button from "@mui/material/Button";
import styles from "./Home.module.css";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setInitialTimestamp());
    navigate("/dragonball");
    navigate("/pokemon");
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Typography variant="h2" component="h2">
          Heading
        </Typography>
      </div>
      <div className={styles.body}>
        <h2>Selecciona un juego</h2>
        <section className={styles.cardContainer}>
          <Button variant="outlined" size="large" onClick={handleClick}>
            DRAGON BALL
          </Button>
          <Button variant="outlined" size="large" onClick={handleClick}>
            POKEMON
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Home;
