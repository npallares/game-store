import { dragonBallImages, pokemonImages } from "../helpers/getImages";
import { CardState } from "../types/cards/card_types";

const DRAGONBALL = "dragonball";
const POKEMON = "pokemon";

const getFrontImg = (reference: string, card: CardState) => {
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

export default getFrontImg
