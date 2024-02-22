import { Box, Button, Paper } from "@mui/material";
import { Images } from "../../index";

interface TriviaCardProps {
  value: string;
  id: string;
  image?: string;
  onClick: () => void;
}

const TriviaCard: React.FC<TriviaCardProps> = ({
  image,
  value,
  id,
  onClick,
}: TriviaCardProps) => {
  const isDisabled = !onClick ? true : false;
  return (
    <Paper
      id={id}
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
      <Images src={image} />
      <Box sx={{ p: 0 }}>
        <Button
          onClick={onClick}
          variant="contained"
          size="large"
          sx={{ width: "100%", height: 50 }}
          disabled={isDisabled}
        >
          {`${value}`}
        </Button>
      </Box>
    </Paper>
  );
};

export default TriviaCard;
