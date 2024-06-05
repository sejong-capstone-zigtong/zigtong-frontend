/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import leftArrow from "assets/workDetail/ArrowLeft.svg";
import heart from "assets/workDetail/Heart.svg";
import testImg from "assets/test/testBackground.png";
import calendar from "assets/searchWork/Calendar.svg";
import clock from "assets/searchWork/Clock.svg";
import graph from "assets/workDetail/Graph.svg";
import clockBlack from "assets/workDetail/ClockBlack.svg";
import clockGray from "assets/workDetail/ClockGray.svg";
import forkBlack from "assets/workDetail/ForkBlack.svg";
import forkGray from "assets/workDetail/ForkGray.svg";
import shirtBlack from "assets/workDetail/ShirtBlack.svg";
import shirtGray from "assets/workDetail/ShirtGray.svg";
import parkingBlack from "assets/workDetail/ParkingBlack.svg";
import parkingGray from "assets/workDetail/ParkingGray.svg";
import carBlack from "assets/workDetail/CarBlack.svg";
import carGray from "assets/workDetail/CarGray.svg";
import homeIndicator from "assets/workDetail/HomeIndicator.svg";
import { useNavigate, useParams } from "react-router-dom";
import { applyWorkApi, getWorkDetailApi } from "apis/WorkApi";
import { useRecoilValue } from "recoil";
import { userAccessTokenState } from "recoil/atoms";
import { useEffect } from "react";
import mapImg from "assets/adminWork/AddressDetail.png";
import { getUserInfoApi } from "apis/ProfileApis";

