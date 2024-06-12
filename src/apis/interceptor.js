import axios from 'axios';
import { refresh } from './loginApi';

const instance = axios.create();

const refreshToken = async () => {
  const refresh_token = localStorage.getItem('refreshToken');
  if (refresh_token !== '' && refresh_token !== null) {
    try {
      const response = await refresh({ refresh_token });
      if (response) {
        const accessToken = response?.access_token;
        const newRefreshToken = response?.refresh_token;
        localStorage.setItem('authToken', accessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        return accessToken;
      }
    } catch (error) {
      console.error('Token refresh failed:', error.response?.data || error.message);
      throw error;
    }
  } else {
    console.error('No refresh token available');
  }
};

instance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (error?.response?.request?.responseURL.includes('/auth/refresh')) {
        localStorage.clear();
        window.location.href = '/';
      } else {
        try {
          const accessToken = await refreshToken();
          if (!accessToken) {
            window.location.href = '/login';
          } else {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return instance(originalRequest);
          }
        } catch (refreshError) {
          console.error('Failed to retry original request after refreshing token:', refreshError.response?.data || refreshError.message);
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
