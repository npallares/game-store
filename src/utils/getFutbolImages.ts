import { futbolImages } from "../helpers/getImages";

export const getFutbolImages = (id: string) => {
  return futbolImages[id];
};
