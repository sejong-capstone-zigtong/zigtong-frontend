/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "components/common/Footer";
import user from "assets/profile/User.svg";
import rightArrow from "assets/mypage/RightArrow.svg";
import { getUserInfoApi } from "apis/ProfileApis";
import { useRecoilValue } from "recoil";
import { userAccessTokenState } from "recoil/atoms";

// 마이페이지
const MyPage = () => {
  // 유저정보 저장
  const [userInfo, setUserInfo] = useState({
    birthdate: "",
    careers: [],
    certificates: [],
    content: "",
    gender: "",
    name: "손솬",
    phoneNumber: "",
    profileImageUrl: "",
    skills: [],
  });

  // 리코일 받은 어세스토큰
  const accessToken = useRecoilValue(userAccessTokenState);

  // 유저 이력서 정보 받기
  const getUserInfo = useCallback(async () => {
    try {
      getUserInfoApi(accessToken).then((res) => {
        setUserInfo(res.data.data);
        console.log(res.data.data);
        setAge(calculateAge(res.data.data.birthdate));
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  // YYYY-MM-DD형식의 생년월일을 만 나이로 변환
  const [age, setAge] = useState(null);
  const calculateAge = (birthDateString) => {
    if (!birthDateString) {
      console.error("No birth date provided or birth date is undefined");
      return NaN; // 제공된 날짜가 없거나 undefined인 경우 NaN 반환
    }

    // 'yyyy-mm-dd' 형식을 분해하여 연, 월, 일을 구함
    const parts = birthDateString.split("-");
    if (parts.length !== 3) {
      console.error("Invalid date format:", birthDateString);
      return NaN; // 날짜 형식이 잘못된 경우 NaN 반환
    }
    const [year, month, day] = parts.map((num) => parseInt(num, 10));
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // 만약 생일이 아직 오지 않았다면 1을 빼서 만나이를 계산
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <MyPageTotalComponent>
      <MyPageHeader>프로필</MyPageHeader>
      <MyPageInfo>
        <MyPageInfoImgContainer>
          <MyPageInfoImg src={userInfo.profileImageUrl} alt="user" />
        </MyPageInfoImgContainer>
        <div>
          <MyPageOtherInfoContainer>{userInfo.name}</MyPageOtherInfoContainer>
          <MyPageOtherInfoContainer style={{ fontWeight: "500", fontSize: "14px" }}>
            만 {age}세 {userInfo.gender === "MALE" ? "남성" : "여성"}{" "}
          </MyPageOtherInfoContainer>
        </div>

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
