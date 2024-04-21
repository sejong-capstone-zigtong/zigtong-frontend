/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon from "../assets/sign/Icon.svg";
import checkCircleGray from "../assets/sign/CheckCircleGray.svg";
import checkCircleBlack from "../assets/sign/CheckCircleBlack.svg";

const Terms = () => {
  const navigate = useNavigate();

  const [checkedState, setCheckedState] = useState({
    isCheckedTotal: false,
    isCheckedOne: false,
    isCheckedTwo: false,
    isCheckedThree: false,
    isCheckedFour: false,
    isCheckedFive: false,
    isCheckedFiveOne: false,
    isCheckedFiveTwo: false,
    isCheckedSix: false,
  });

  const onClickIcon = () => {
    navigate("/");
  };

  return (
    <SignUpTotalComponent>
      <IconComponent onClick={onClickIcon} src={icon} alt="icon" />
      <SignUpHeader>회원가입</SignUpHeader>
      <SignUpLabel margin="14px 0px 0px 19px">아이디</SignUpLabel>
      <SignUpInput type="text" placeholder="아이디를 입력해주세요" />
      <SignUpLabel margin="12px 0px 0px 19px">비밀번호</SignUpLabel>
      <SignUpInput type="text" placeholder="비밀번호를 입력해주세요" />
      <SignUpLabel margin="18px 0px 0px 19px">비밀번호 확인</SignUpLabel>
      <SignUpInput type="text" placeholder="비밀번호를 재입력해주세요" />
      <TotalCheckTermsComponent>
        {checkedState.isCheckedTotal ? (
          <CheckImg
            onClick={() => {
              setCheckedState({
                isCheckedTotal: false,
                isCheckedOne: false,
                isCheckedTwo: false,
                isCheckedThree: false,
                isCheckedFour: false,
                isCheckedFive: false,
                isCheckedFiveOne: false,
                isCheckedFiveTwo: false,
                isCheckedSix: false,
              });
            }}
            src={checkCircleBlack}
            alt="v"
          />
        ) : (
          <CheckImg
            onClick={() => {
              setCheckedState({
                isCheckedTotal: true,
                isCheckedOne: true,
                isCheckedTwo: true,
                isCheckedThree: true,
                isCheckedFour: true,
                isCheckedFive: true,
                isCheckedFiveOne: true,
                isCheckedFiveTwo: true,
                isCheckedSix: true,
              });
            }}
            src={checkCircleGray}
            alt="v"
          />
        )}
        <TotalCheckTermsText>전체동의</TotalCheckTermsText>
      </TotalCheckTermsComponent>
      <OtherCheckTermsComponent>
        {checkedState.isCheckedOne ? (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedOne: false,
              });
            }}
            src={checkCircleBlack}
            alt="v"
          />
        ) : (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedOne: true,
              });
            }}
            src={checkCircleGray}
            alt="v"
          />
        )}
        <OtherCheckTermsText>[필수] 만 14세 이상입니다.</OtherCheckTermsText>
      </OtherCheckTermsComponent>
      <OtherCheckTermsComponent>
        {checkedState.isCheckedTwo ? (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedTwo: false,
              });
            }}
            src={checkCircleBlack}
            alt="v"
          />
        ) : (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedTwo: true,
              });
            }}
            src={checkCircleGray}
            alt="v"
          />
        )}
        <OtherCheckTermsText>[필수] 서비스 이용약관 동의</OtherCheckTermsText>
      </OtherCheckTermsComponent>
      <OtherCheckTermsComponent>
        {checkedState.isCheckedThree ? (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedThree: false,
              });
            }}
            src={checkCircleBlack}
            alt="v"
          />
        ) : (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedThree: true,
              });
            }}
            src={checkCircleGray}
            alt="v"
          />
        )}
        <OtherCheckTermsText>[필수] 개인정보 수집 및 이용 동의</OtherCheckTermsText>
      </OtherCheckTermsComponent>
      <OtherCheckTermsComponent>
        {checkedState.isCheckedFour ? (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedFour: false,
              });
            }}
            src={checkCircleBlack}
            alt="v"
          />
        ) : (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedFour: true,
              });
            }}
            src={checkCircleGray}
            alt="v"
          />
        )}
        <OtherCheckTermsText>[선택] 마케팅 목적의 개인정보 수집 및 이용 동의</OtherCheckTermsText>
      </OtherCheckTermsComponent>
      <OtherCheckTermsComponent>
        {checkedState.isCheckedFive ? (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedFive: false,
                isCheckedFiveOne: false,
                isCheckedFiveTwo: false,
              });
            }}
            src={checkCircleBlack}
            alt="v"
          />
        ) : (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedFive: true,
                isCheckedFiveOne: true,
                isCheckedFiveTwo: true,
              });
            }}
            src={checkCircleGray}
            alt="v"
          />
        )}
        <OtherCheckTermsText>[선택] 혜택/마케팅 정보 수신 동의</OtherCheckTermsText>
      </OtherCheckTermsComponent>

      <TheOtherCheckTermsComponent>
        {checkedState.isCheckedFiveOne ? (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedFiveOne: false,
              });
            }}
            src={checkCircleBlack}
            alt="v"
          />
        ) : (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedFiveOne: true,
              });
            }}
            src={checkCircleGray}
            alt="v"
          />
        )}
        <OtherCheckTermsText>[선택] 앱푸시 수신 동의</OtherCheckTermsText>
      </TheOtherCheckTermsComponent>

      <TheOtherCheckTermsComponent>
        {checkedState.isCheckedFiveTwo ? (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedFiveTwo: false,
              });
            }}
            src={checkCircleBlack}
            alt="v"
          />
        ) : (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedFiveTwo: true,
              });
            }}
            src={checkCircleGray}
            alt="v"
          />
        )}
        <OtherCheckTermsText>[선택] SMS,LMS,MMS 수신 동의</OtherCheckTermsText>
      </TheOtherCheckTermsComponent>

      <OtherCheckTermsComponent>
        {checkedState.isCheckedSix ? (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedSix: false,
              });
            }}
            src={checkCircleBlack}
            alt="v"
          />
        ) : (
          <CheckImg
            onClick={() => {
              setCheckedState({
                ...checkedState,
                isCheckedSix: true,
              });
            }}
            src={checkCircleGray}
            alt="v"
          />
        )}
        <OtherCheckTermsText>[선택] 장기 미접속 시에도 계정 활성 상태 유지</OtherCheckTermsText>
      </OtherCheckTermsComponent>
      <NextButton>다음</NextButton>
    </SignUpTotalComponent>
  );
};

