import axios from 'axios';
import { API_BASE_URL, API_VERSION } from '../constants/apiEndpoints';

// Configuration object
const axiosConfig = {
  baseURL: `${API_BASE_URL}/${API_VERSION}`,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
};

// Create multiple instances for different purposes
export const publicApi = axios.create(axiosConfig);

export const privateApi = axios.create({
  ...axiosConfig,
  headers: {
    ...axiosConfig.headers,
    'X-API-Key': process.env.REACT_APP_API_KEY || '',
  },
});

// Upload API (with different timeout)
export const uploadApi = axios.create({
  ...axiosConfig,
  timeout: 60000,
  headers: {
    ...axiosConfig.headers,
    'Content-Type': 'multipart/form-data',
  },
});

// Request counter for loading states
let requestCount = 0;

export const startRequest = () => {
  requestCount++;
  // You can dispatch an action here to show global loader
};

export const endRequest = () => {
  requestCount--;
  if (requestCount <= 0) {
    requestCount = 0;
    // You can dispatch an action here to hide global loader
  }
};

// Interceptors for privateApi
privateApi.interceptors.request.use(
  (config) => {
    startRequest();
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    endRequest();
    return Promise.reject(error);
  }
);

privateApi.interceptors.response.use(
  (response) => {
    endRequest();
    return response;
  },
  (error) => {
    endRequest();
    return Promise.reject(error);
  }
);

export default {
  public: publicApi,
  private: privateApi,
  upload: uploadApi,
};