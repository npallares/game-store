import { THEME } from "./config";
import LogoImage from "../assets/logo/memoflip.jpg";
import PokemonImage from "../assets/cardsImages/pokemonBg.jpg";
import DefaultImage from "../assets/cardsImages/defaultBg.jpg";
import DragonBallImage from "../assets/cardsImages/dragonballBg.jpg";
import FutbolImage from "../assets/cardsImages/futbalBg.jpg";

const getImage = (theme: string) => {
  switch (theme) {
    case THEME.POKEMON:
      return PokemonImage;

    case THEME.LOGO:
      return LogoImage;

    case THEME.DRAGONBALL:
      return DragonBallImage;
    
      case THEME.FUTBOL:
      return FutbolImage;

    default:
      return DefaultImage;
  }
};

export default getImage;
