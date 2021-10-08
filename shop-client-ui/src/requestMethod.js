import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGNhMzc0ODBlNTZiYjBkZjI1MzBmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzY4MjYyMiwiZXhwIjoxNjMzOTQxODIyfQ.vQbTn43qc31LgNibhKX6xgKMMEoD4Zw3CPJx_10hy48";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const useRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    tokens: `Bearer ${TOKEN}`,
  },
});
