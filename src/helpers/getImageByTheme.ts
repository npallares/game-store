import { THEMES } from "../enums/theme";
import LogoImage from "../assets/images/global/logo.jpg";
import PokemonImage from "../assets/images/global/pokemonBg.jpg";
import DefaultImage from "../assets/images/global/defaultBg.jpg";
import DragonBallImage from "../assets/images/global/dragonballBg.jpg";
import FutbolImage from "../assets/images/global/futbalBg.jpg";

const getImage = (theme: THEMES) => {
  switch (theme) {
    case THEMES.POKEMON:
      return PokemonImage;

    case THEMES.LOGO:
      return LogoImage;

    case THEMES.DRAGONBALL:
      return DragonBallImage;

    case THEMES.FUTBOL:
      return FutbolImage;

    default:
      return DefaultImage;
  }
};

export default getImage;
