import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
