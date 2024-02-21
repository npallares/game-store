import { createTheme } from "@mui/material";

const COLORS = {
  GREY: "#212121",
};

export const getMuiTheme = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: COLORS.GREY,
      },
      secondary: {
        main: "#00FF38",
      },
    },
  });
  return theme;
};
