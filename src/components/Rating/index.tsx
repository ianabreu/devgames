import { View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Typography } from "../Typography";

export default function Rating({ rating }: { rating: number }) {
  return (
    <View style={styles.row}>
      <Icon name="star" size={18} color={"#FABB1E"} />
      <Typography>{rating * 2} / 10</Typography>
    </View>
  );
}
