import Button from "@mui/material/Button";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../state/hooks";
import { setInitialTimestamp } from "../../../state/slices/time.slice";
import { THEME } from "../../../helpers/config";
import getImage from "../../../helpers/getImage";

export enum ImagesProps {
  POKEMON = "../../../public/cardsImages/pokemonIcon.png",
  DRAGONBALL = "../../../public/cardsImages/drabonballIcon.png",
  OTHER = "../../../public/cardsImages/defaultImagen.png",
}

interface Props {
  theme: string;
}

const Card = ({ theme }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isOther = theme === THEME.OTHER;

  const handleClick = (theme: string) => {
    dispatch(setInitialTimestamp());
    navigate(`/:${theme}`);
  };

  return (
    <div className={styles.buttonContainer}>
      <span className={styles.imageContainer}>
        <img src={getImage(theme)} />
      </span>
      <span className={styles.buttonSection}>
        {isOther ? (
          <Button variant="contained" size="large" disabled>
            {theme}
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            onClick={() => handleClick(theme)}
          >
            {theme}
          </Button>
        )}
      </span>
    </div>
  );
};

export default Card;
