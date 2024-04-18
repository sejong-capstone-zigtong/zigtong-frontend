/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon from "../assets/sign/Icon.svg";
import checkCircle from "../assets/sign/CheckCircle.svg";

const PhoneCertify = () => {
  const navigate = useNavigate();

  const onClickIcon = () => {
    navigate("/");
  };

  return (
    <PhoneCertifyTotalComponent>
      <IconComponent onClick={onClickIcon} src={icon} alt="icon" />
      <PhoneLabel>휴대폰 번호</PhoneLabel>
      <PhoneInputComponent>
        <BasicPhoneInput>010</BasicPhoneInput>
        <PhoneInput type="text" placeholder="- 없이 입력해주세요" />
        <PhoneCertifyBtn>인증 요청</PhoneCertifyBtn>
      </PhoneInputComponent>
      <AnswerCertifyLabel>인증번호</AnswerCertifyLabel>
      <AnswerCertifyInputComponent>
        <AnswerCertifyInput type="text" placeholder="인증번호 6자리를 입력해주세요" />
        <AnswerCertifyTime>03:00</AnswerCertifyTime>
      </AnswerCertifyInputComponent>
      <SendCertifyNumberModal>
        <SendCertifyNumberCheckImg src={checkCircle} alt="v" />
        <SendCertifyNumberText>인증번호를 발송했습니다.</SendCertifyNumberText>
      </SendCertifyNumberModal>
      <CompleteCertifyBtn>인증완료</CompleteCertifyBtn>
    </PhoneCertifyTotalComponent>
  );
};

export default PhoneCertify;

const PhoneCertifyTotalComponent = styled.div`
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

const PhoneInputComponent = styled.div`
  margin: 9px 0px 0px 0px;
  position: relative;
  display: flex;
  align-items: center;
`;

const BasicPhoneInput = styled.div`
  font-family: "Pretendard Variable";
  color: #000;
  font-weight: 600;
  position: absolute;
  left: 15.48px;
  margin: 2px 0px 0px 0px;
`;

const PhoneInput = styled.input`
  padding: 0px 0px 0px 54.38px;
  width: 354px;
  height: 44px;
  border-radius: 4px;
  background: #fff;
  font-size: 16px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
  border: none;
  outline: none;
`;

const PhoneCertifyBtn = styled.button`
  font-family: "Pretendard Variable";
  width: 71px;
  height: 34px;
  border-radius: 6px;
  border: 1px solid #2623d3;
  background-color: #fff;
  color: #2623d3;
  font-size: 14px;
  position: absolute;
  right: 13.58px;
  cursor: pointer;
`;

const AnswerCertifyLabel = styled(PhoneLabel)`
  margin: 30px 0px 0px 18px;
`;

const AnswerCertifyInputComponent = styled(PhoneInputComponent)`
  margin: 9px 0px 0px 0px;
`;

const AnswerCertifyInput = styled(PhoneInput)`
  padding: 0px 0px 0px 10.32px;
`;

const AnswerCertifyTime = styled.div`
  font-family: "Pretendard Variable";
  position: absolute;
  right: 26px;
  color: #2623d3;
`;

const SendCertifyNumberModal = styled.div`
  margin: 228px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 308px;
  height: 55px;
  border-radius: 8px;
  background-color: #000;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
`;

const SendCertifyNumberCheckImg = styled.img`
  width: 25px;
  height: 27px;
`;

const SendCertifyNumberText = styled.div`
  font-family: "Pretendard";
  color: #fff;
  margin: 0px 0px 0px 8px;
`;

const CompleteCertifyBtn = styled.button`
  font-family: "Pretendard Variable";
  width: 345px;
  height: 53px;
  border: none;
  border-radius: 14px;
  background-color: #d7d7d7;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin: 14px 0px 0px 0px;
  cursor: pointer;
`;
