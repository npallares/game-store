import { CardState } from "../types/cards/card_types";

const cardsMixer = (array:CardState[]) => {
   const shuffledArray = [...array]; // Crear una copia del array para evitar modificar el original
   shuffledArray.sort(() => Math.random() - 0.5); // Utilizar sort() con función de comparación aleatoria
   return shuffledArray;
};

export default cardsMixer