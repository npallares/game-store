import { THEME } from "./config";
import PokemonImage from "../assets/cardsImages/pokemonIcon.png";
import DefaultImage from "../assets/cardsImages/defaultImagen.png";
import DragonBallImage from "../assets/cardsImages/drabonballIcon.png";

const getImage = (theme: string) => {
  switch (theme) {
    case THEME.POKEMON:
      return PokemonImage;

    case THEME.DRAGONBALL:
      return DragonBallImage;

    default:
      return DefaultImage;
  }
};

export default getImage;
