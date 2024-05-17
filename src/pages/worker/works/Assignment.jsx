import React from "react";
import styled from "styled-components";
import Footer from "components/common/Footer";
import AssignmentList from "components/assignment/AssignmentList";

// 배정내역 페이지
const Assignment = () => {
  return (
    <AssignmentTotalComponent>
      <AssignmentHeader>배정 내역</AssignmentHeader>
      <AssignmentTypeComponent>
        <AssignmentType>출근신청</AssignmentType>
        <AssignmentType>배정완료</AssignmentType>
        <AssignmentType>미배정</AssignmentType>
      </AssignmentTypeComponent>
      <AssignmentList />
      <Footer />
    </AssignmentTotalComponent>
  );
};

export default Assignment;

const AssignmentTotalComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const AssignmentHeader = styled.div`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  align-self: flex-start;
  font-size: 18px;
  font-weight: 800;
  margin: 20px 0px 0px 14px;
`;

const AssignmentTypeComponent = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin: 32px 0px 0px 3px;
`;

const AssignmentType = styled.button`
  font-family: "Pretendard Variable";
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  padding: 10px;
  border-radius: 30px;
  border: 1px solid #b6b6b6;
  background-color: #fbfbfb;
  color: #000;
  font-size: 10px;
  font-weight: 400;
  margin: 0px 5px;
`;
