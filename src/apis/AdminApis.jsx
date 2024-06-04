/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from "axios";

const url = `http://${process.env.REACT_APP_ADMIN_SERVER_URL}`;

export const getCategoryApi = () => {
  return axios.get(`${url}/api/v1/admins/business-type`);
};

export const SignUpAdminApi = (userInfo) => {
  return axios.post(`${url}/api/v1/admins/sign-up`, userInfo);
};

export const LoginAdminApi = (userInfo) => {
  return axios.post(`${url}/api/v1/admins/sign-in`, userInfo);
};

export const GetAdminPostsApi = (accessToken) => {
  return axios.get(`${url}/api/v1/admins/posts`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const GetPostInfoApi = (accessToken, postId) => {
  return axios.get(`${url}/api/v1/admins/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const MakePostApi = (accessToken, workInfo) => {
  return axios.post(`${url}/api/v1/admins/posts`, workInfo, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const GetApplicantsApi = (accessToken, postId) => {
  return axios.get(`${url}/api/v1/admins/posts/${postId}/worker-application-status`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const GetWorkersApi = (accessToken, postId) => {
  return axios.get(`${url}/api/v1/admins/posts/${postId}/employee`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const GetWorkerInfoApi = (accessToken, workerId) => {
  return axios.get(`${url}/api/v1/admins/workers/${workerId}/resumes`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const postWorkerStatusApi = (accessToken, postId, workerApplicationId, status) => {
  return axios.post(
    `${url}/api/v1/admins/posts/${postId}/worker-application-status/${workerApplicationId}`,
    {
      applicationStatus: status,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};

export const getAdminSkillCategoryApi = (accessToken) => {
  return axios.get(`${url}/api/v1/admins/skills/categories`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
