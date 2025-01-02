import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { theme } from "@/src/theme";
import { SafeAreaView } from "react-native";
import { GameProvider } from "../contexts/gameContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Sora-Bold": require("@/assets/fonts/Sora-Bold.ttf"),
    "Sora-Regular": require("@/assets/fonts/Sora-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GameProvider>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <Stack
          initialRouteName="index"
          screenOptions={{
            headerShown: false,
            headerBackTitleStyle: { fontFamily: "Sora-Bold" },
            navigationBarColor: theme.colors.background,

            statusBarStyle: "light",
            statusBarTranslucent: false,
            statusBarAnimation: "fade",
            statusBarBackgroundColor: theme.colors.background,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              statusBarTranslucent: false,
            }}
          />
          <Stack.Screen
            name="modal"
            options={{
              presentation: "fullScreenModal",
              navigationBarColor: theme.colors.shape,
              animation: "slide_from_bottom",
            }}
          />
          <Stack.Screen name="details" />
          <Stack.Screen name="search" />
          <Stack.Screen name="webview" />
          <Stack.Screen name="favorites" />
        </Stack>
      </SafeAreaView>
    </GameProvider>
  );
}
