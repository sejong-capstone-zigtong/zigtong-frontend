import axios from "axios";

const url = "http://localhost:8080";

export const LoginApi = (payload) => {
  return axios.post(`${url}/auth/sign-in`, {
    account: payload.account,
    password: payload.password,
  });
};
