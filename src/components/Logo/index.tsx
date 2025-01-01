import { Text, View } from "react-native";
import { Typography } from "../Typography";
import { theme } from "@/src/theme";

export function Logo() {
  return (
    <View>
      <Typography variant="logo">
        Dev
        <Typography variant="logo" style={{ color: theme.colors.primary }}>
          Games
        </Typography>
      </Typography>
    </View>
  );
}
