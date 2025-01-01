import { GenreDTO } from "../Genre";
import { Store } from "../Store";

export interface GameDTO {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: {};
  platforms: {}[];
}

export interface GameDetails {
  background_image: string;
  background_image_additional: string;
  description: string;
  description_raw: string;
  genres: GenreDTO[];
  id: number;
  rating: number;

  metacritic: number;
  name: string;
  platforms: { platform: Platform }[];
  slug: string;
  stores: { store: Store }[];
  website: string;
}
