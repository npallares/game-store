import { THEMES } from "../enums/theme";
import { GAMES } from "../enums/games";

interface Props {
  theme: THEMES;
  game: GAMES;
}

const getUrlByThemeAndGame = ({ theme, game }: Props) => {
  const url = game + "/:" + theme;
  return url;
};

export default getUrlByThemeAndGame;
