import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Game } from "@/src/@types/Game";
import {
  addGameToFavorites,
  getAllFavoritesGames,
  removeGameToFavorites,
} from "../services/GameServices";

type AuthProviderProps = {
  children: ReactNode;
};
type GameContextData = {
  loading: boolean;
  favorites: Game[];
  toogleFavorites: (newGame: Game) => Promise<void>;
  removeFavorite: (game: Game) => Promise<void>;
};

const GameContext = createContext({} as GameContextData);

export function GameProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<Game[]>([]);
  const getFavorites = useCallback(async () => {
    setLoading(true);

    try {
      const data = await getAllFavoritesGames();
      setFavorites(data);
    } catch (error) {
      console.error("ContextError: ", error);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setFavorites]);

  useEffect(() => {
    getFavorites();
  }, []);

  async function toogleFavorites(newGame: Game) {
    const exists = favorites.some((game) => game.id === newGame.id);
    if (exists) {
      await removeGameToFavorites(newGame);
      await getFavorites();
    } else {
      await addGameToFavorites(newGame);
      await getFavorites();
    }
  }
  async function removeFavorite(newGame: Game) {
    const newlist = await removeGameToFavorites(newGame);
    setFavorites(newlist);
  }

  return (
    <GameContext.Provider
      value={{ loading, favorites, toogleFavorites, removeFavorite }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGames() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("Fora do contexto");
  }
  return context;
}
