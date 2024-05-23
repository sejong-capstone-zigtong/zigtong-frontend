/* eslint-disable no-undef */
import axios from "axios";

const url = `http://${process.env.REACT_APP_WORKER_SERVER_URL}`;

export const phoneCertifyApi = (receiver) => {
  const totalPhoneNumber = `010` + receiver;

  return axios.post(`${url}/api/client/v1/auth/send-code`, {
    receiver: totalPhoneNumber,
  });
};

export const confirmPhoneCertifyApi = (receiver, verificationCode) => {
  const totalPhoneNumber = `010` + receiver;
  return axios.post(`${url}/api/client/v1/auth/verify`, {
    receiver: totalPhoneNumber,
    verificationCode: verificationCode,
  });
};

export const accountDuplicationApi = (account) => {
  return axios.get(`${url}/worker/check-account?account=${account}`);
};

export const signUpApi = (userInfo) => {
  return axios.post(`${url}/api/client/v1/worker/sign-up`, userInfo);
};
