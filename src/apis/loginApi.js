import axios from 'axios';
const LOGIN_API_URL = process.env.REACT_APP_LOGIN_API;

export const loginApi = async (username, password) => {
  try {
    const response = await axios.post(
      `${LOGIN_API_URL}/api/v1/auth/login`,
      { username, password },
      {
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
   
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};
