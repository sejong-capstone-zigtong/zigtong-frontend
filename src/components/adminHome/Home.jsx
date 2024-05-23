/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import clock from "assets/adminHome/clock.svg";
import map from "assets/adminHome/map.svg";
import dummyMap from "assets/adminHome/dummyMap.svg";

const Home = () => {
  return (
    <>
      <Wrapper>
        <ClockIcon src={clock} />
        <ClockText>07:30~18:30</ClockText>
      </Wrapper>
      <Wrapper>
        <ClockIcon src={map} />
        <ClockText>서울특별시 성동구 세종나랏길 40번길 17</ClockText>
      </Wrapper>
      <MapImg src={dummyMap} />
      <CommonBtn>업체 정보 관리</CommonBtn>
      <FullLine />
      <TitleText>공지</TitleText>
      <DescriptionText>
        장기 근무자 우대합니다. 6개월 이상 근무 가능하신 분 특이사항에 남겨주세요.
      </DescriptionText>
      <CommonBtn>공지 관리</CommonBtn>
      <FullLine />

      <TitleText>소개</TitleText>
      <DescriptionText>
        성수동에서 20년간 빌딩 청소를 전문으로 하는 업체입니다. <br />
        가족같이 일하실 분 구해요~^^
      </DescriptionText>
      <CommonBtn>소개 관리</CommonBtn>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 20px;
  margin: 20px 0px 0px 15px;
`;

const ClockIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const ClockText = styled.div`
  color: #696969;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MapImg = styled.img`
  width: 370px;
  height: 112.566px;
  flex-shrink: 0;
  margin: 25px 0px 0px 0px;
`;

const CommonBtn = styled.button`
  display: flex;
  width: 370px;
  height: 40px;
  padding: 18px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 14px;
  border: none;
  background: var(--Grey-primary, #646464);
  margin: 20px 0px 0px 0px;
  color: var(--Gray-White, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  cursor: pointer;
`;

const FullLine = styled.div`
  width: 390px;
  height: 2px;
  flex-shrink: 0;
  background: #e4e1e1;
  margin: 22px 0px 0px 0px;
`;

const TitleText = styled.div`
  align-self: flex-start;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 15px;
  align-self: flex-start;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 24px 0px 0px 15px;
`;

const DescriptionText = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  align-self: flex-start;
  font-weight: 400;
  line-height: normal;
  margin: 15px 0px 0px 15px;
`;
