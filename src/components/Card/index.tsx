import { Image, View } from "react-native";
import { Link } from "expo-router";

import { Typography } from "@/src/components/Typography";
import { styles } from "./styles";
import { Game } from "@/src/@types/Game";
import Rating from "../Rating";

interface CardProps {
  data: Game;
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
