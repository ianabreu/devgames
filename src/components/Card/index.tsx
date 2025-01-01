import { Image, View } from "react-native";
import { Link } from "expo-router";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import { Typography } from "@/src/components/Typography";
import { styles } from "./styles";
import { GameDTO } from "@/src/@types/Game";
import Rating from "../Rating";

interface CardProps {
  data: GameDTO;
}
export function Card({ data }: CardProps) {
  return (
    <Link href={{ pathname: "/details", params: { id: data.id } }}>
      <View style={styles.card}>
        <Image
          source={{
            uri: data.background_image,
          }}
          style={styles.image}
        />
        <View style={styles.infoArea}>
          <Typography variant="bold" style={styles.title}>
            {data.name}
          </Typography>
          <Rating rating={data.rating} />
        </View>
      </View>
    </Link>
  );
}
