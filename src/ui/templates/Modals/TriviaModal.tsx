import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../../state/hooks";
import { getFinalTime } from "../../../state/slices/time.slice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import {
  getLogs,
  selectMatchCounter,
} from "../../../state/slices/triviaGame.slice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const TriviaModal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const finalTime = useAppSelector(getFinalTime);
  const matches = useAppSelector(selectMatchCounter);
  const globalLogs = useAppSelector(getLogs);

  const numberOfQuestions = globalLogs.length - 1;
  const wrongs = numberOfQuestions - matches;

  const handleClose = () => {
    navigate("/");
    setOpen(false);
    //console.log("GOING GO HOME!!");
  };

  const handleClick = () => {
    navigate("/");
    handleClose();
    //console.log("COLSED!!");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 700,
            height: "auto",
            border: 0,
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h5"
            marginTop={1}
            marginBottom={2}
            sx={{
              fontFamily: "Bruno ace",
              fontSize: "50px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            {"GAME OVER"}
          </Typography>

          <Box display={"flex"} alignItems={"start"}>
            <AccessAlarmIcon
              color="primary"
              sx={{ marginRight: "10px", border: "none", color: "#f57c00" }}
            />
            <Typography
              variant="h5"
              gutterBottom
              sx={{ marginRight: "10px", border: "none" }}
            >
              {`Resolviste el juego en ${finalTime} segundos.`}
            </Typography>
          </Box>

          <Box display={"flex"} alignItems={"start"}>
            <CheckCircleOutlineIcon
              color="success"
              sx={{ marginRight: "10px", border: "none" }}
            />
            <Typography
              variant="h5"
              gutterBottom
              sx={{ marginRight: "10px", border: "none" }}
            >
              {`Respuestas Correctas: ${matches}.`}
            </Typography>
          </Box>

          <Box display={"flex"} alignItems={"start"}>
            <HighlightOffIcon
              sx={{ marginRight: "10px", border: "none", color: "#dd2c00" }}
            />
            <Typography
              variant="h5"
              gutterBottom
              sx={{ marginRight: "10px", border: "none" }}
            >
              {`Respuestas Incorrectas: ${wrongs}.`}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            alignItems={"start"}
            sx={{ marginBottom: "20px" }}
          >
            <ManageHistoryIcon
              color="primary"
              sx={{ marginRight: "10px", border: "none", color: "#3f51b5" }}
            />
            <Typography
              variant="h5"
              gutterBottom
              sx={{ marginRight: "10px", border: "none" }}
            >
              {"Logs: "}
              {globalLogs.map((el, index) => {
                if (index === 0) return;
                return `${el} - `;
              })}
            </Typography>
          </Box>

          <Button
            variant="contained"
            onClick={handleClick}
            size="large"
            sx={{ marginTop: 3 }}
          >
            restart
          </Button>
          <Button
            disabled
            variant="outlined"
            size="large"
            sx={{ marginTop: 3, marginLeft: 3 }}
          >
            send data
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default TriviaModal;
