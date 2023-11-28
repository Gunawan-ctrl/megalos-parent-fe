import axios from "axios";

const base = "http://192.168.101.166:8001/api/v1/";
const axiosInstance = axios.create({
  baseURL: base,
});

export default axiosInstance;
