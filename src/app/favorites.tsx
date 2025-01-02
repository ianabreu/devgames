import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "expo-router";
import { Container } from "@/src/components/Container";
import { CardList } from "../components/Card/CardList";
import { Typography } from "../components/Typography";
import { Feather as Icon } from "@expo/vector-icons";
import { theme } from "../theme";
import { LoadingCards } from "../components/Loading";
import { useGames } from "../contexts/gameContext";
import { ButtonIcon } from "../components/Button";

export default function Favorites() {
  const { goBack } = useNavigation();
  const { favorites, loading } = useGames();

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
        <Typography variant="header">Favorites</Typography>
      </View>
      {loading && <LoadingCards />}
      {!loading && favorites.length === 0 && (
        <Typography style={{ marginHorizontal: 14, textAlign: "center" }}>
          Sua lista de favoritos esté vazia...
        </Typography>
      )}
      {!loading && favorites.length > 0 && (
        <CardList data={favorites} hasTrash />
      )}
    </Container>
  );
}
