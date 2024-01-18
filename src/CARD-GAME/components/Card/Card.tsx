import Button from "@mui/material/Button";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../state/hooks";
import { setInitialTimestamp } from "../../../state/slices/time.slice";
import DragonBallImage from "./../../../../public/cardsImages/drabonballIcon.png";
import PokemonImage from "./../../../../public/cardsImages/pokemonIcon.png";
import DefaultImage from "./../../../../public/cardsImages/defaultImagen.png";
import { THEME } from "../../../helpers/config";

export enum ImagesProps {
  POKEMON = "../../../public/cardsImages/pokemonIcon.png",
  DRAGONBALL = "../../../public/cardsImages/drabonballIcon.png",
  OTHER = "../../../public/cardsImages/defaultImagen.png",
}

interface Props {
  theme: string;
}

const getImage = (theme: string) => {
  switch (theme) {
    case THEME.POKEMON:
      return PokemonImage;

    case THEME.DRAGONBALL:
      return DragonBallImage;

    default:
      return DefaultImage;
  }
};

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
