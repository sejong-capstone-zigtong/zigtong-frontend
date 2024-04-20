import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon from "../assets/sign/Icon.svg";

const Terms = () => {
  const navigate = useNavigate();

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
