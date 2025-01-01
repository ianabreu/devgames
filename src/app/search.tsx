import { TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Container } from "@/src/components/Container";
import { useEffect, useState } from "react";
import { searchGameByGenre, searchGameByName } from "../services/GameServices";
import { GameDTO } from "../@types/Game";
import { CardList } from "../components/Card/CardList";
import { Typography } from "../components/Typography";
import { Feather as Icon } from "@expo/vector-icons";
import { theme } from "../theme";
import Loading, { LoadingCards } from "../components/Loading";

export default function Search() {
  const {
    query,
    type,
    headerTitle = "Search",
  } = useLocalSearchParams() as {
    query: string;
    type: "search" | "category";
    headerTitle?: string;
  };
  const { goBack } = useNavigation();
  const [games, setGames] = useState<GameDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadSearch() {
      const searchData = await searchGameByName(query);
      setGames(searchData);
      setLoading(false);
    }
    async function loadCategory() {
      const category = await searchGameByGenre(query);
      setGames(category);
      setLoading(false);
    }

    type === "category" ? loadCategory() : loadSearch();
  }, [query]);

  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 14,
          alignItems: "center",
          gap: 8,
          marginBottom: 14,
        }}
      >
        <TouchableOpacity
          onPress={goBack}
          style={{
            width: "15%",
            padding: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="arrow-left" size={40} color={theme.colors.text} />
        </TouchableOpacity>
        <Typography variant="header">{headerTitle}</Typography>
      </View>
      {loading && <LoadingCards />}
      {!loading && games.length > 0 && <CardList data={games} />}
      {!loading && games.length === 0 && (
        <Typography style={{ marginHorizontal: 14, textAlign: "center" }}>
          Não encontramos um jogo com esse nome...
        </Typography>
      )}
    </Container>
  );
}
