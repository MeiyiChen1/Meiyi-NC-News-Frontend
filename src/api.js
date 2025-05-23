import axios from "axios";

const api = axios.create({
  baseURL: "https://meiyi-chen-nc-news.onrender.com/api",
  timeout: 10000,
});

export default api;
