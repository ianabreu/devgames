import { Game } from "@/src/@types/Game";
import { GenreDTO } from "@/src/@types/Genre";
import { formatDatetoString, subtractYear } from "@/src/utils/dates";
import { api } from "./apiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getAllFavoritesGames(): Promise<Game[]> {
  const gameList: Game[] = [];
  try {
    const response = await AsyncStorage.getItem("@games");
    if (response === null) return gameList;
    const parseData: Game[] = JSON.parse(response);

    gameList.push(...parseData);
  } catch (error) {
    console.log(error);
  } finally {
    return gameList;
  }
}
export async function addGameToFavorites(newGame: Game) {
  const favorites = await getAllFavoritesGames();
  const exists = favorites.some((game) => game.id === newGame.id);
  if (!exists) {
    favorites.push(newGame);
    await AsyncStorage.setItem("@games", JSON.stringify(favorites));
  }
}
export async function removeGameToFavorites(newGame: Game) {
  const favorites = await getAllFavoritesGames();
  const filteredFavorites = favorites.filter((game) => game.id !== newGame.id);
  await AsyncStorage.setItem("@games", JSON.stringify(filteredFavorites));
  return filteredFavorites;
}
//---------------------------------------------------------------------
export async function getTrendingGames() {
  let games: Game[] = [];
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
  let games: Game[] = [];
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
  let games: Game[] = [];
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
