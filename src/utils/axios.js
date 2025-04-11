import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1", // your backend root URL
});

export default instance;
