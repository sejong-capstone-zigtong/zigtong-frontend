/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Footer from "../components/common/Footer";
import user from "../assets/profile/User.svg";
import pencil from "../assets/profile/Pencil.svg";

const Profile = () => {
  return (
    <ProfileTotalComponent>
      <ProfileHeader>프로필</ProfileHeader>
      <ProfileInfo>
        <ProfileInfoImgContainer>
          <ProfileInfoImg src={user} alt="user" />
        </ProfileInfoImgContainer>
        <ProfileOtherInfoContainer>01012345678</ProfileOtherInfoContainer>
      </ProfileInfo>
      <ProfileCompletePercentComponent>완성도 부분</ProfileCompletePercentComponent>
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>한줄 자기소개</ProfileEachHeaderTopic>
          <PencilIcon src={pencil} alt="pencil" />
        </ProfileEachHeaderContainer>
        <ProfileEachContentPlaceholder>나에 대해 한줄로 소개해주세요</ProfileEachContentPlaceholder>
      </ProfileEachContainer>
      <TenPixelBar />
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>스킬</ProfileEachHeaderTopic>
          <ProfileEachHeaderPriority>적합한 스킬 보유자 우선배정</ProfileEachHeaderPriority>
          <PencilIcon src={pencil} alt="pencil" />
        </ProfileEachHeaderContainer>
        <ProfileEachContentPlaceholder>등록된 스킬이 없습니다</ProfileEachContentPlaceholder>
      </ProfileEachContainer>
      <TenPixelBar />
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>경력 및 경험</ProfileEachHeaderTopic>
          <ProfileEachHeaderPriority>유사업종 경력자 우선배정</ProfileEachHeaderPriority>
          <PencilIcon src={pencil} alt="pencil" />
        </ProfileEachHeaderContainer>
        <ProfileEachContentPlaceholder>
          나의 근무이력에 대해 알려주세요
        </ProfileEachContentPlaceholder>
      </ProfileEachContainer>
      <TenPixelBar />
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>자격증</ProfileEachHeaderTopic>
          <ProfileEachHeaderPriority>관련 자격증 보유자 우선배정</ProfileEachHeaderPriority>
          <PencilIcon src={pencil} alt="pencil" />
        </ProfileEachHeaderContainer>
        <ProfileEachContentPlaceholder>
          보건증, 기초안정보건교육 이수증, 조리사자격증 등
        </ProfileEachContentPlaceholder>
      </ProfileEachContainer>
      <TenPixelBar />
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>본인인증</ProfileEachHeaderTopic>
        </ProfileEachHeaderContainer>
        <SelfCertification>본인인증하기</SelfCertification>
      </ProfileEachContainer>
      <TenPixelBar />
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>리뷰</ProfileEachHeaderTopic>
        </ProfileEachHeaderContainer>
        <ProfileEachContentPlaceholder>
          추천 및 리뷰가 많을수록 근무배정에 유리해요
        </ProfileEachContentPlaceholder>
      </ProfileEachContainer>
      <TenPixelBar />
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>임금 계좌</ProfileEachHeaderTopic>
          <PencilIcon src={pencil} alt="pencil" />
        </ProfileEachHeaderContainer>
        <ProfileEachContentPlaceholder>
          급여를 입금받을 계좌를 등록해주세요
        </ProfileEachContentPlaceholder>
      </ProfileEachContainer>
      <Footer />
    </ProfileTotalComponent>
  );
};

export default Profile;

const ProfileTotalComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 0px 0px 100px 0px;
`;

const ProfileHeader = styled.div`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  align-self: flex-start;
  font-size: 18px;
  font-weight: 800;
  margin: 20px 0px 0px 14px;
`;

const ProfileInfo = styled.div`
  margin: 32px 0px 0px 0px;
  display: flex;
  height: 65px;
  width: 100%;
`;

const ProfileInfoImgContainer = styled.div`
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

const ProfileInfoImg = styled.img`
  width: 39px;
  height: 39px;
`;

const ProfileOtherInfoContainer = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  align-items: center;
  color: #1e1e1e;
  width: 208px;
  font-size: 16px;
  font-weight: 800;
  margin: 0px 0px 0px 17px;
`;

const ProfileCompletePercentComponent = styled.div`
  width: 359px;
  height: 307px;
  margin: 32px 0px 0px 0px;
`;

const ProfileEachContainer = styled.div`
  width: 359px;
  min-height: 156px;
`;

const ProfileEachHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 44px 0px 0px 0px;
`;

const ProfileEachHeaderTopic = styled.div`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  font-size: 18px;
  font-weight: 600;
`;

const ProfileEachHeaderPriority = styled.div`
  font-family: "Pretendard Variable";
  position: absolute;
  right: 34px;
  color: #a6a6a6;
  font-size: 14px;
  font-weight: 500;
`;

const PencilIcon = styled.img`
  position: absolute;
  right: 0px;
  width: 24px;
  height: 24px;
`;

const ProfileEachContentPlaceholder = styled.div`
  font-family: "Pretendard Variable";
  color: #a6a6a6;
  font-size: 14px;
  font-weight: 500;
  margin: 29px 0px 0px 0px;
`;

const TenPixelBar = styled.div`
  width: 390px;
  height: 10px;
  background-color: #e0e0e0;
`;

const SelfCertification = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  width: 356px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #006ffd;
  color: #304ffe;
  font-size: 14px;
  font-weight: 600;
  margin: 18px 0px 0px;
`;
