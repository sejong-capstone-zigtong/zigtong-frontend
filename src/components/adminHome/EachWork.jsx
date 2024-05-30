/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import testImg from "assets/test/TestImg.png";
import calendar from "assets/searchWork/Calendar.svg";
import clock from "assets/searchWork/Clock.svg";
import region from "assets/searchWork/Region.svg";
import eye from "assets/adminHome/eye.svg";
import worker from "assets/adminHome/worker.svg";
import { useNavigate } from "react-router-dom";

// 일자리 하나 컴포넌트
const EachWork = (props) => {
  const work = props;
  const navigate = useNavigate();

  return (
    <EachWorkComponent
      onClick={() => {
        navigate(`/admin/works/${work.work.id}`);
      }}
    >
      <EachWorkHeader>
        {work.work.recruitmentStatus === "RECRUITING" ? (
          <div className="headerRedAlert">구인 중🚨</div>
        ) : (
          <div className="headerBlueAlert">구인 완료</div>
        )}
      </EachWorkHeader>
      <EachWorkTotalContent>
        <EachWorkContentLeft>
          <EachWorkContentLeftImg src={testImg} alt="test" />
          <EachWorkContentLeftPay>
            {work.work.wageType === "MONTH"
              ? "월급"
              : work.work.wageType === "DAY"
              ? "일급"
              : "건당"}{" "}
            {work.work.wage}원
          </EachWorkContentLeftPay>
        </EachWorkContentLeft>
        <EachWorkContentRight>
          <div className="contentTitle">{work.work.title}</div>
          <div className="contentSector">{work.work.category}</div>
          <div className="contentFlex">
            <img className="contentFlexImg" src={calendar} alt="calendar" />
            <div className="contentFlexText">{work.work.startTime.substring(0, 10)}</div>
          </div>
          <div className="contentFlex">
            <img className="contentFlexImg" src={clock} alt="clock" />
            <div className="contentFlexText">
              {work.work.startTime.substring(11, 16)} ~ {work.work.endTime.substring(11, 16)}
            </div>
          </div>
          <div className="contentFlex">
            <img className="contentFlexImg" src={region} alt="region" />
            <div className="contentFlexText">{work.work.address}</div>
          </div>
        </EachWorkContentRight>
      </EachWorkTotalContent>
      <EachWorkFooter>
        <EachWorkFooterIcon style={{ marginTop: "-9px" }} src={worker} width="18px" height="18px" />
        <EachWorkFooterText>{work.work.numberOfApplicants}</EachWorkFooterText>
      </EachWorkFooter>
    </EachWorkComponent>
  );
};

export default EachWork;

const EachWorkComponent = styled.div`
  width: 353px;
  height: 184px;
  border-radius: 12px;
  background-color: #fdfdfd;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 20px 0px 0px 0px;
  padding: 8px 0px 0px 0px;
`;

const EachWorkHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 9px;

  .headerTopic {
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-weight: 800;
  }
  .headerRedAlert {
    font-family: "Pretendard Variable";
    color: #ff0505;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
    font-size: 13px;
    font-weight: 600;
    margin: 0px 0px 0px 12px;
  }
  .headerBlueAlert {
    font-family: "Pretendard Variable";
    color: #3461fd;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
    font-size: 13px;
    font-weight: 600;
    margin: 0px 0px 0px 12px;
  }
`;

const EachWorkTotalContent = styled.div`
  display: flex;
  margin: 9px 0px 0px 0px;
`;

const EachWorkContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 14px;
`;

const EachWorkContentLeftImg = styled.img`
  width: 78px;
  height: 78px;
  border-radius: 2px;
  background: url(<path-to-image>) lightgray 0px -13.501px / 100% 134.619% no-repeat;
`;

const EachWorkContentLeftPay = styled.div`
  font-family: "Pretendard Variable";
  color: #000;
  font-size: 13px;
  font-weight: 700;
  margin: 13px 0px 0px 0px;
`;

const EachWorkContentRight = styled(EachWorkContentLeft)`
  margin: 0px 0px 0px 19px;
  .contentTitle {
    font-family: "Pretendard Variable";
    height: 16px;
    color: #000;
    font-size: 13px;
    font-weight: 700;
  }
  .contentSector {
    font-family: "Pretendard Variable";
    color: #696969;
    font-size: 11px;
    font-weight: 400;
    margin: 5px 0px 0px 0px;
  }
  .contentFlex {
    display: flex;
    align-items: center;
    margin: 5px 0px 0px 0px;

    .contentFlexImg {
      width: 15px;
      height: 15px;
    }
    .contentFlexText {
      font-family: "Pretendard Variable";
      color: #696969;
      font-size: 10px;
      font-weight: 400;
      margin: 0px 0px 0px 4px;
    }
  }
`;

const EachWorkFooter = styled.div`
  display: flex;
  align-items: center;

  height: 20px;
  margin: 15px 0px 0px 5px;
`;

const EachWorkFooterIcon = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-shrink: 0;
  margin: 0px 0px 0px 13px;
`;

const EachWorkFooterText = styled.div`
  color: #696969;
  font-family: "Pretendard Variable";
  font-size: 12px;
  height: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px 0px 0px 5px;
`;
