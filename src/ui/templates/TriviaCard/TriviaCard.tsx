import { Button, Paper } from "@mui/material";
import { Images } from "../../index";
import styles from "./TrivbiaCard.module.scss"

interface TriviaCardProps {
  value: string;
  id: string;
  image?: string;
  onClick: () => void;
}

const TriviaCard: React.FC<TriviaCardProps> = ({
  id,
  image = "hola",
  onClick,
}: TriviaCardProps) => {
  const isDisabled = !onClick ? true : false;
  return(
    <div className={styles.triviaCardButtonContainer}>
      <button onClick={onClick} disabled={isDisabled} className={styles.buttonContainer}>
        <img src={image}/>     
      </button>
    </div>
  )
  return (
    <Paper
      component="span"
      id={id}
      sx={{
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: 3,
        borderColor: "grey",
        border: 1,
      }}
    >
      <Button
        onClick={onClick}
        variant="contained"
        size="large"
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          margin: 0,
          padding: 0,
        }}
        disabled={isDisabled}
      >
        <Images src={image} />
      </Button>
    </Paper>
  );
};

export default TriviaCard;
