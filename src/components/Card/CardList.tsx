import { GameDTO } from "@/src/@types/Game";
import { FlatList } from "react-native";
import { Card } from ".";

export function CardList({ data }: { data: GameDTO[] }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <Card data={item} />}
      style={{ marginHorizontal: 14 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
