import React from "react";
import styled from "styled-components";
import landingBackground from "../assets/landing/LandingBackground.svg";
import rigthArrow from "../assets/landing/RightArrow.svg";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const onClickArrow = () => {
    navigate("/login");
  };

  return (
    <>
      <LandingTotalComponent>
        <LandingBackgroundComponent src={landingBackground} alt="background" />
        <Header>
          투명한 노동 시장,
          <br />
          직통에서 시작됩니다
        </Header>
        <Content>
          과도한 중간 수수료, 임금 체불 사업주,
          <br />
          위험한 근로환경은 더 이상 그만
        </Content>
        <Footer>
          <FooterText>시작하기</FooterText>
          <FooterArrow onClick={onClickArrow} src={rigthArrow} alt=">" />
        </Footer>
      </LandingTotalComponent>
    </>
  );
};

export default Landing;

const LandingTotalComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #2623d3;
`;

const LandingBackgroundComponent = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Header = styled.div`
  font-family: "Pretendard";
  padding: 507px 0px 0px 0px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;

const Content = styled.div`
  font-family: "Pretendard Variable";
  margin: 30px 0px 0px 0px;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 200;
`;

const Footer = styled.div`
  margin: 100px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.div`
  font-family: "Pretendard";
  color: #fff;
  text-align: center;
  font-size: 30px;
`;

const FooterArrow = styled.img`
  margin: 0px 0px 0px 8px;
  width: 48px;
  height: 49.647px;
  z-index: 1;
  cursor: pointer;
`;
