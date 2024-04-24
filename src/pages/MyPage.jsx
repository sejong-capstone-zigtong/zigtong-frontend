/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Footer from "../components/common/Footer";
import user from "../assets/profile/User.svg";
import rightArrow from "../assets/mypage/RightArrow.svg";

const MyPage = () => {
  return (
    <MyPageTotalComponent>
      <MyPageHeader>프로필</MyPageHeader>
      <MyPageInfo>
        <MyPageInfoImgContainer>
          <MyPageInfoImg src={user} alt="user" />
        </MyPageInfoImgContainer>
        <MyPageOtherInfoContainer>01012345678</MyPageOtherInfoContainer>
        <MyPageInfoSetting>계정설정</MyPageInfoSetting>
      </MyPageInfo>
      <EachItemContainer margin="38px 0px 0px 0px">
        <EachItemText>알림설정</EachItemText>
        <EachItemRightArrow src={rightArrow} alt=">" />
      </EachItemContainer>
      <TenPixelBar />
      <EachItemContainer margin="0px">
        <EachItemText>고객센터</EachItemText>
        <EachItemRightArrow src={rightArrow} alt=">" />
      </EachItemContainer>
      <EachItemContainer>
        <EachItemText>개인정보처리방침</EachItemText>
        <EachItemRightArrow src={rightArrow} alt=">" />
      </EachItemContainer>
      <EachItemContainer>
        <EachItemText>이용약관</EachItemText>
        <EachItemRightArrow src={rightArrow} alt=">" />
      </EachItemContainer>
      <EachItemContainer>
        <EachItemText>버전 정보</EachItemText>
        <EachItemVersionInfo>현재 버전 1.0.0</EachItemVersionInfo>
      </EachItemContainer>
      <EachItemContainer>
        <EachItemStock>(주) 직통</EachItemStock>
        <EachItemRightArrow src={rightArrow} alt=">" />
      </EachItemContainer>
      <Footer />
    </MyPageTotalComponent>
  );
};

export default MyPage;

const MyPageTotalComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 0px 0px 100px 0px;
`;

const MyPageHeader = styled.div`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  align-self: flex-start;
  font-size: 18px;
  font-weight: 800;
  margin: 20px 0px 0px 14px;
`;

const MyPageInfo = styled.div`
  margin: 32px 0px 0px 0px;
  display: flex;
  align-items: center;
  height: 65px;
  width: 100%;
`;

const MyPageInfoImgContainer = styled.div`
  display: flex;
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
  border-radius: 1300px;
  border: 3.25px solid #eceff1;
  background-color: #e3f2fd;
  margin: 0px 0px 0px 14px;
`;

const MyPageInfoImg = styled.img`
  width: 39px;
  height: 39px;
`;

const MyPageOtherInfoContainer = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  align-items: center;
  color: #1e1e1e;
  width: 208px;
  font-size: 16px;
  font-weight: 800;
  margin: 0px 0px 0px 17px;
`;

const MyPageInfoSetting = styled.button`
  font-family: "Pretendard Variable";
  width: 69px;
  height: 24px;
  border-radius: 10px;
  border: 1px solid #646464;
  color: #646464;
  font-size: 14px;
  font-weight: 600;
`;

const EachItemContainer = styled.div`
  width: 358px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${(props) => props.margin || "30px 0px 0px 0px"};
`;

const EachItemText = styled.div`
  font-family: "Pretendard Variable";
  color: #000;
`;

const EachItemRightArrow = styled.img`
  width: 24px;
  height: 24px;
`;

const EachItemVersionInfo = styled.div`
  font-family: "Pretendard Variable";
  color: #006ffd;
  font-size: 11px;
`;

const EachItemStock = styled.div`
  font-family: "Pretendard Variable";
  color: #a6a6a6;
  font-size: 11px;
`;

const TenPixelBar = styled.div`
  width: 390px;
  height: 10px;
  background-color: #e0e0e0;
  margin: 44px 0px;
`;
