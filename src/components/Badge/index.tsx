import { Pressable, PressableProps } from "react-native";
import { Typography } from "../Typography";
import { styles } from "./styles";
import { theme } from "@/src/theme";

interface BadgeProps extends PressableProps {
  text: string;
  type: "genre" | "platform";
}
export default function Badge({ text, type, ...rest }: BadgeProps) {
  return (
    <Pressable
      style={[
        styles.defaultStyles,
        {
          backgroundColor:
            type === "genre" ? theme.colors.badge : theme.colors.shape,
        },
      ]}
      {...rest}
    >
      <Typography variant={type === "genre" ? "bold" : "body"}>
        {text}
      </Typography>
    </Pressable>
  );
}
