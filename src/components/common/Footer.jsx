/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import home from "../../assets/footer/Home.svg";
import assignment from "../../assets/footer/Assignment.svg";
import heart from "../../assets/footer/Heart.svg";
import profile from "../../assets/footer/Profile.svg";
import user from "../../assets/footer/User.svg";
import fillHome from "../../assets/footer/FillHome.svg";
import fillAssignment from "../../assets/footer/FillAssignment.svg";
import fillHeart from "../../assets/footer/FillHeart.svg";
import fillProfile from "../../assets/footer/FillProfile.svg";
import fillUser from "../../assets/footer/FillUser.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const state = location.state || "home";
  const navigate = useNavigate();
  return (
    <FooterTotalComponent>
      <FooterGridComponent>
        <FooterEachComponent>
          <FooterEachIcon
            width="31px"
            height="42px"
            src={state === "home" ? fillHome : home}
            alt="home"
            onClick={() => {
              navigate("/works", {
                state: "home",
              });
            }}
          />
          <FooterEachText>홈</FooterEachText>
        </FooterEachComponent>
        <FooterEachComponent>
          <FooterEachIcon
            width="38px"
            height="40px"
            src={state === "assignment" ? fillAssignment : assignment}
            alt="assignment"
            onClick={() => {
              navigate("/assignment", {
                state: "assignment",
              });
            }}
          />
          <FooterEachText>배정</FooterEachText>
        </FooterEachComponent>
        <FooterEachComponent>
          <FooterEachIcon
            width="38px"
            height="40px"
            src={state === "heart" ? fillHeart : heart}
            alt="heart"
            onClick={() => {
              navigate("/works/saved", {
                state: "heart",
              });
            }}
          />
          <FooterEachText>찜한공고</FooterEachText>
        </FooterEachComponent>
        <FooterEachComponent>
          <FooterEachIcon
            width="37px"
            height="39px"
            src={state === "profile" ? fillProfile : profile}
            alt="profile"
            onClick={() => {
              navigate("/profile", {
                state: "profile",
              });
            }}
          />
          <FooterEachText>프로필</FooterEachText>
        </FooterEachComponent>
        <FooterEachComponent>
          <FooterEachIcon
            width="27px"
            height="44px"
            src={state === "user" ? fillUser : user}
            alt="user"
            onClick={() => {
              navigate("/mypage", {
                state: "user",
              });
            }}
          />
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
