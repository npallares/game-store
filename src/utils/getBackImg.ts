import { dragonBallImages, pokemonImages } from "../helpers/getImages";

const DRAGONBALL = "dragonball";
const POKEMON = "pokemon";

const getBackImg = (reference: string) => {
  switch (reference) {
    case POKEMON:
      return pokemonImages[POKEMON];

    case DRAGONBALL:
      return dragonBallImages[DRAGONBALL];

    default:
      return dragonBallImages[DRAGONBALL];
  }
};

export default getBackImg;
