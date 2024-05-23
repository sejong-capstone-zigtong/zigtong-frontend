/* eslint-disable no-undef */
import axios from "axios";

const url = `http://${process.env.REACT_APP_WORKER_SERVER_URL}`;

export const loginApi = (userInfo) => {
  return axios.post(`${url}/api/client/v1/auth/sign-in`, {
    memberAccount: userInfo.memberAccount,
    password: userInfo.password,
  });
};
