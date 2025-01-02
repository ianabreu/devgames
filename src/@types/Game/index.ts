import { GenreDTO } from "../Genre";
import { Store } from "../Store";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  description_raw: string;
  background_image_additional: string;
  website: string;
  released: string;
  genres: GenreDTO[];
  stores: { store: Store }[];
  platforms: { platform: Platform }[];
}