// 일자리 상세페이지
const WorkDetail = () => {
  const navigate = useNavigate();

  const postId = useParams().postId;

  // 4단계 충족 여부 확인
  const [isIdVerification, setIsIdVerification] = useState(true);
  const [isProfileImg, setIsProfileImg] = useState(false);
  const [isSelfIntroduce, setIsSelfIntroduce] = useState(false);
  const [isHasSkill, setIsHasSkill] = useState(false);

  const accessToken = useRecoilValue(userAccessTokenState);

  const [workInfo, setWorkInfo] = useState({
    id: -1,
    content: "",
    title: "",
    wage: 0,
    address: "",
    startTime: "",
    endTime: "",
    lunchStartTime: "",
    lunchEndTime: "",
    createdAt: "",
    category: "",
    numberOfApplicants: 0,
    phoneNumber: "",
    numberOfAccepted: 10,
    recruitmentStatus: "",
    adminId: "",
    wageType: "",
  });

  const getWorkDetail = async () => {
    try {
      await getWorkDetailApi(accessToken, postId).then((res) => {
        console.log(res);
        setWorkInfo(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWorkDetail();
  }, []);

  const applyWork = async () => {
    try {
      if (isIdVerification && isProfileImg && isSelfIntroduce && isHasSkill) {
        await applyWorkApi(accessToken, postId).then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert("지원 완료");
          }
        });
      } else {
        alert("프로필 4단계를 채운 후 지원이 가능합니다");
        navigate("/profile");
      }
    } catch (err) {
      if (err.response.data.data.errorClassName === "ALREADY_APPLIED")
        alert("이미 지원한 공고입니다.");
    }
  };

  // 유저 이력서 정보 받기
  const getUserInfo = useCallback(async () => {
    try {
      getUserInfoApi(accessToken).then((res) => {
        if (res.data.data.profileImageUrl != "" && res.data.data.profileImageUrl != null)
          setIsProfileImg(true);
        if (res.data.data.content !== null && res.data.data.content !== "")
          setIsSelfIntroduce(true);
        if (res.data.data.skills.length !== 0) setIsHasSkill(true);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <WorkTotalComponent>
      <Header>
        <HeaderArrow onClick={() => navigate(-1)} src={leftArrow} alt="<" />
        <HeaderHeart src={heart} alt="heart" />
      </Header>
      <BackgroundImg src={testImg} alt="test" />
      <WorkContent>
        <div className="contentView">조희 330</div>
        <div className="contentTitle">{workInfo.title}</div>
        <div className="contentSector">{workInfo.category}</div>
        <div className="contentTimeBox">
          <img className="calendarIcon" src={calendar} alt="calendar" />
          <div className="calendarText">{workInfo.startTime.substring(0, 10)}</div>
          <div className="longBar"></div>
          <img className="clockIcon" src={clock} alt="clock" />
          <div className="clockText">
            {workInfo.startTime && workInfo.startTime.substring(11, 16)} ~{" "}
            {workInfo.startTime && workInfo.endTime.substring(11, 16)}
          </div>
        </div>
        <ContentConditionComponent>
          <ContentCondition>🐥초보가능</ContentCondition>
        </ContentConditionComponent>
      </WorkContent>
      <WorkPayHeader>일용근로자신고</WorkPayHeader>
      <WorkHourPay>
        {" "}
        {workInfo.wageType === "MONTH"
          ? "월급"
          : workInfo.wageType === "DAY"
          ? "일급"
          : "건당"}{" "}
        {workInfo.wage}원
      </WorkHourPay>
      <WorkTimeBar />
      <WorkTimeBarUnderComponent>
        <WorkTimeBarUnderImg src={graph} alt="graph" />
        <WorkTimeBarUnderText>
          하루 단<WorkTimeBarUnderText fontWeight="600"> 4시간</WorkTimeBarUnderText>
          으로
          <WorkTimeBarUnderText fontWeight="600"> 84,000원</WorkTimeBarUnderText>의 직통 저금통을
          채워보세요!
        </WorkTimeBarUnderText>
      </WorkTimeBarUnderComponent>
      <WorkMapComponent>
        <WorkMapHeader>근무지 위치</WorkMapHeader>
        <WorkMapViewComponent src={mapImg} />
      </WorkMapComponent>
      <MainWorkComponent>
        <MainWorkHeader>주요 업무</MainWorkHeader>
        <MainWorkContent>
          <MainWorkContentEachContainer>
            <MainWorkContentEach>설거지 (식기세척기) | 초보 가능</MainWorkContentEach>
          </MainWorkContentEachContainer>
          <MainWorkContentEachContainer>
            <MainWorkContentEach>재료손질/준비 (칼질 O)</MainWorkContentEach>
          </MainWorkContentEachContainer>
          <MainWorkContentEachContainer>
            <MainWorkContentEach>주방 오픈 준비</MainWorkContentEach>
          </MainWorkContentEachContainer>
          <MainWorkContentEachContainer>
            <MainWorkContentEach>음식조리 | 경험 우대</MainWorkContentEach>
          </MainWorkContentEachContainer>
        </MainWorkContent>
      </MainWorkComponent>
      <WorkNeedsComponent>
        <WorkNeedsHeaderBox>
          <WorkNeedsHeader>지원 전 확인필수</WorkNeedsHeader>
          <WorkNeedsHeaderText>지원하기 전, 반드시 챙겨야 할 자격요건!</WorkNeedsHeaderText>
        </WorkNeedsHeaderBox>
        <WorkNeedsProductComponent>
          <WorkNeedsProductHeader>준비물</WorkNeedsProductHeader>
          <WorkNeedsProductEachContainer>
            <WorkNeedsProductEachType>보건증</WorkNeedsProductEachType>
            <WorkNeedsProductEachAns>지참 필수</WorkNeedsProductEachAns>
          </WorkNeedsProductEachContainer>
        </WorkNeedsProductComponent>
        <WorkNeedsAbilityComponent>
          <WorkNeedsAbilityHeader>자격요건</WorkNeedsAbilityHeader>
          <WorkNeedsAbilityEachContainer>
            <WorkNeedsAbilityEachType>나이</WorkNeedsAbilityEachType>
            <WorkNeedsAbilityEachAns>모두 지원 가능</WorkNeedsAbilityEachAns>
          </WorkNeedsAbilityEachContainer>
          <WorkNeedsAbilityEachContainer>
            <WorkNeedsAbilityEachType>성별</WorkNeedsAbilityEachType>
            <WorkNeedsAbilityEachAns>모두 지원 가능</WorkNeedsAbilityEachAns>
          </WorkNeedsAbilityEachContainer>
          <WorkNeedsAbilityEachContainer>
            <WorkNeedsAbilityEachType>업무능력</WorkNeedsAbilityEachType>
            <WorkNeedsAbilityEachAns>음식조리 | 초급 이상</WorkNeedsAbilityEachAns>
          </WorkNeedsAbilityEachContainer>
          <WorkNeedsAbilityEachContainer>
            <WorkNeedsAbilityEachType>외국인</WorkNeedsAbilityEachType>
            <WorkNeedsAbilityEachAns>지원 불가</WorkNeedsAbilityEachAns>
          </WorkNeedsAbilityEachContainer>
        </WorkNeedsAbilityComponent>
      </WorkNeedsComponent>
      <WorkRegionComponent>
        <WorkRegionHeader>근무지 위치</WorkRegionHeader>
        <WorkRegionEachContainer>
          <WorkRegionEachIcon src={clockBlack} alt="clock" />
          <WorkRegionTextGray style={{ color: "black" }}>조기 퇴근 가능성</WorkRegionTextGray>
          <WorkRegionEachIcon src={clockGray} alt="clock" />
          <WorkRegionTextGray>조기 퇴근 가능성 없음</WorkRegionTextGray>
        </WorkRegionEachContainer>
        <WorkRegionEachContainer>
          <WorkRegionEachIcon src={forkBlack} alt="clock" />
          <WorkRegionTextGray style={{ color: "black" }}>식사 제공</WorkRegionTextGray>
          <WorkRegionEachIcon src={forkGray} alt="clock" />
          <WorkRegionTextGray>식사 제공 없음</WorkRegionTextGray>
        </WorkRegionEachContainer>
        <WorkRegionEachContainer>
          <WorkRegionEachIcon src={shirtGray} alt="clock" />
          <WorkRegionTextGray>용모/복장 제한</WorkRegionTextGray>
          <WorkRegionEachIcon src={shirtBlack} alt="clock" />
          <WorkRegionTextGray style={{ color: "black" }}>용모/복장 제한 없음</WorkRegionTextGray>
        </WorkRegionEachContainer>
        <WorkRegionEachContainer>
          <WorkRegionEachIcon src={parkingGray} alt="clock" />
          <WorkRegionTextGray>무료 주차 있음</WorkRegionTextGray>
          <WorkRegionEachIcon src={parkingBlack} alt="clock" />
          <WorkRegionTextGray style={{ color: "black" }}>무료 주차 없음</WorkRegionTextGray>
        </WorkRegionEachContainer>
        <WorkRegionEachContainer>
          <WorkRegionEachIcon src={carGray} alt="clock" />
          <WorkRegionTextGray>픽업 제공 있음</WorkRegionTextGray>
          <WorkRegionEachIcon src={carBlack} alt="clock" />
          <WorkRegionTextGray style={{ color: "black" }}>픽업 제공 없음</WorkRegionTextGray>
        </WorkRegionEachContainer>
      </WorkRegionComponent>
      <WorkCommentComponent>
        <WorkCommentHeader>근로자님께 한마디</WorkCommentHeader>
        <WorkCommentContent>
          손님응대 및 주방경험 있으신 분이면 좋겠습니다.
          <br /> 복장은 검정색으로 입어주세요. <br />
          배정되면 문자 한번 주세요.
          <br /> 010-2345-7890
          <br /> (예) 직통/주방/경력 6개월/여자
        </WorkCommentContent>
      </WorkCommentComponent>
      <WorkApplyBtn onClick={applyWork}>지원하기</WorkApplyBtn>
      <WorkDetailFooter src={homeIndicator} alt="home" />
    </WorkTotalComponent>
  );
};

export default WorkDetail;

const WorkTotalComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 61px;
`;

const HeaderArrow = styled.img`
  width: 24px;
  height: 24px;
  margin: 16px 0px 0px 8px;
`;

const HeaderHeart = styled.img`
  position: absolute;
  right: 14px;
  width: 24px;
  height: 24px;
  margin: 16px 0px 0px 0px;
`;

const BackgroundImg = styled.img`
  width: 390px;
  height: 255px;
  object-fit: cover;
`;

const WorkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 353px;
  height: 184px;
  border-radius: 12px;
  background: #fdfdfd;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 1;
  margin: -62px 0px 0px 0px;

  .contentView {
    font-family: "Pretendard Variable";
    color: #696969;
    font-size: 10px;
    font-weight: 400;
    margin: 12px 0px 0px 0px;
  }
  .contentTitle {
    font-family: "Pretendard Variable";
    color: #000;
    font-size: 13px;
    font-weight: 700;
    margin: 7px 0px 0px 0px;
  }
  .contentSector {
    font-family: "Pretendard Variable";
    color: #696969;
    font-size: 11px;
    font-weight: 400;
    margin: 7px 0px 0px 0px;
  }
  .contentTimeBox {
    margin: 7px 0px 0px 0px;
    width: 234px;
    height: 33px;
    background-color: rgba(188, 188, 188, 0.3);
    display: flex;
    align-items: center;

    .calendarIcon {
      width: 15px;
      height: 15px;
      margin: 0px 0px 0px 20px;
    }
    .calendarText {
      font-size: 11px;
      margin: 2px 0px 0px 6px;
      color: #494949;
    }
    .longBar {
      margin: 0px 16px;
      width: 1px;
      height: 12px;
      background-color: #a9a9a9;
    }
    .clockIcon {
      width: 15px;
      height: 15px;
    }
    .clockText {
      font-size: 11px;
      margin: 2px 0px 0px 6px;
      color: #494949;
    }
  }
`;

const ContentConditionComponent = styled.div`
  display: flex;
  align-items: center;
  margin: 17px 0px 0px 0px;
`;

const ContentCondition = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  padding: 5px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #cde3ff;
  color: #006ffd;
  font-size: 11px;
  font-weight: 700;
  margin: 0px 4.5px;
`;
const WorkPayHeader = styled.div`
  font-family: "Pretendard Variable";
  align-self: flex-start;
  margin: 28px 0px 0px 24px;
  color: #696969;
  font-size: 13px;
  font-weight: 400;
`;

const WorkTotalPay = styled.div`
  font-family: "Pretendard Variable";
  color: #696969;
  align-self: flex-start;
  margin: 16px 0px 0px 25px;
  font-size: 11px;
  font-weight: 400;
`;

const WorkHourPay = styled.div`
  font-family: "Pretendard Variable";
  color: #000;
  align-self: flex-start;
  margin: 10px 0px 0px 25px;
  font-size: 13px;
  font-weight: 700;
`;

const WorkTimeBar = styled.div`
  width: 350px;
  height: 1px;
  margin: 7px 0px 0px 0px;
  background-color: #d9d9d9;
`;

const WorkTimeBarUnderComponent = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin: 7px 0px 18px 28px;
`;

const WorkTimeBarUnderImg = styled.img`
  width: 20px;
  height: 20px;
`;

const WorkTimeBarUnderText = styled.span`
  font-family: "Pretendard Variable";
  color: #3461fd;
  font-size: 13px;
  font-weight: ${(props) => props.fontWeight || "400"};
`;

const WorkMapComponent = styled.div`
  width: 390px;
  height: 243px;
  border-top: 6px solid rgba(217, 217, 217, 0.6);
`;

const WorkMapHeader = styled.div`
  font-family: "Pretendard Variable";
  color: #000;
  font-weight: 700;
  margin: 18px 0px 0px 25px;
`;

const WorkMapViewComponent = styled.img`
  width: 347px;
  height: 149px;
  border-radius: 2px;
  margin: 14px 0px 0px 23px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;

const MainWorkComponent = styled.div`
  width: 390px;
  height: 160px;
  border-top: 6px solid rgba(217, 217, 217, 0.6);
`;

const MainWorkHeader = styled.div`
  font-family: "Pretendard Variable";
  color: #000;
  font-weight: 700;
  margin: 28px 0px 0px 27px;
`;

const MainWorkContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px 0px 0px 23px;
  gap: 7px 12px;
`;

const MainWorkContentEachContainer = styled.div`
  display: flex;
  width: max-content;
`;

const MainWorkContentEach = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  height: 25px;
  padding: 12px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: rgba(233, 233, 233, 0.8);
  color: #767676;
  font-size: 10px;
  font-weight: 400;
`;

const WorkNeedsComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  border-top: 6px solid rgba(217, 217, 217, 0.6);
  height: 516px;
`;

const WorkNeedsHeaderBox = styled.div`
  margin: 46px 0px 0px 0px;
  width: 353px;
  height: 184px;
  border-radius: 12px;
  background-color: #006ffd;
`;
const WorkNeedsHeader = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  width: 90px;
  height: 23px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  margin: 16px 0px 0px 12px;
  color: #006ffd;
  font-size: 11px;
  font-weight: 700;
`;

const WorkNeedsHeaderText = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  align-items: center;
  color: #fff;
  height: 29px;
  font-size: 15px;
  font-weight: 700;
  margin: 2px 0px 0px 12.5px;
`;

const WorkNeedsProductComponent = styled.div`
  width: 320px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid rgba(200, 200, 200, 0.6);
  background-color: #fff;
  z-index: 1;
  margin: -77px 0px 0px 0px;
`;

const WorkNeedsProductHeader = styled.div`
  font-family: "Pretendard Variable";
  margin: 19px 0px 0px 22px;
  color: #000;
  font-size: 13px;
  font-weight: 700;
`;

const WorkNeedsProductEachContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 19px 0px 0px 0px;
`;

const WorkNeedsProductEachType = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 51px;
  height: 24px;
  margin: 0px 0px 0px 10px;
  color: rgba(32, 32, 32, 0.8);
  font-size: 12px;
  font-weight: 600;
`;

const WorkNeedsProductEachAns = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  width: 57px;
  height: 23px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #006ffd;
  margin: 0px 0px 0px 122px;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
`;

const WorkNeedsAbilityComponent = styled.div`
  width: 320px;
  height: 207px;
  border-radius: 4px;
  border: 1px solid rgba(200, 200, 200, 0.6);
  background-color: #fff;
  margin: 9px 0px 0px 0px;
`;

const WorkNeedsAbilityHeader = styled(WorkNeedsProductHeader)`
  padding: 0px 0px 3px 0px;
`;

const WorkNeedsAbilityEachContainer = styled(WorkNeedsProductEachContainer)`
  margin: 13px 0px 0px 0px;
`;

const WorkNeedsAbilityEachType = styled(WorkNeedsProductEachType)`
  margin: 0px 0px 0px 13px;
`;

const WorkNeedsAbilityEachAns = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 8px;
  background-color: rgba(217, 217, 217, 0.5);
  color: #000;
  text-align: center;
  font-size: 11px;
  margin: 0px 0px 0px 117.5px;
`;

const WorkRegionComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  border-top: 6px solid rgba(217, 217, 217, 0.6);
  height: 324px;
`;

const WorkRegionHeader = styled.div`
  font-family: "Pretendard Variable";
  width: 144px;
  height: 16px;
  color: #000;
  font-weight: 700;
  margin: 34px 0px 0px 28px;
`;

const WorkRegionEachContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0px 0px 28px;
`;

const WorkRegionEachIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const WorkRegionTextBlack = styled.div`
  font-family: "Pretendard Variable";
  color: #4b4a4a;
  font-size: 12px;
  font-weight: 600;
  margin: 0px 0px 0px 8px;
  width: 160px;
`;

const WorkRegionTextGray = styled(WorkRegionTextBlack)`
  color: rgba(118, 118, 118, 0.6);
`;

const WorkCommentComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  border-top: 6px solid rgba(217, 217, 217, 0.6);
  height: 193px;
`;

const WorkCommentHeader = styled.div`
  font-family: "Pretendard Variable";
  margin: 28px 0px 0px 28px;
  color: #000;
  font-weight: 700;
`;

const WorkCommentContent = styled.div`
  font-family: "Pretendard Variable";
  color: #000;
  margin: 19px 0px 0px 27px;
  font-size: 14px;
  font-weight: 400;
`;

const WorkApplyBtn = styled.button`
  font-family: "Pretendard";
  border: none;
  display: flex;
  width: 345px;
  height: 53px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background-color: #3461fd;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const WorkDetailFooter = styled.img`
  width: 134px;
  height: 5px;
  margin: 28px 0px 27px 0px;
`;
