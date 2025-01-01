import { GameDTO } from "@/src/@types/Game";
import { GenreDTO } from "@/src/@types/Genre";
import { formatDatetoString, subtractYear } from "@/src/utils/dates";
import { api } from "./apiConfig";

export async function getTrendingGames() {
  let games: GameDTO[] = [];
  try {
    const response = await api.get("/games", {
      params: {
        page_size: 10,
        dates: `${formatDatetoString(
          subtractYear(new Date(), 2)
        )},${formatDatetoString(new Date())}`,
        ordering: "-added",
      },
    });
    games.push(...response.data.results);
  } catch (error) {
    console.log(error);
  } finally {
    return games;
  }
}
export async function getGenres() {
  let genres: GenreDTO[] = [];
  try {
    const response = await api.get("/genres");
    for (let i = 0; i < response.data.results.length; i++) {
      const genre = response.data.results[i];
      genres.push(genre);
    }
    genres.sort((a, b) => a.name.localeCompare(b.name));
    const all_slug = genres.map((item) => item.slug).join(",");
    genres.unshift({
      id: 0,
      name: "All games",
      slug: all_slug,
    });
  } catch (error) {
    console.log(error);
  } finally {
    return genres;
  }
}
export async function searchGameByName(query: string) {
  let games: GameDTO[] = [];
  try {
    const response = await api.get("/games", {
      params: {
        page_size: 5,
        search: query,
      },
    });
    games.push(...response.data.results);
  } catch (error) {
    console.log(error);
  } finally {
    return games;
  }
}
export async function searchGameByGenre(genreSlug: string) {
  let games: GameDTO[] = [];
  try {
    const response = await api.get("/games", {
      params: {
        page_size: 5,
        genres: genreSlug,
      },
    });
    games.push(...response.data.results);
  } catch (error) {
    console.log(error);
  } finally {
    return games;
  }
}
export async function getGameDetails(id: number) {
  try {
    const response = await api.get(`/games/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
