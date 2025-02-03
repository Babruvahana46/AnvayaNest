import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend.com/api",
});

export default API;