/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import EachWork from "./EachWork";
import { GetAdminPostsApi } from "apis/AdminApis";
import { useRecoilValue } from "recoil";
import { adminInfoState } from "recoil/atoms";
import { useEffect, useState } from "react";

const Works = () => {
  const adminInfo = useRecoilValue(adminInfoState);

  const [works, setWorks] = useState([]);

  const getAdminWorks = async () => {
    try {
      await GetAdminPostsApi(adminInfo.accessToken).then((res) => {
        console.log(res.data);
        setWorks(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAdminWorks();
  }, []);

  return (
    <WorkListComponent>
      {works.length > 0 &&
        works.map((work, index) => {
          return <EachWork work={work} key={index} />;
        })}
    </WorkListComponent>
  );
};

export default Works;

const WorkListComponent = styled.div`
  width: 353px;
  padding: 10px 0px 118px 0px;
`;
