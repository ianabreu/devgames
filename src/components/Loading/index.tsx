import {
  Dimensions,
  View,
  StyleSheet,
  ColorValue,
  DimensionValue,
  AnimatableNumericValue,
} from "react-native";
import { theme } from "@/src/theme";

interface ItemProps {
  backgroundColor?: ColorValue;
  width?: DimensionValue;
  height?: DimensionValue;
  marginTop?: DimensionValue;
  marginLeft?: DimensionValue;
  marginRight?: DimensionValue;
  marginBottom?: DimensionValue;
  borderRadius?: string | AnimatableNumericValue;
  aspectRatio?: number;
}
const { width: screenWidth } = Dimensions.get("screen");

export function LoadingDetails() {
  return (
    <View style={styles.container}>
      <Item width={screenWidth} height={screenWidth} />
      <View style={{ paddingHorizontal: 14, gap: 8 }}>
        <Item width={screenWidth * 0.33} height={20} />
        <Item width={screenWidth * 0.7} height={30} />

        <Item width={screenWidth * 0.2} height={30} marginTop={16} />

        <View style={{ flexDirection: "row", gap: 8 }}>
          <Item width={screenWidth * 0.32} height={30} />
          <Item width={screenWidth * 0.25} height={30} />
          <Item width={screenWidth * 0.27} height={30} />
        </View>
      </View>

      <View style={{ paddingHorizontal: 14 }}>
        <Item width={screenWidth * 0.3} height={30} marginBottom={16} />
        <Item width={screenWidth * 0.9} height={12} marginBottom={4} />
        <Item width={screenWidth * 0.87} height={12} marginBottom={4} />
        <Item width={screenWidth * 0.31} height={12} marginBottom={4} />
        <Item width={screenWidth * 0.85} height={12} marginBottom={4} />
        <Item width={screenWidth * 0.87} height={12} marginBottom={4} />
        <Item width={screenWidth * 0.89} height={12} marginBottom={4} />
        <Item width={screenWidth * 0.46} height={12} marginBottom={4} />
        <Item width={screenWidth * 0.9} height={40} marginTop={4} />
      </View>
    </View>
  );
}
function Item({
  backgroundColor = theme.colors.shape,
  borderRadius = 2,
  ...rest
}: ItemProps) {
  return <View style={{ backgroundColor, borderRadius, ...rest }} />;
}

export function LoadingCards() {
  return (
    <View style={{ paddingHorizontal: 14 }}>
      <Item
        width={"100%"}
        marginBottom={14}
        borderRadius={8}
        aspectRatio={16 / 9}
      />
      <Item
        width={"100%"}
        marginBottom={14}
        borderRadius={8}
        aspectRatio={16 / 9}
      />
      <Item
        width={"100%"}
        marginBottom={14}
        borderRadius={8}
        aspectRatio={16 / 9}
      />
      <Item
        width={"100%"}
        marginBottom={14}
        borderRadius={8}
        aspectRatio={16 / 9}
      />
    </View>
  );
}
export function LoadingCategories() {
  return (
    <View style={{ paddingHorizontal: 8, flexDirection: "row", gap: 16 }}>
      <Item width={90} height={40} borderRadius={8} />
      <Item width={70} height={40} borderRadius={8} />
      <Item width={100} height={40} borderRadius={8} />
      <Item width={70} height={40} borderRadius={8} />
      <Item width={40} height={40} borderRadius={8} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, gap: 32 },
  image: {
    backgroundColor: theme.colors.badge,
    width: screenWidth,
    height: screenWidth,
    overflow: "hidden",
  },
});
