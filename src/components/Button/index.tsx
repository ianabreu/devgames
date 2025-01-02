import {
  ColorValue,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { theme } from "@/src/theme";

interface ButtonProps extends TouchableOpacityProps {
  color?: ColorValue;
}
export function ButtonIcon({
  children,
  style,
  color = theme.colors.background,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        {
          width: 50,
          height: 50,

          alignItems: "center",
          justifyContent: "center",
          backgroundColor: color,
          borderRadius: 50,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}
export function Button({
  children,
  color = theme.colors.button,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
        borderRadius: 4,
      }}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}
