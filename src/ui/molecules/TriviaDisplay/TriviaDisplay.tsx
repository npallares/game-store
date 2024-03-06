import { Typography } from "@mui/material";

interface TriviaDisplayProps {
  query: string;
}

const TriviaDisplay: React.FC<TriviaDisplayProps> = ({ query }) => {
  return (
    <Typography variant="body1" height={25} gutterBottom sx={{ m: 5 }}>
      {query}
    </Typography>
  );
};

export default TriviaDisplay;
