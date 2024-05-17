import React from "react";
import styled from "styled-components";
import testImg from "assets/test/TestCompany.png";
import testImgAssignment from "assets/test/TestAssignment.png";
import distancePin from "assets/assignment/DistancePin.svg";

// 배정된 일자리 리스트
const AssignmentList = () => {
  return (
    <TotalAssignmentWorks>
      <EachAssignment>
        <EachAssignmentLeft>
          <AssignmentType>배정완료</AssignmentType>
          <OtherAssignmentText fontWeight="700" margin="6px 0px 0px 0px">
            4월 27일
          </OtherAssignmentText>
          <OtherAssignmentText fontWeight="700" margin="3px 0px 0px 0px">
            10:00 ~ 20:00
          </OtherAssignmentText>
          <OtherAssignmentText margin="5px 0px 0px 0px">
            캐리비안베이 하수도설비 공사
          </OtherAssignmentText>
          <OtherAssignmentText fontSize="12px" margin="3px 0px 0px 0px">
            경기도 용인시 모현읍
          </OtherAssignmentText>
          <OtherAssignmentText fontSize="12px" margin="8px 0px 0px 0px">
            <img className="company" src={testImg} alt="test" /> 삼성건설
          </OtherAssignmentText>
        </EachAssignmentLeft>
        <EachAssignmentRight>
          <AssignmentImg src={testImgAssignment} alt="test" />
          <AssignmentDistance>
            <img className="pin" src={distancePin} alt="pin" />
            65km
          </AssignmentDistance>
        </EachAssignmentRight>
      </EachAssignment>
      <EachAssignment>
        <EachAssignmentLeft>
          <AssignmentType>배정완료</AssignmentType>
          <OtherAssignmentText fontWeight="700" margin="6px 0px 0px 0px">
            4월 27일
          </OtherAssignmentText>
          <OtherAssignmentText fontWeight="700" margin="3px 0px 0px 0px">
            10:00 ~ 20:00
          </OtherAssignmentText>
          <OtherAssignmentText margin="5px 0px 0px 0px">
            캐리비안베이 하수도설비 공사
          </OtherAssignmentText>
          <OtherAssignmentText fontSize="12px" margin="3px 0px 0px 0px">
            경기도 용인시 모현읍
          </OtherAssignmentText>
          <OtherAssignmentText fontSize="12px" margin="8px 0px 0px 0px">
            <img className="company" src={testImg} alt="test" /> 삼성건설
          </OtherAssignmentText>
        </EachAssignmentLeft>
        <EachAssignmentRight>
          <AssignmentImg src={testImgAssignment} alt="test" />
          <AssignmentDistance>
            <img className="pin" src={distancePin} alt="pin" />
            65km
          </AssignmentDistance>
        </EachAssignmentRight>
      </EachAssignment>
    </TotalAssignmentWorks>
  );
};

export default AssignmentList;

const TotalAssignmentWorks = styled.div`
  width: 350px;
  margin: 22px 0px 0px 0px;
`;

const EachAssignment = styled.div`
  display: flex;
  width: 350px;
  height: 131px;
  border-bottom: 1px solid rgba(217, 217, 217, 0.6);
  margin: 13px 0px 0px 0px;
`;

const EachAssignmentLeft = styled.div`
  text-align: left;
  width: 205px;
`;

const AssignmentType = styled.div`
  font-family: "Pretendard Variable";
  color: #139c5a;
  font-size: 12px;
  font-weight: 700;
`;

const OtherAssignmentText = styled.div`
  font-family: "Pretendard Variable";
  color: #000;
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  margin: ${(props) => props.margin || "0px"};
  display: flex;
  align-items: center;
  .company {
    width: 20px;
    height: 20px;
    margin: 0px 2px 0px 0px;
  }
`;

const EachAssignmentRight = styled.div`
  text-align: right;
  width: 137.313px;
`;

const AssignmentImg = styled.img`
  width: 137.313px;
  height: 92px;
  object-fit: cover;
`;

const AssignmentDistance = styled.div`
  font-family: "Pretendard Variable";
  color: #000;
  font-size: 12px;
  font-weight: 600;
  margin: 10px 0px 0px 0px;
`;
