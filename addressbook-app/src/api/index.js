import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:5200/api',
});