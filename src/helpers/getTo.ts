import { THEME } from "./config";

const getTo = (theme: string) => {
  switch (theme) {
    case THEME.DRAGONBALL:
      return "/:dragonball";

    case THEME.POKEMON:
      return "/:pokemon";

    case THEME.FUTBOL:
      return "/trivia";

    default:
      return "/";
  }
};

export default getTo;