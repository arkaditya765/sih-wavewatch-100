// frontend/src/api.js
import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:3000";

const api = axios.create({
  baseURL: API,
  // you can add global headers here, timeouts, interceptors, etc.
  // timeout: 10000,
});

export default api;
