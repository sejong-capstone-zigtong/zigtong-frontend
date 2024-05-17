import axios from "axios";

const url = "http://3.36.50.107:8080";

// 유저 이력서 받기
export const getUserInfoApi = (accessToken) => {
  return axios.get(`${url}/api/client/v1/resume/info`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// 유저 자기소개 수정
export const putUserIntroduceApi = (accessToken, introduce) => {
  return axios.put(
    `${url}/api/client/v1/resume/statement`,
    {
      statement: introduce,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};

// 유저 경력 수정
export const putUserCareersApi = (accessToken, totalCareers) => {
  return axios.put(`${url}/api/client/v1/resume/career`, totalCareers, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// 자격증 카테고리 조회
export const getCertificateCategoryApi = (accessToken) => {
  return axios.get(`${url}/api/client/v1/certificate/affiliation`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// 해당 자격증의 id 조회
export const getCertificateInfoApi = (accessToken, certificateName) => {
  return axios.get(`${url}/api/client/v1/certificate/list?affiliation=${certificateName}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// 자격증 수정
export const putCertificateApi = (accessToken, certificateIds) => {
  return axios.put(
    `${url}/api/client/v1/resume/certificate`,
    {
      ids: certificateIds,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};
