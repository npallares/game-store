//import Button from "@mui/material/Button";
//import styles from "./homeCard.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../state/hooks";
import { setInitialTimestamp } from "../../../state/slices/time.slice";
//import { THEME } from "../../../helpers/config";
import getImage from "../../../helpers/getImage";
import { Box, Button, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

export enum ImagesProps {
  POKEMON = "../../../public/cardsImages/pokemonIcon.png",
  DRAGONBALL = "../../../public/cardsImages/drabonballIcon.png",
  OTHER = "../../../public/cardsImages/defaultImagen.png",
}

interface Props {
  theme: string;
  disabled?: boolean;
  to?: string | null;
}

const HomeCard = ({
  theme,
  disabled = false,
  to = null,
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setInitialTimestamp());
    if (to) navigate(to);
  };

  const Img = styled("img")({
    width: "100%",
    height: 200,
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper
      sx={{
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        m: 5,
        borderRadius: 3,
        borderColor: "grey",
        border: 1,
      }}
    >
      <Img src={getImage(theme)} />
      <Box sx={{ p: 0 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => handleClick()}
          sx={{ width: "100%", height: 50 }}
          disabled={disabled}
        >
          {theme}
        </Button>
      </Box>
    </Paper>
  );
};

export default HomeCard;

/* import Button from "@mui/material/Button";
import styles from "./homeCard.module.scss";
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

const GameCard = ({ theme }: Props): JSX.Element => {
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

export default GameCard; */
