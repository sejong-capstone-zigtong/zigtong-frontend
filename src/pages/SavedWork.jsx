import React from "react";
import styled from "styled-components";
import Footer from "../components/common/Footer";
import TotalWorkListComponent from "../components/SavedWork/TotalWorkListComponent";

const SavedWorks = () => {
  return (
    <SavedWorkTotalComponent>
      <SavedHeader>찜한 공고 내역</SavedHeader>

      <TotalWorkListComponent />
      <Footer />
    </SavedWorkTotalComponent>
  );
};

export default SavedWorks;

const SavedWorkTotalComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const SavedHeader = styled.div`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  align-self: flex-start;
  font-size: 18px;
  font-weight: 800;
  margin: 20px 0px 0px 14px;
`;
