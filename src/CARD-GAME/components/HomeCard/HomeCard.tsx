import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../state/hooks";
import { setInitialTimestamp } from "../../../state/slices/time.slice";
import getImage from "../../../helpers/getImageByTheme";
import { Box, Button, Paper } from "@mui/material";
import styled from "@emotion/styled";
import { THEMES } from "../../../enums/theme";

export enum ImagesProps {
  POKEMON = "../../../public/images/pokemonIcon.png",
  DRAGONBALL = "../../../public/images/drabonballIcon.png",
  OTHER = "../../../public/images/defaultImagen.png",
}

interface Props {
  theme: THEMES;
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

  const isDisabled = disabled ? "auto" : "pointer";

  return (
    <Paper
      sx={{
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        m: 5,
        marginTop: 1,
        borderRadius: 3,
        borderColor: "grey",
        border: 1,
        cursor: isDisabled,
      }}
      onClick={() => !disabled && handleClick()}
    >
      <Img src={getImage(theme)} />
      <Box sx={{ p: 0 }}>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "100%", height: 50, borderRadius:'0' }}
          disabled={disabled}
        >
          {theme}
        </Button>
      </Box>
    </Paper>
  );
};

export default HomeCard;
