import React from "react";
import styled from "styled-components";
import testImg from "../../assets/test/TestImg.png";
import calendar from "../../assets/searchWork/Calendar.svg";
import clock from "../../assets/searchWork/Clock.svg";
import region from "../../assets/searchWork/Region.svg";
import heartFill from "../../assets/saved/HeartFill.svg";

const EachWork = () => {
  return (
    <EachWorkComponent>
      <EachWorkHeader>
        <div className="headerTopic">현재 많은 지원자가 보는 일감</div>
        <div className="headerAlert">곧 마감🚨</div>
        <img className="heart" src={heartFill} alt="heart" />
      </EachWorkHeader>
      <EachWorkTotalContent>
        <EachWorkContentLeft>
          <EachWorkContentLeftImg src={testImg} alt="test" />
          <EachWorkContentLeftPay>일급 168,000원</EachWorkContentLeftPay>
        </EachWorkContentLeft>
        <EachWorkContentRight>
          <div className="contentTitle">세종대 R&D센터 건립 현장</div>
          <div className="contentSector">건설 | 단순노무</div>
          <div className="contentFlex">
            <img className="contentFlexImg" src={calendar} alt="calendar" />
            <div className="contentFlexText">4월 19일 (금)</div>
          </div>
          <div className="contentFlex">
            <img className="contentFlexImg" src={clock} alt="clock" />
            <div className="contentFlexText">11:30 ~ 15:30</div>
          </div>
          <div className="contentFlex">
            <img className="contentFlexImg" src={region} alt="region" />
            <div className="contentFlexText">서울 광진구</div>
          </div>

          <div className="contentTime"></div>
          <div className="contentRegion"></div>
        </EachWorkContentRight>
      </EachWorkTotalContent>
      <EachWorkFooter>
        <EachWorkFooterBackground>🐥 초보가능</EachWorkFooterBackground>
        <EachWorkFooterBackground>🐥 초보가능</EachWorkFooterBackground>
        <EachWorkFooterBackground>🐥 초보가능</EachWorkFooterBackground>
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
  position: relative;
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 9px;

  .headerTopic {
    font-family: "Pretendard Variable";
    font-size: 13px;
    font-weight: 800;
  }
  .headerAlert {
    font-family: "Pretendard Variable";
    color: #ff0505;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
    font-size: 13px;
    font-weight: 600;
    margin: 0px 0px 0px 12px;
  }
  .heart {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 13px;
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
  margin: 8px 0px 0px 5px;
`;

const EachWorkFooterBackground = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  padding: 5px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 700;
  margin: 0px 0px 0px 9px;

  background-color: #cde3ff;
  color: #006ffd;
`;
