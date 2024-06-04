/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "components/common/Footer";
import AssignmentList from "components/assignment/AssignmentList";
import { getWorkStatusApi } from "apis/WorkApi";
import { useRecoilValue } from "recoil";
import { userAccessTokenState, userInfoState } from "recoil/atoms";

// 배정내역 페이지
const Assignment = () => {
  const userAccessToken = useRecoilValue(userAccessTokenState);

  const [status, setStatus] = useState("PENDING");

  const [assignments, setAssignments] = useState([]);

  const getWorkStatus = useCallback(async () => {
    try {
      await getWorkStatusApi(userAccessToken, status).then((res) => {
        console.log(res);
        setAssignments(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [userAccessToken, status]);

  useEffect(() => {
    getWorkStatus();
  }, [getWorkStatus]);

  return (
    <AssignmentTotalComponent>
      <AssignmentHeader>배정 내역</AssignmentHeader>
      <AssignmentTypeComponent>
        {status === "PENDING" ? (
          <SelectedAssignmentType onClick={() => setStatus("PENDING")}>
            출근신청
          </SelectedAssignmentType>
        ) : (
          <AssignmentType onClick={() => setStatus("PENDING")}>출근신청</AssignmentType>
        )}
        {status === "ACCEPTED" ? (
          <SelectedAssignmentType onClick={() => setStatus("ACCEPTED")}>
            배정완료
          </SelectedAssignmentType>
        ) : (
          <AssignmentType onClick={() => setStatus("ACCEPTED")}>배정완료</AssignmentType>
        )}
        {status === "REJECTED" ? (
          <SelectedAssignmentType onClick={() => setStatus("REJECTED")}>
            미배정
          </SelectedAssignmentType>
        ) : (
          <AssignmentType onClick={() => setStatus("REJECTED")}>미배정</AssignmentType>
        )}
      </AssignmentTypeComponent>
      {assignments.length > 0 && <AssignmentList assignments={assignments} status={status} />}
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

const SelectedAssignmentType = styled(AssignmentType)`
  color: #fff;
  background-color: #000;
`;
