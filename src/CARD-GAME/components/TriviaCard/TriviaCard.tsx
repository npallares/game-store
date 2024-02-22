import React, { MouseEventHandler } from "react";
import { useAppDispatch } from "../../../state/hooks";
import { useNavigate } from "react-router-dom";
import { setInitialTimestamp } from "../../../state/slices/time.slice";
import styled from "@emotion/styled";
import { Box, Button, Paper } from "@mui/material";
import { futbolImages } from "../../../helpers/getImages";

interface Props {
  id: string;
  value: string;
  disabled?: boolean;
  to?: string | null;
  handleClick?: () => void | null;
}

const TriviaCard = ({
  id,
  value,
  handleClick,
  disabled = false,
}: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const Img = styled("img")({
    width: "auto",
    height: 200,
    objectFit: "cover",
    objectPosition: "inherit",
  });

  //console.log("IMAGES", futbolImages);

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
        width: "100%",
      }}
    >
      <Img src={futbolImages[id]} />
      <Box sx={{ p: 0 }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleClick}
          sx={{ width: "100%", height: 50 }}
          disabled={disabled}
        >
          {value}
        </Button>
      </Box>
    </Paper>
  );
};

export default TriviaCard;
