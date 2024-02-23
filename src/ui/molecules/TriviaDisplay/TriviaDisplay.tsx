import { Box, Typography } from "@mui/material";

interface TriviaDisplayProps {
  query: string;
}

const TriviaDisplay: React.FC<TriviaDisplayProps> = ({ query }) => {
  return (
    <Typography variant="h5" gutterBottom sx={{ m: 5 }}>
      {query}
    </Typography>
  );
};

export default TriviaDisplay;
