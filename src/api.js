import axios from "axios";

const api = axios.create({
  baseURL: "https://meiyi-chen-nc-news.onrender.com/api",
});

export default api;