export default Terms;

const SignUpTotalComponent = styled.div`
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

const SignUpHeader = styled.div`
  font-family: "Pretendard Variable";
  width: 85px;
  height: 35px;
  color: #1e1e1e;
  font-size: 20px;
  font-weight: 800;
  align-self: flex-start;
  margin: 0px 0px 0px 20px;
`;

const SignUpLabel = styled.div`
  font-family: "Pretendard Variable";
  color: #979797;
  align-self: flex-start;
  font-size: 14px;
  margin: ${(props) => props.margin};
`;

const SignUpInput = styled.input`
  font-family: "Pretendard Variable";
  margin: 6px 0px 0px 0px;
  padding: 0px 0px 0px 10px;
  width: 354px;
  height: 44px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
  color: #000;
  font-size: 16px;
  border: none;
  outline: none;
  &::placeholder {
    color: #a3a3a3;
  }
`;

const TotalCheckTermsComponent = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0px 0px 0px;
  width: 354px;
  height: 44px;
  border-radius: 4px;
  background-color: #f5f2f2;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
`;

const CheckImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 0px 7px;
`;

const TotalCheckTermsText = styled.div`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  font-size: 15px;
  font-weight: 700;
  margin: 0px 0px 0px 7px;
`;

const OtherCheckTermsComponent = styled(TotalCheckTermsComponent)`
  height: 24px;
  margin: 8px 0px 0px 0px;
  background-color: #fff;
  box-shadow: none;
`;

const OtherCheckTermsText = styled(TotalCheckTermsText)`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  font-size: 14px;
  font-weight: 400;
  margin: 0px 0px 0px 5px;
`;

const TheOtherCheckTermsComponent = styled(OtherCheckTermsComponent)`
  margin: 8px 0px 0px 32px;
`;

const NextButton = styled.button`
  font-family: "Pretendard Variable";
  width: 345px;
  height: 53px;
  border-radius: 14px;
  background-color: #3461fd;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin: 10.5px 0px 0px 0px;
  border: none;
  cursor: pointer;
`;
