import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon from "../assets/sign/Icon.svg";
import check from "../assets/sign/Check.svg";

const PhoneCertifyConfirm = () => {
  const navigate = useNavigate();

  const onClickIcon = () => {
    navigate("/");
  };

  return (
    <PhoneCertifyConfirmTotalComponent>
      <IconComponent onClick={onClickIcon} src={icon} alt="icon" />
      <PhoneLabel>휴대폰 번호</PhoneLabel>
      <PhoneTotalComponent>
        <PhoneComponent>
          <PhoneTextFirst>010</PhoneTextFirst>
          <PhoneTextOther>2970</PhoneTextOther>
          <PhoneTextOther>4417</PhoneTextOther>
          <PhoneCheckImg src={check} alt="V" />
        </PhoneComponent>
      </PhoneTotalComponent>
      <SignUpBtn>회원가입</SignUpBtn>
    </PhoneCertifyConfirmTotalComponent>
  );
};

export default PhoneCertifyConfirm;

const PhoneCertifyConfirmTotalComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const IconComponent = styled.img`
  margin: 72px 0px 0px 0px;
  width: 211px;
  height: 85px;
  cursor: pointer;
`;

const PhoneLabel = styled.div`
  font-family: "Pretendard Variable";
  margin: 128px 0px 0px 18px;
  color: #979797;
  align-self: flex-start;
  font-size: 14px;
`;

const PhoneTotalComponent = styled.div`
  margin: 9px 0px 0px 0px;
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const PhoneComponent = styled.div`
  display: flex;
  align-items: center;
  width: 354px;
  height: 44px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
`;

const PhoneTextFirst = styled.div`
  font-family: "Pretendard Variable";
  color: #000;
  margin: 0px 0px 0px 11.48px;
`;

const PhoneTextOther = styled(PhoneTextFirst)`
  margin: 0px 0px 0px 7.22px;
`;

const PhoneCheckImg = styled.img`
  position: absolute;
  right: 10px;
  width: 24px;
  height: 24px;
`;

const SignUpBtn = styled.button`
  font-family: "Pretendard";
  margin: 395px 0px 0px 0px;
  width: 345px;
  height: 53px;
  border: none;
  border-radius: 14px;
  background-color: #3461fd;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
