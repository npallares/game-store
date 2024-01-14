import { dragonBallImages, pokemonImages } from "../../../helpers/getImages";
import { CardState } from "../../../types/cards/card_types";

const DRAGONBALL = "dragonball";
const POKEMON = "pokemon";

export const getFrontImg = (reference: string, card: CardState) => {
  const { frontImg, value } = card;
  switch (reference) {
    case POKEMON:
      return pokemonImages[value];

    case DRAGONBALL:
      return dragonBallImages[value];

    default:
      return frontImg;
  }
};

export const getBackImg = (reference: string) => {
  switch (reference) {
    case "pokemon":
      return pokemonImages[POKEMON];

    case "drgonball":
      return dragonBallImages[DRAGONBALL];

    default:
      return dragonBallImages[DRAGONBALL];
  }
};
