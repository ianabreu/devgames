import { Text, TextProps as RNTextProps } from "react-native";
import { styles } from "./styles";

interface TypographyProps extends RNTextProps {
  variant?: keyof typeof styles;
}

export function Typography({
  variant = "body",
  style,
  children,
  ...textProps
}: TypographyProps) {
  return (
    <Text style={[styles[variant], style]} {...textProps}>
      {children}
    </Text>
  );
}
