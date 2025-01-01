import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { theme } from "@/src/theme";
import { ButtonIcon } from "@/src/components/Button";
import { Feather } from "@expo/vector-icons";
import { Typography } from "@/src/components/Typography";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Modal() {
  const { description } = useLocalSearchParams() as { description: string };
  const router = useRouter();

  return (
    <View style={styles.centeredView}>
      <View style={styles.row}>
        <ButtonIcon
          onPress={() => {
            router.back();
          }}
        >
          <Feather name="arrow-left" size={40} color={theme.colors.text} />
        </ButtonIcon>
        <Typography variant="header">Description</Typography>
        <ButtonIcon style={{ opacity: 0 }} activeOpacity={0}>
          <Feather name="arrow-left" size={40} color={theme.colors.text} />
        </ButtonIcon>
      </View>
      <ScrollView>
        <Typography style={styles.content}>{description}</Typography>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: theme.colors.shape,
    paddingHorizontal: 14,
    paddingTop: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 14,
  },
  content: { textAlign: "left", lineHeight: 24, marginBottom: 14 },
});
