import axios from 'axios';

// Create axios instance with default config
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

// Example API functions
export const apiService = {
  // GET request example
  getExample: async <T,>(endpoint: string) => {
    const response = await api.get<T>(endpoint);
    return response.data;
  },

  // POST request example
  postExample: async <T, D>(endpoint: string, data: D) => {
    const response = await api.post<T>(endpoint, data);
    return response.data;
  },

  // PUT request example
  putExample: async <T, D>(endpoint: string, data: D) => {
    const response = await api.put<T>(endpoint, data);
    return response.data;
  },

  // DELETE request example
  deleteExample: async <T,>(endpoint: string) => {
    const response = await api.delete<T>(endpoint);
    return response.data;
  },
};
