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
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9,mr-IN;q=0.8,mr;q=0.7",
          Authorization: `Bearer ${token}`,
          Connection: "keep-alive",
          DNT: "1",
          "If-None-Match": 'W/"206-IAG4VgRaPg8QmhxYz2UjooZ/ZYI"',
          Referer: "https://qa.prathamteacherapp.tekdinext.com/login",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
          "sec-ch-ua":
            '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          tenantid: "ef99949b-7f3a-4a5f-806a-e67e683e38f3",
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
          'Accept-Language': 'en-US,en;q=0.9,mr-IN;q=0.8,mr;q=0.7',
          'Authorization': `Bearer ${token}`,
          'Connection': 'keep-alive',
          'DNT': '1',
          'Origin': 'https://qa.prathamteacherapp.tekdinext.com',
          'Referer': 'https://qa.prathamteacherapp.tekdinext.com/dashboard',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'tenantid': 'ef99949b-7f3a-4a5f-806a-e67e683e38f3'
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



