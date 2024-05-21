import axios from "axios";
const BASE_API_URL = process.env.REACT_APP_BASE_URL;

export const loginApi = async (username, password) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/api/v1/auth/login`,
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
    const response = await axios.get(
      `${BASE_API_URL}/api/v1/auth/user`,
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

export const cohortSearch = async (userID) => {
  try {
    const response = await axios.post(
      `${BASE_API_URL}/api/v1/cohorts/search`,
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
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJPc3NtSUhXaW1NMDN2MUxsVnFvNHBqaS0ydEMwTGhLY0o5dmtwQTlJZV9zIn0.eyJleHAiOjE3MTYyNzcxNTEsImlhdCI6MTcxNjI3NjI1MSwianRpIjoiYzgzZjcwNmQtMzI2Yi00ZTQwLWJlZTYtZDJiMjIwY2I3MDU1IiwiaXNzIjoiaHR0cHM6Ly9xYS5wcmF0aGFtdGVhY2hlcmFwcC50ZWtkaW5leHQuY29tL2F1dGgvcmVhbG1zL3ByYXRoYW0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNGNkNDg4NTEtNGJlYi00YmRlLWIxMmQtMTQ4MzYxZWQ2MDdjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicHJhdGhhbSIsInNlc3Npb25fc3RhdGUiOiIwMGRjYjZmYi05NjU1LTRlNzMtODU4Zi04NTlkMDgzYTdjZmQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIi8qIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1wcmF0aGFtIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiMDBkY2I2ZmItOTY1NS00ZTczLTg1OGYtODU5ZDA4M2E3Y2ZkIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiQW51cCBCZWoiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhbnVwX2t1bWFyX2JlaiIsImdpdmVuX25hbWUiOiJBbnVwIiwiZmFtaWx5X25hbWUiOiJCZWoifQ.Rx-4Q4-l-SJKJ6-eSyhfJQkZKnH_67XMZ3SvHYZRlwLXjhE5_7JnQU9f0ECZmJn-oYNw8FNIFVNnt7xfWqP6fJURsA5seH2x31u-Gbs5SkPYQ2ETxzJs1s1t1OZ6wnPwCJa2_QD2e2vL3srBQU6c89AhidYahWxBhYzA8BgzUKFMp5JY6zV1f_n_nFYg8LYOCvP0WVJ8fFkj_cN6wL0EjQZM2xYwsUIkC2E0i3Aia5JwoeEUUZKcRbtZXbVq9f-Tg2Q4lL2SPP7j-ZBxeY5ZaJALTFwYLyyjlZ7nSDdKiCta3OqdOqeOPIWknyZxLhZGGe6-Xcmyet18E4-cFIv0eg',
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


