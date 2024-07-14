import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.extrazone.com",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
    "X-Country-Id": "TR",
    "X-Language-Id": "TR",
  },
});

export default AxiosInstance;
