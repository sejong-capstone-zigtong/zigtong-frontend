/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import profileImg from "assets/adminWork/applicantProfile.svg";
import calendarImg from "assets/adminWork/CalendarGray.svg";
import flagImg from "assets/adminWork/FlagGray.svg";
import caseImg from "assets/adminWork/CaseGray.svg";
import rightArrow from "assets/adminWork/RightArrow.svg";

const ApplicantProfile = () => {
  return (
    <Container>
      <ProfileImg src={profileImg} />
      <MainText margin="0px 0px 0px 45px">쾌걸가이</MainText>
      <MainText fontSize="14px" fontWeight="600" margin="5px 0px 0px 45px">
        유장렬 / 52세 / 남성
      </MainText>
      <OtherInfoBox>
        <OtherInfoWrapper>
          <OtherInfoImg src={calendarImg} />
          <OtherInfoLabelText>최근 수행일</OtherInfoLabelText>
          <MainText fontSize="12px" fontWeight="500">
            3일 전
          </MainText>
        </OtherInfoWrapper>
        <OtherInfoWrapper>
          <OtherInfoImg src={calendarImg} />
          <OtherInfoLabelText>주요 활동 지역</OtherInfoLabelText>
          <MainText fontSize="12px" fontWeight="500">
            서울시 광진구, 중랑구,성동구
          </MainText>
        </OtherInfoWrapper>
        <OtherInfoWrapper>
          <OtherInfoImg src={calendarImg} />
          <OtherInfoLabelText>총 근로 건수</OtherInfoLabelText>
          <MainText fontSize="12px" fontWeight="500">
            36건
          </MainText>
        </OtherInfoWrapper>
      </OtherInfoBox>
      <MainText margin="18px 0px 0px 35px" fontSize="13px">
        한 줄 소개
      </MainText>
      <MainText margin="12px 50px 0px 35px" fontSize="14px" fontWeight="500">
        어떤 일이든 최선을 다해 열심히 잘 할 자신 있습니다! 지방 출장 가능합니다.
      </MainText>
      <MainText margin="16px 0px 0px 35px" fontSize="13px">
        보유 스킬
      </MainText>
      <SkillWrapper>
        <Skill>용접</Skill>
        <Skill>건축설비</Skill>
      </SkillWrapper>
      <MainText margin="30px 0px 0px 35px" fontSize="13px">
        주요 경력
      </MainText>
      <ExperienceBox>
        <RowFlexDiv>
          <RightArrowImg src={rightArrow} />
          <MainText>
            2000.04~ 2012.09 <br /> 세종건설 용접공
          </MainText>
        </RowFlexDiv>
        <RowFlexDiv>
          <RightArrowImg src={rightArrow} />
          <MainText>
            2013.03~ 2020.05
            <br />
            군자건축설비소 소장
          </MainText>
        </RowFlexDiv>
      </ExperienceBox>
      <BtnWrapper>
        <Btn backgroundColor="#FA2E2E">거절</Btn>
        <Btn backgroundColor="#006FFD">수락</Btn>
      </BtnWrapper>
    </Container>
  );
};

export default ApplicantProfile;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const ProfileImg = styled.img`
  width: 90px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 90px;
  align-self: flex-end;
  margin: 38px 35px 0px 0px;
`;

const MainText = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: ${(props) => props.fontSize || "15px"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "700"};
  line-height: normal;
  margin: ${(props) => props.margin || "0px"};
`;

const OtherInfoLabelText = styled.div`
  color: var(--Grey-primary, #646464);
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px 0px 0px 5px;
  width: 100px;
`;

const OtherInfoBox = styled.div`
  width: 319px;
  height: 167px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #b3b3b3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 10px 0px 0px 0px;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`;

const OtherInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 25px;
`;

const OtherInfoImg = styled.img`
  width: 10px;
  height: 10px;
  flex-shrink: 0;
`;

const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0px 0px 35px;
  gap: 10px;
`;

const Skill = styled.button`
  padding: 0px 15px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ExperienceBox = styled.div`
  width: 346px;
  height: 177px;
  flex-shrink: 0;
  border: 1px solid #000;
  background: #fffcfc;
  align-self: center;
  margin: 17px 0px 0px 0px;
`;

const RightArrowImg = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const RowFlexDiv = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 18px 0px 0px 5px;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 51px 0px 30px 0px;
`;

const Btn = styled.div`
  display: flex;
  width: 160px;
  height: 38px;
  padding: 18px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 8px;
  color: var(--Gray-White, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  margin: 0px 15px;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
`;
