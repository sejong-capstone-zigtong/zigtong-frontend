import axios from "axios";

const url = "http://3.36.50.107:8080";

export const loginApi = (userInfo) => {
  return axios.post(`${url}/api/client/v1/auth/sign-in`, {
    memberAccount: userInfo.memberAccount,
    password: userInfo.password,
  });
};
