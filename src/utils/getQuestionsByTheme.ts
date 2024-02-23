import { FUTBOL_QUESTIONS } from "../themes/futbol/futbol";

export const getQuestionsByTheme = (theme: string) => {
  switch (theme) {
    case ":futbol":
      return FUTBOL_QUESTIONS;

    default:
      return FUTBOL_QUESTIONS;
  }
};
