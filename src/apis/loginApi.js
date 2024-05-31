import axios from "axios";
import instance from "./interceptor";
const BASE_API_URL = process.env.REACT_APP_BASE_URL;

export const loginApi = async (username, password) => {
  try {
    const response = await instance.post(
      `${BASE_API_URL}/user/v1/auth/login`,
      { username, password },
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const userIdApi = async (token) => {
  try {
    const response = await instance.get(
      `${BASE_API_URL}/user/v1/auth`,
      {
        headers: {
         
          "Accept-Language": "en-US,en;q=0.9,mr-IN;q=0.8,mr;q=0.7",
          Authorization: `Bearer ${token}`,
         
        },
      }
    );
    localStorage.setItem("name", response.data.result.name);
    localStorage.setItem("userId", response.data.result.userId);
    localStorage.setItem("username", response.data.result.username);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const cohortSearch = async (userID, token) => {
  try {
    const response = await instance.post(
      `${BASE_API_URL}/user/v1/cohort/search`,
      {
        'limit': 0,
        'page': 0,
        'filters': {
          'userId': userID
        }
      },
      {
        headers: {
         
          'Authorization': `Bearer ${token}`,
         
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const refresh = async (params) => {
  const apiUrl = `${BASE_API_URL}/auth/refresh`;
  try {
    const response = await instance.post(apiUrl, { refresh_token: params.refresh_token });
    return response.data;
  } catch (error) {
    console.error('Error in refresh token', error);
    throw error;
  }
};



