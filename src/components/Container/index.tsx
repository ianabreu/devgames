import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";

interface ContainerProps {
  children?: ReactNode;
}
export function Container({ children }: ContainerProps) {
  return <View style={styles.container}>{children}</View>;
}
