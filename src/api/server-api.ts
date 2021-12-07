import axios from "axios";
const serverApi = axios.create({
  baseURL: "https://getir-local-api.herokuapp.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default serverApi;
