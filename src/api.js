import axios from "axios";

const api = axios.create({
  baseURL: "https://meiyi-chen-nc-news.onrender.com/api",
  timeout: 1000,
});
axios
  .get("https://meiyi-chen-nc-news.onrender.com/api/")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
export default api;
