import { useLocalSearchParams, useRouter } from "expo-router";

import { WebView } from "react-native-webview";
import { Container } from "../components/Container";
import { View } from "react-native";
import { ButtonIcon } from "../components/Button";
import { Feather } from "@expo/vector-icons";
import { theme } from "../theme";

export default function WebViewGame() {
  const router = useRouter();

  const { link } = useLocalSearchParams() as { link: string };

  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 14,
          justifyContent: "space-between",
        }}
      >
        <ButtonIcon
          onPress={() => {
            router.back();
          }}
        >
          <Feather name="arrow-left" size={40} color={theme.colors.text} />
        </ButtonIcon>
      </View>
      <WebView
        source={{ uri: link }}
        style={{ backgroundColor: theme.colors.background }}
      />
    </Container>
  );
}
