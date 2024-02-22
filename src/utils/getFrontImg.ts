import { dragonBallImages, pokemonImages } from "../helpers/getImages";
import {  GameCard } from "../types/cards/card_types";

const DRAGONBALL = "dragonBall";
const POKEMON = "pokemon";

const getFrontImg = (reference: string, card:  GameCard) => {
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

export default getFrontImg;
