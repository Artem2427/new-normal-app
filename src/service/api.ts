import axios, { AxiosInstance } from 'axios';

const API_URL = import.meta.env.VITE_API;

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'api-version': '1.4',
  },
});
