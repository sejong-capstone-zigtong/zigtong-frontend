/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from "axios";

const url = `http://${process.env.REACT_APP_ADMIN_SERVER_URL}`;

export const PostWorkApi = (workInfo) => {
  return axios.post(`${url}/v1/admins/posts`, workInfo);
};
