import { FlatList, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Typography } from "../Typography";
import { GenreDTO } from "@/src/@types/Genre";
import { styles } from "./styles";

interface CategoryProps {
  data: GenreDTO[];
}
interface ItemProps {
  item: GenreDTO;
  filter: (item: GenreDTO) => void;
}

export function Category({ data }: CategoryProps) {
  async function handleFilter(item: GenreDTO) {
    router.push({
      pathname: "/search",
      params: { query: item.slug, type: "category", headerTitle: item.name },
    });
  }
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} filter={handleFilter} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

function Item({ item, filter }: ItemProps) {
  function filterBySlug() {
    filter(item);
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={filterBySlug}
    >
      <Typography>{item.name}</Typography>
    </TouchableOpacity>
  );
}
