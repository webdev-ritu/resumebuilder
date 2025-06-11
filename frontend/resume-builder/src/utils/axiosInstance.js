// src/config/axiosInstance.js

import axios from 'axios';
import { BASE_URL } from './apiPaths';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor — attaches token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — handles global errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;
      switch (status) {
        case 401:
          console.warn('Unauthorized — redirecting to login.');
          window.location.href = '/';
          break;
        case 500:
          console.error('Internal server error.');
          break;
        default:
          console.error(`HTTP Error: ${status}`);
      }
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timed out.');
    } else {
      console.error('Network error or CORS issue.');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

           