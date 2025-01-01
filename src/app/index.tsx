import { Suspense, useEffect, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { router } from "expo-router";

import { Category } from "@/src/components/Category";
import { Container } from "@/src/components/Container";
import { Logo } from "@/src/components/Logo";
import { Typography } from "@/src/components/Typography";
import { getGenres, getTrendingGames } from "@/src/services/GameServices";
import { theme } from "@/src/theme";
import { GameDTO } from "@/src/@types/Game";
import { CardList } from "../components/Card/CardList";
import { LoadingCards, LoadingCategories } from "../components/Loading";

export default function Index() {
  const [games, setGames] = useState<GameDTO[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingGames, setLoadingGames] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      setLoadingCategories(true);
      try {
        const genres = await getGenres();
        setCategories(genres);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      } finally {
        setLoadingCategories(false);
      }
    }

    async function loadGames() {
      setLoadingGames(true);
      try {
        const trendingGames = await getTrendingGames();
        setGames(trendingGames);
      } catch (error) {
        console.error("Erro ao carregar jogos:", error);
      } finally {
        setLoadingGames(false);
      }
    }

    loadCategories();
    loadGames();
  }, []);

  function handleSearch() {
    if (search === "") {
      return;
    }
    router.push({
      pathname: "/search",
      params: { query: search, type: "search" },
    });
  }
  return (
    <Container>
      <View style={styles.row}>
        <Logo />
        <TouchableOpacity style={styles.btn}>
          <Icon name="bookmark" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TextInput
          placeholder="Looking for a game?"
          style={styles.input}
          value={search}
          onChangeText={(text) => {
            setSearch(text);
          }}
          placeholderTextColor={theme.colors.placeholder}
        />
        <TouchableOpacity style={styles.search} onPress={handleSearch}>
          <Icon name="search" size={31} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
      <View>
        {loadingCategories ? (
          <LoadingCategories />
        ) : (
          <Category data={categories} />
        )}
      </View>

      <View
        style={{
          margin: 14,
          marginTop: 24,
        }}
      >
        <Typography variant="title">Trending games</Typography>
      </View>
      {loadingGames ? <LoadingCards /> : <CardList data={games} />}
    </Container>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    paddingHorizontal: 14,
  },
  btn: {
    backgroundColor: theme.colors.input,
    width: 45,
    height: 45,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontFamily: "Sora-Regular",
    fontSize: theme.fontSize.input,
    backgroundColor: theme.colors.input,
    color: theme.colors.text,
    flex: 1,
    height: 44,
    borderRadius: 44,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
});
