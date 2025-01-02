import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: process.env.EXPO_PUBLIC_API_URL,
  },
});
