import axios from "axios";

//console.log("AXIOS BASE URL =>", process.env.REACT_APP_API_BASE_URL);
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;
