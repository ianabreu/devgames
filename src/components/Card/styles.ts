import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    aspectRatio: 16 / 9,
    marginBottom: 14,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    objectFit: "cover",
    opacity: 0.6,
  },
  infoArea: {
    position: "absolute",
    bottom: 7,
    left: 12,
    gap: 8,
  },
  title: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
