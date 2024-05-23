/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import icon from "assets/sign/Icon.svg";
import check from "assets/sign/Check.svg";

// 휴대폰 인증 완료화면
const PhoneCertifyConfirm = () => {
  const navigate = useNavigate();

  // const { state } = useLocation();
  // const [userInfo, setUserInfo] = useState(state.userInfo);

  // const [userInfo, setUserInfo] = useState({
  //   phoneNumber: "01054851325",
  // });

  const [userInfo, setUserInfo] = useState({
    phoneNumber: "",
  });

  const { phoneNumber } = userInfo;

  const onChangePhoneNumber = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      phoneNumber: value,
    });
  };

  return (
    <PhoneCertifyConfirmTotalComponent>
      <IconComponent
        onClick={() => {
          navigate("/");
        }}
        src={icon}
        alt="icon"
      />
      <PhoneLabel>휴대폰 번호</PhoneLabel>
      <PhoneInputComponent>
        <PhoneInput
          value={phoneNumber}
          placeholder="핸드폰 번호 입력"
          onChange={onChangePhoneNumber}
        />
      </PhoneInputComponent>
      {/* <PhoneTotalComponent>
        <PhoneComponent>
          <PhoneTextFirst>{userInfo.phoneNumber.substring(0, 3)}</PhoneTextFirst>
          <PhoneTextOther>{userInfo.phoneNumber.substring(3, 7)}</PhoneTextOther>
          <PhoneTextOther>{userInfo.phoneNumber.substring(7)}</PhoneTextOther>
          <PhoneCheckImg src={check} alt="V" />
        </PhoneComponent>
      </PhoneTotalComponent> */}
      <SignUpBtn
        onClick={() => {
          navigate("/signup/terms", {
            state: { userInfo: userInfo },
          });
        }}
      >
        회원가입
      </SignUpBtn>
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

const PhoneInputComponent = styled.div`
  margin: 9px 0px 0px 0px;
  position: relative;
  display: flex;
  align-items: center;
`;

const PhoneInput = styled.input`
  padding: 0px 0px 0px 15.48px;
  width: 354px;
  height: 44px;
  border-radius: 4px;
  background: #fff;
  font-size: 16px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
  border: none;
  outline: none;
`;
