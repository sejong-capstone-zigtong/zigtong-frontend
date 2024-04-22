import React from "react";
import styled from "styled-components";
import home from "../../assets/footer/Home.svg";
import assignment from "../../assets/footer/Assignment.svg";
import heart from "../../assets/footer/Heart.svg";
import profile from "../../assets/footer/Profile.svg";
import user from "../../assets/footer/User.svg";

const Footer = () => {
  return (
    <FooterTotalComponent>
      <FooterGridComponent>
        <FooterEachComponent>
          <FooterEachIcon width="31px" height="42px" src={home} alt="home" />
          <FooterEachText>홈</FooterEachText>
        </FooterEachComponent>
        <FooterEachComponent>
          <FooterEachIcon width="38px" height="40px" src={assignment} alt="assignment" />
          <FooterEachText>배정</FooterEachText>
        </FooterEachComponent>
        <FooterEachComponent>
          <FooterEachIcon width="38px" height="40px" src={heart} alt="heart" />
          <FooterEachText>찜한공고</FooterEachText>
        </FooterEachComponent>
        <FooterEachComponent>
          <FooterEachIcon width="37px" height="39px" src={profile} alt="profile" />
          <FooterEachText>프로필</FooterEachText>
        </FooterEachComponent>
        <FooterEachComponent>
          <FooterEachIcon width="27px" height="44px" src={user} alt="user" />
          <FooterEachText>마이직통</FooterEachText>
        </FooterEachComponent>
      </FooterGridComponent>
    </FooterTotalComponent>
  );
};

export default Footer;

const FooterTotalComponent = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 760px;
  width: 390px;
  height: 83px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const FooterGridComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 32px;
  margin: 0px 17px;
`;

const FooterEachComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 43px;
  height: 65px;
  padding: 2px 0px 0px 0px;
`;

const FooterEachIcon = styled.img`
  position: absolute;
  width: ${(props) => props.width || "41px"};
  height: ${(props) => props.height || "41px"};
`;

const FooterEachText = styled.div`
  font-family: "Pretendard";
  position: absolute;
  bottom: 1px;
  color: #000;
  font-size: 12px;
  margin: 2px 0px 0px 0px;
`;
