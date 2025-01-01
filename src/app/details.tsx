import { Typography } from "@/src/components/Typography";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../services/GameServices";
import { Feather } from "@expo/vector-icons";
import { Button, ButtonIcon } from "../components/Button";
import { theme } from "../theme";
import Rating from "../components/Rating";
import { GameDetails } from "../@types/Game";
import Badge from "../components/Badge";
import { LoadingDetails } from "../components/Loading";
import { GenreDTO } from "../@types/Genre";

const { width } = Dimensions.get("screen");
export default function Details() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [game, setGame] = useState<GameDetails>({} as GameDetails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGameDetails() {
      setLoading(true);
      try {
        const response = await getGameDetails(Number(id));
        setGame(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadGameDetails();
  }, [id]);

  async function openGenres(item: GenreDTO) {
    router.push({
      pathname: "/search",
      params: { query: item.slug, type: "category", headerTitle: item.name },
    });
  }

  function readFullDescription() {
    router.push({
      pathname: "/modal",
      params: {
        description: game.description_raw,
      },
    });
  }

  if (loading) {
    return <LoadingDetails />;
  } else {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <ScrollView>
          <View
            style={{
              minHeight: 250,
              width: width,
              position: "relative",
            }}
          >
            <ScrollView horizontal>
              <Image
                source={{
                  uri: game.background_image,
                }}
                style={{
                  height: "100%",
                  width: width - width * 0.05,
                  aspectRatio: 1 / 0.95,
                  objectFit: "cover",
                }}
              />
              {game.background_image_additional && (
                <Image
                  source={{
                    uri: game.background_image_additional,
                  }}
                  style={{
                    height: "100%",
                    width: width - width * 0.05,
                    aspectRatio: 1 / 0.95,
                    objectFit: "cover",
                  }}
                />
              )}
            </ScrollView>
            <View
              style={{
                position: "absolute",
                left: 14,
                top: 14,
              }}
            >
              <ButtonIcon
                onPress={() => {
                  router.back();
                }}
              >
                <Feather
                  name="arrow-left"
                  size={40}
                  color={theme.colors.text}
                />
              </ButtonIcon>
            </View>
            <View
              style={{
                position: "absolute",
                right: 14,
                top: 14,
              }}
            >
              <ButtonIcon>
                <Feather name="bookmark" size={30} color={theme.colors.text} />
              </ButtonIcon>
            </View>
            <View style={{ position: "absolute", right: 14, bottom: -25 }}>
              <ButtonIcon
                color={theme.colors.primary}
                onPress={() =>
                  router.navigate({
                    pathname: "/webview",
                    params: { link: game.website },
                  })
                }
              >
                <Feather name="link" size={30} color={theme.colors.text} />
              </ButtonIcon>
            </View>
          </View>

          <View style={[styles.section, { marginTop: 38 }]}>
            <Rating rating={game.rating} />
            <Typography variant="title">{game.name}</Typography>
          </View>

          <View style={styles.section}>
            <Typography variant="title">Genres</Typography>
            <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
              {game.genres.length > 0 &&
                game.genres.map((genre) => (
                  <Badge
                    onPress={() => openGenres(genre)}
                    key={genre.id}
                    text={genre.name}
                    type="genre"
                  />
                ))}
            </View>
          </View>

          <View style={styles.section}>
            <Typography variant="title">Description</Typography>
            <Typography numberOfLines={7}>{game.description_raw}</Typography>
            <Button>
              <Typography variant="button" onPress={readFullDescription}>
                Read full description
              </Typography>
            </Button>
          </View>

          <View style={styles.section}>
            <Typography variant="title">Platforms</Typography>
            <View style={styles.wrapRow}>
              {game.platforms.length > 0 &&
                game.platforms.map(({ platform }) => (
                  <Badge
                    key={platform.id}
                    text={platform.name}
                    type="platform"
                  />
                ))}
            </View>
          </View>
          <View style={styles.section}>
            <Typography variant="title">Stores</Typography>
            <View style={styles.wrapRow}>
              {game.stores.length > 0 &&
                game.stores.map(({ store }) => (
                  <Badge key={store.id} text={store.name} type="platform" />
                ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  section: { marginVertical: 12, marginHorizontal: 14, gap: 8 },
  wrapRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});
