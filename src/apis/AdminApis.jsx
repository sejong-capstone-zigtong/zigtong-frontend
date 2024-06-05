/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from "axios";

const url = `https://${process.env.REACT_APP_ADMIN_SERVER_URL}`;

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

export const MakePostApi = (accessToken, imageFiles, workInfo) => {
  const formData = new FormData();

  // imageFiles 배열의 각 파일을 FormData에 추가
  imageFiles.forEach((file, index) => {
    formData.append(`images`, file);
  });
  console.log(imageFiles);
  // workInfo를 문자열로 변환하여 FormData에 추가
  formData.append("post", JSON.stringify(workInfo));

  console.log(formData);
  return axios.post(`${url}/api/v1/admins/posts`, formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
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
