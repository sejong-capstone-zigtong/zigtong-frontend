/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import xIcon from "assets/adminSignup/XIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CompanySector = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(location.state.userInfo);
  const { category } = userInfo;
  console.log(userInfo);
  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const nextSignUp = () => {
    if (category === "") {
      alert("업종을 선택해주세요");
    } else {
      navigate("/admin/signup/companySector", {
        state: {
          userInfo: userInfo,
        },
      });
    }
  };

  return (
    <TotalComponent>
      <XIcon src={xIcon} onClick={() => navigate("/admin/login")} />

      <BusinessLabel>업종을 알려주세요</BusinessLabel>
      <BusinessDescription>어떤 서비스를 제공하는 곳인지 알려주세요</BusinessDescription>
      <BusinessNumberWrapper>
        <BusinessNumberInput width="329px" />
      </BusinessNumberWrapper>

      <BtnWrapper>
        <Btn backgroundColor="#646464" onClick={() => navigate(-1)}>
          이전
        </Btn>
        <Btn backgroundColor="#006FFD">다음</Btn>
      </BtnWrapper>
    </TotalComponent>
  );
};

export default CompanySector;

const TotalComponent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const XIcon = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin: 15px 0px 15px 20px;
`;

const BusinessLabel = styled.div`
  display: flex;
  width: 304px;
  height: 41px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px; /* 60% */
  margin: 11px 0px 0px 19px;
`;

const BusinessDescription = styled.div`
  display: flex;
  width: 341px;
  height: 36px;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 85.714% */
  margin: 0px 0px 0px 20px;
`;

const BusinessAddressText = styled.div`
  display: flex;
  width: 47px;
  height: 19px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 85.714% */
  margin: 27px 0px 0px 9px;
`;

const BusinessNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0px 0px 19px;
`;
const BusinessNumberInput = styled.input`
  width: ${(props) => props.width};
  height: 40px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #000;
  background: #fff;
  padding: 10px;
  color: #000;
  outline: none;
  &::placeholder {
    color: #767676;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  left: 5px;
  position: absolute;
  bottom: 18px;
`;

const Btn = styled.button`
  display: flex;
  width: 180px;
  height: 40px;
  padding: 18px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  color: var(--Gray-White, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  margin: 0px 3.5px;
`;
