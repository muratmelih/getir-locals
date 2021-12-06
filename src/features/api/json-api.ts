import axios from "axios";
const jsonApi = axios.create({
  baseURL: "https://getir-local-json-server.herokuapp.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default jsonApi;
