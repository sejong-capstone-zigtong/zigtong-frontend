/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import profileImg from "assets/adminWork/applicantProfile.svg";
import calendarImg from "assets/adminWork/CalendarGray.svg";
import flagImg from "assets/adminWork/FlagGray.svg";
import caseImg from "assets/adminWork/CaseGray.svg";
import rightArrow from "assets/adminWork/RightArrow.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { adminInfoState } from "recoil/atoms";
import { useEffect, useState } from "react";
import { getUserInfoApi } from "../../../apis/ProfileApis";
import { GetWorkerInfoApi, postWorkerStatusApi } from "apis/AdminApis";
import { useRecoilValue } from "recoil";
import { useCallback } from "react";

const ApplicantProfile = () => {
  const navigate = useNavigate();
  const id = useParams().postId;
  const [adminInfo, setAdminInfo] = useRecoilState(adminInfoState);

  const location = useLocation();
  const workerId = location.state.workerId;
  const workerApplicationId = location.state.workerApplicationId;
  const [userInfo, setUserInfo] = useState({});

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    const dayDifference = today.getDate() - birth.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    return age;
  };

  const [workerInfo, setWorkerInfo] = useState({});

  const getWorkerInfo = useCallback(async () => {
    try {
      await GetWorkerInfoApi(adminInfo.accessToken, workerId).then((res) => {
        console.log(res);
        setWorkerInfo(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [adminInfo.accessToken, workerId]);

  useEffect(() => {
    getWorkerInfo();
  }, [getWorkerInfo]);

  const postApproveWorkerStatus = async () => {
    try {
      await postWorkerStatusApi(adminInfo.accessToken, id, workerApplicationId, "ACCEPT").then(
        (res) => {
          console.log(res);
          alert("수락 완료");
        },
      );
    } catch (err) {
      console.log(err);
    }
  };
  const postDenyWorkerStatus = async () => {
    try {
      await postWorkerStatusApi(adminInfo.accessToken, id, workerApplicationId, "REFUSE").then(
        (res) => {
          console.log(res);
          alert("거절 완료");
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <ProfileImg src={workerInfo.uploadedUrl} />
      <MainText margin="0px 0px 0px 45px">쾌걸가이</MainText>
      <MainText fontSize="14px" fontWeight="600" margin="5px 0px 0px 45px">
        유장렬 / {calculateAge(workerInfo.birthdate)}세 /{" "}
        {workerInfo.gender === "MALE" ? "남성" : "여성"}
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
        {workerInfo.statement}
      </MainText>
      <MainText margin="16px 0px 0px 35px" fontSize="13px">
        보유 스킬
      </MainText>
      <SkillWrapper>
        {workerInfo.skillDtoList &&
          workerInfo.skillDtoList.map((skill) => {
            return <Skill key={skill.id}>{skill.name}</Skill>;
          })}
      </SkillWrapper>
      <MainText margin="30px 0px 0px 35px" fontSize="13px">
        주요 경력
      </MainText>
      <ExperienceBox>
        {workerInfo.careerDtoList &&
          workerInfo.careerDtoList.map((career) => {
            return (
              <RowFlexDiv key={career.id}>
                <RightArrowImg src={rightArrow} />
                <MainText>
                  {career.startDate && career.startDate.substring(0, 10)} ~{" "}
                  {career.endDate && career.endDate.substring(0, 10)}
                  <br /> {career.role}
                </MainText>
              </RowFlexDiv>
            );
          })}
      </ExperienceBox>
      <BtnWrapper>
        <Btn backgroundColor="#FA2E2E" onClick={postDenyWorkerStatus}>
          거절
        </Btn>
        <Btn backgroundColor="#006FFD" onClick={postApproveWorkerStatus}>
          수락
        </Btn>
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
  flex-shrink: 0;
  border: 1px solid #000;
  background: #fffcfc;
  align-self: center;
  margin: 17px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  padding: 0px 10px 20px 10px;
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
