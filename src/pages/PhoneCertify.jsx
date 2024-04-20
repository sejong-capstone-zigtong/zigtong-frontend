/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../assets/sign/Icon.svg";
import checkCircle from "../assets/sign/CheckCircleGreen.svg";

const PhoneCertify = () => {
  const navigate = useNavigate();

  // 초기 시간을 초단위로 설정합니다. 3분은 180초입니다.
  const [seconds, setSeconds] = useState(null);
  const [isActiveTimer, setIsActiveTimer] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  // 시간을 MM:SS 형태로 변환하는 함수
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  // 타이머 시작, 일시 정지 및 리셋을 관리하는 함수
  function toggleTimer() {
    setSeconds(18); // 180초로 초기화
    setIsActiveTimer(true);
    setIsVisibleModal(true);
    setTimeout(() => {
      setIsVisibleModal(false);
    }, 3000); // 3초 후 모달 숨기기
  }

  const onClickIcon = () => {
    navigate("/");
  };

  // 흔들림 애니메이션 정의
  const shakeAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: [0, -10, 10, -10, 10, 0],
      transition: { type: "spring", stiffness: 100, duration: 0.5 },
    },
  };

  // 타이머가 활성화되었을 때 매초마다 시간을 감소시키는 효과
  useEffect(() => {
    let interval = null;
    if (isActiveTimer && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActiveTimer, seconds]);

  return (
    <PhoneCertifyTotalComponent>
      <IconComponent onClick={onClickIcon} src={icon} alt="icon" />
      <PhoneLabel>휴대폰 번호</PhoneLabel>
      <PhoneInputComponent>
        <BasicPhoneInput>010</BasicPhoneInput>
        <PhoneInput type="text" placeholder="- 없이 입력해주세요" />
        <PhoneCertifyBtn onClick={toggleTimer}>인증 요청</PhoneCertifyBtn>
      </PhoneInputComponent>
      <AnswerCertifyLabel>인증번호</AnswerCertifyLabel>
      <AnswerCertifyInputComponent>
        <AnswerCertifyInput type="text" placeholder="인증번호 6자리를 입력해주세요" />
        {isActiveTimer && <AnswerCertifyTime>{formatTime(seconds)}</AnswerCertifyTime>}
      </AnswerCertifyInputComponent>
      <AnimatePresence>
        {isVisibleModal && (
          <motion.div initial="hidden" animate="visible" exit="hidden" variants={shakeAnimation}>
            <SendCertifyNumberModal>
              <SendCertifyNumberCheckImg src={checkCircle} alt="v" />
              <SendCertifyNumberText>인증번호를 발송했습니다.</SendCertifyNumberText>
            </SendCertifyNumberModal>
          </motion.div>
        )}
      </AnimatePresence>

      <CompleteCertifyBtn>인증하기</CompleteCertifyBtn>
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
  position: absolute;
  top: 685px;
  left: 43px;
  align-self: center;
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
  margin: 297px 0px 0px 0px;
  cursor: pointer;
`;
