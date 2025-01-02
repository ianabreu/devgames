import { Game } from "@/src/@types/Game";
import { FlatList, View } from "react-native";
import { Card } from ".";
import { ButtonIcon } from "../Button";
import { Feather as Icon } from "@expo/vector-icons";
import { theme } from "@/src/theme";
import { useGames } from "@/src/contexts/gameContext";

interface CardListProps {
  data: Game[];
  hasTrash?: boolean;
}
export function CardList({ data, hasTrash = false }: CardListProps) {
  const { removeFavorite } = useGames();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ position: "relative" }}>
          {hasTrash && (
            <ButtonIcon
              onPress={() => removeFavorite(item)}
              color={theme.colors.primary}
              style={{
                position: "absolute",
                right: 14,
                top: 14,
                zIndex: 10,
              }}
            >
              <Icon name="trash" color={theme.colors.text} size={25} />
            </ButtonIcon>
          )}
          <Card data={item} />
        </View>
      )}
      style={{ marginHorizontal: 14 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
