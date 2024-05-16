/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/common/Footer";
import user from "../assets/profile/User.svg";
import pencil from "../assets/profile/Pencil.svg";
import editProfile from "../assets/profile/EditProfile.svg";
import oneOfFour from "../assets/profile/OneOfFour.svg";
import twoOfFour from "../assets/profile/TwoOfFour.svg";
import threeOfFour from "../assets/profile/ThreeOfFour.svg";
import fourOfFour from "../assets/profile/FourOfFour.svg";
import checkBlue from "../assets/profile/CheckBlue.svg";
import plus from "../assets/profile/Plus.svg";

const Profile = () => {
  const [isIdVerification, setIsIdVerification] = useState(true);
  const [isProfileImg, setIsProfileImg] = useState(false);
  const [isSelfIntroduce, setIsSelfIntroduce] = useState(false);
  const [isHasSkill, setIsHasSkill] = useState(false);

  return (
    <ProfileTotalComponent>
      <ProfileHeader>프로필</ProfileHeader>
      <ProfileInfo>
        <ProfileInfoImgContainer>
          <ProfileInfoImg src={user} alt="user" />
          <EditProfileInfoWrapper>
            <EditProfileInfoImg src={editProfile} alt="plus" />
          </EditProfileInfoWrapper>
        </ProfileInfoImgContainer>
        <ProfileOtherInfoContainer>
          <ProfileOtherInfoContainerText>박태건</ProfileOtherInfoContainerText>
          <ProfileOtherInfoContainerText fontSize="14px" fontWeight="600">
            만 23세 | 남
          </ProfileOtherInfoContainerText>
        </ProfileOtherInfoContainer>
      </ProfileInfo>
      <ProfileCompletePercentComponent>
        <ProfileCompletePercentText>프로필 완성도</ProfileCompletePercentText>
        {[isIdVerification, isProfileImg, isSelfIntroduce, isHasSkill].filter(Boolean).length ===
        4 ? (
          <ProfileCompleteGraph src={fourOfFour} alt="g" />
        ) : [isIdVerification, isProfileImg, isSelfIntroduce, isHasSkill].filter(Boolean).length ===
          3 ? (
          <ProfileCompleteGraph src={threeOfFour} alt="g" />
        ) : [isIdVerification, isProfileImg, isSelfIntroduce, isHasSkill].filter(Boolean).length ===
          2 ? (
          <ProfileCompleteGraph src={twoOfFour} alt="g" />
        ) : (
          <ProfileCompleteGraph src={oneOfFour} alt="g" />
        )}
        <ProfileUnderGraphText>
          아래 4가지 항목이 모두 채워져야 일자리에 지원이 가능합니다
        </ProfileUnderGraphText>
        <ProfileGraphItemsWrapper>
          <ProfileGraphItemWrapper>
            {isIdVerification ? (
              <ProfileGraphItemCheckIcon src={checkBlue} />
            ) : (
              <ProfileGraphItemIcon src={plus} />
            )}
            {isIdVerification ? (
              <ProfileGraphItemText color="#006FFD">본인 인증</ProfileGraphItemText>
            ) : (
              <ProfileGraphItemText color="#A6A6A6">본인 인증</ProfileGraphItemText>
            )}
          </ProfileGraphItemWrapper>
          <ProfileGraphItemWrapper>
            {isProfileImg ? (
              <ProfileGraphItemCheckIcon src={checkBlue} />
            ) : (
              <ProfileGraphItemIcon src={plus} />
            )}
            {isProfileImg ? (
              <ProfileGraphItemText color="#006FFD">프로필 사진 등록</ProfileGraphItemText>
            ) : (
              <ProfileGraphItemText color="#A6A6A6">프로필 사진 등록</ProfileGraphItemText>
            )}
          </ProfileGraphItemWrapper>
          <ProfileGraphItemWrapper>
            {isSelfIntroduce ? (
              <ProfileGraphItemCheckIcon src={checkBlue} />
            ) : (
              <ProfileGraphItemIcon src={plus} />
            )}
            {isSelfIntroduce ? (
              <ProfileGraphItemText color="#006FFD">한줄 자기소개 등록</ProfileGraphItemText>
            ) : (
              <ProfileGraphItemText color="#A6A6A6">한줄 자기소개 등록</ProfileGraphItemText>
            )}
          </ProfileGraphItemWrapper>
          <ProfileGraphItemWrapper>
            {isHasSkill ? (
              <ProfileGraphItemCheckIcon src={checkBlue} />
            ) : (
              <ProfileGraphItemIcon src={plus} />
            )}
            {isHasSkill ? (
              <ProfileGraphItemText color="#006FFD">업무스킬 등록</ProfileGraphItemText>
            ) : (
              <ProfileGraphItemText color="#A6A6A6">업무스킬 등록</ProfileGraphItemText>
            )}
          </ProfileGraphItemWrapper>
        </ProfileGraphItemsWrapper>
      </ProfileCompletePercentComponent>
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
  position: relative;
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

const EditProfileInfoWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -4px;
  bottom: -4px;
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  background-color: #eceff1;
  stroke-width: 0.287px;
  border: 1px solid #000;
  border-radius: 50%;
  cursor: pointer;
`;

const EditProfileInfoImg = styled.img`
  display: flex;
  width: 13.8px;
  height: 13.8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const ProfileOtherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: 0px 0px 0px 17px;
`;

const ProfileOtherInfoContainerText = styled.div`
  color: #1e1e1e;
  font-family: "Pretendard Variable";
  font-size: ${(props) => props.fontSize || "16px"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "800"};
  line-height: 18px;
`;

const ProfileCompletePercentComponent = styled.div`
  width: 359px;
  height: 307px;
  margin: 32px 0px 0px 0px;
`;

const ProfileCompletePercentText = styled.div`
  color: #1e1e1e;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

const ProfileCompleteGraph = styled.img`
  width: 355px;
  height: 10px;
  margin: 32px 0px 0px 0px;
`;

const ProfileUnderGraphText = styled.div`
  color: var(--Grey-text, #a6a6a6);
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin: 20px 0px 0px 0px;
`;

const ProfileGraphItemsWrapper = styled.div`
  display: flex;
  width: 355px;
  padding: 10px 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  border-radius: 12px;
  border: 1px solid #000;
  margin: 20px 0px 0px 0px;
`;

const ProfileGraphItemWrapper = styled.div`
  display: flex;
  padding: 3px 0px;
  height: 38px;
  align-items: center;
  gap: 9px;
`;
const ProfileGraphItemCheckIcon = styled.img`
  width: 24px;
  height: 20px;
`;

const ProfileGraphItemIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ProfileGraphItemText = styled.div`
  color: ${(props) => props.color};
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
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
