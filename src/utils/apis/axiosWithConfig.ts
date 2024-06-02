import axios from "axios";

const axiosWithConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosWithConfig.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken") as string | null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosWithConfig;
