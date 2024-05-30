/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from "axios";

const url = `http://${process.env.REACT_APP_WORKER_SERVER_URL}`;

export const getWorkListApi = (accessToken, page, size, category) => {
  let baseUrl = `${url}/api/client/v1/post?page=${page}&size=${size}`;
  if (category !== "") {
    baseUrl += `&category=${category}`;
  }

  return axios.get(baseUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getWorkDetailApi = (accessToken, postId) => {
  return axios.get(`${url}/api/client/v1/post/${postId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const applyWorkApi = (accessToken, postId) => {
  return axios.post(
    `${url}/api/client/v1/post/${postId}/apply`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};
