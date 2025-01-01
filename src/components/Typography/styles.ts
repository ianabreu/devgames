import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    fontFamily: "Sora-Regular",
    color: theme.colors.text,
    fontSize: theme.fontSize.body,
  },
  bold: {
    fontFamily: "Sora-Bold",
    color: theme.colors.text,
    fontSize: theme.fontSize.body,
  },
  header: {
    fontFamily: "Sora-Regular",
    color: theme.colors.text,
    fontSize: theme.fontSize.header,
  },
  input: {
    fontFamily: "Sora-Regular",
    color: theme.colors.text,
    fontSize: theme.fontSize.input,
  },
  title: {
    fontFamily: "Sora-Bold",
    color: theme.colors.text,
    fontSize: theme.fontSize.title,
  },
  logo: {
    width: "100%",
    fontFamily: "Sora-Bold",
    color: theme.colors.text,
    fontSize: theme.fontSize.logo,
  },
  button: {
    width: "100%",
    fontFamily: "Sora-Regular",
    color: theme.colors.text,
    fontSize: theme.fontSize.body,
    textAlign: "center",
  },
});
