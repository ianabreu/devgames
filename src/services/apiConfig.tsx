import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "af09d163549144699f2f8e920cbf175b",
  },
});
