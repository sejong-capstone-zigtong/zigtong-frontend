/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon from "../assets/sign/Icon.svg";
import eyeOff from "../assets/sign/EyeOff.svg";
import eyeOpen from "../assets/sign/EyeOpen.svg";
import naver from "../assets/sign/Naver.svg";
import kakao from "../assets/sign/Kakao.svg";
import bar from "../assets/sign/BarImg.svg";
import { loginApi } from "../apis/LoginApis";
import { useRecoilState } from "recoil";
import { userAccessToken } from "../recoil/atoms.tsx";

const Login = () => {
  const navigate = useNavigate();

  // 리코일 어세스토큰 저장
  const [accessToken, setAccessToken] = useRecoilState(userAccessToken);

  // 패스워드 보일지 안보일지
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  //로그인 시 유저정보 저장
  const [userInfo, setUserInfo] = useState({
    memberAccount: "",
    password: "",
  });
  const { memberAccount, password } = userInfo;

  //아이디, 비밀번호 바뀔때 실행 함수
  const onChangeAccount = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      memberAccount: value,
    });
  };
  const onChangePassword = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      password: value,
    });
  };

  // 패스워드에서 엔터키 누르면 아래 함수 실행
  const onPasswordKeyDown = (event) => {
    if (event.key === "Enter") {
      if (userInfo.memberAccount == "") {
        alert("아이디를 입력해주세요");
      } else if (userInfo.password == "") {
        alert("비밀번호를 입력해주세요");
      } else {
        onLogin();
      }
    }
  };

  // 로그인 api
  const onLogin = async () => {
    try {
      await loginApi(userInfo).then((res) => {
        console.log(res.data.data.accessToken);
        setAccessToken(res.data.data.accessToken);
        navigate("/works");
      });
    } catch (err) {
      if (err.response.data.data.message === "존재하지 않는 회원입니다.") {
        alert("존재하지 않는 회원입니다.");
      }
    }
  };

  return (
    <LoginTotalComponent>
      <IconComponent
        onClick={() => {
          navigate("/");
        }}
        src={icon}
        alt="icon"
      />
      <LoginText>로그인</LoginText>
      <LoginId onChange={onChangeAccount} type="text" value={memberAccount} placeholder="아이디" />
      <LoginPasswordTotalComponent>
        {/* 비밀번호 보일 때, 안보일 때 */}
        {isOpenPassword ? (
          <>
            <LoginPassword
              onChange={onChangePassword}
              onKeyDown={onPasswordKeyDown}
              type="text"
              value={password}
              placeholder="비밀번호"
            />
            <LoginPasswordEyeImg
              onClick={() => {
                setIsOpenPassword(false);
              }}
              src={eyeOff}
              alt="eye"
            />
          </>
        ) : (
          <>
            <LoginPassword
              onChange={onChangePassword}
              onKeyDown={onPasswordKeyDown}
              type="password"
              value={password}
              placeholder="비밀번호"
            />
            <LoginPasswordEyeImg
              onClick={() => {
                setIsOpenPassword(true);
              }}
              src={eyeOpen}
              alt="eye"
            />
          </>
        )}
      </LoginPasswordTotalComponent>
      <UnderSelfLoginComponent>
        <UnderSelfLoginLine />
        <UnderSelfLoginText>또는</UnderSelfLoginText>
        <UnderSelfLoginLine />
      </UnderSelfLoginComponent>
      <SocialLoginComponent margin="27px 0px 0px 0px" color="#fff" backgroundColor="#5AC466">
        <SocialLoginIcon src={naver} alt="N" />
        <SocailLoginText>네이버 로그인</SocailLoginText>
      </SocialLoginComponent>
      <SocialLoginComponent color="#000" backgroundColor="#FEE500">
        <SocialLoginIcon src={kakao} alt="K" />
        <SocailLoginText>카카오 로그인</SocailLoginText>
      </SocialLoginComponent>
      <SearchInfoComponent>
        <SearchInfoText>비밀번호 찾기</SearchInfoText>
        <SearchInfoBar src={bar} alt="|" />
        <SearchInfoText>아이디 찾기</SearchInfoText>
      </SearchInfoComponent>
      <NotUserText>아직 직통의 회원이 아니라면?</NotUserText>
      <SignUpText
        onClick={() => {
          navigate("/signup/phoneCertifyConfirm");
        }}
      >
        회원가입
      </SignUpText>
      <ManagerLoginText>관리자 로그인</ManagerLoginText>
    </LoginTotalComponent>
  );
};

export default Login;

const LoginTotalComponent = styled.div`
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

const LoginText = styled.div`
  font-family: "Pretendard Variable";
  margin: 110px 0px 0px 0px;
  color: #1e1e1e;
  font-size: 18px;
  font-weight: 600;
`;

const LoginId = styled.input`
  font-family: "Poppins";
  margin: 11px 0px 0px 0px;
  width: 345px;
  height: 60px;
  padding: 18px 24px;
  border-radius: 14px;
  background-color: #f5f9fe;
  color: #7c8ba0;
  font-weight: 400;
  border: none;
  outline: none;
`;

const LoginPasswordTotalComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const LoginPassword = styled(LoginId)`
  margin: 16px 0px 0px 0px;
`;

const LoginPasswordEyeImg = styled.img`
  margin: 16px 0px 0px 0px;
  position: absolute;
  right: 24px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const UnderSelfLoginComponent = styled.div`
  margin: 16px 0px 0px 0px;
  display: flex;
  align-items: center;
`;

const UnderSelfLoginLine = styled.div`
  width: 153px;
  height: 1px;
  background-color: #e0e5ec;
`;

const UnderSelfLoginText = styled.div`
  font-family: "Poppins";
  margin: 0px 7px;
  color: #262626;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

const SocialLoginComponent = styled.div`
  width: 328px;
  height: 44px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: ${(props) => props.margin || "10px 0px 0px 0px"};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`;

const SocialLoginIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const SocailLoginText = styled.div`
  font-family: "Pretendard Variable";
  margin: 0px 0px 0px 8px;
  font-weight: 600;
`;

const SearchInfoComponent = styled.div`
  margin: 14px 0px 0px 0px;
  display: flex;
  align-items: center;
`;

const SearchInfoText = styled.div`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const SearchInfoBar = styled.img`
  margin: 0px 8px;
  width: 1px;
  height: 12px;
`;

const NotUserText = styled.div`
  margin: 61px 0px 0px 0px;
  font-family: "Pretendard";
  color: #000;
  font-size: 15px;
`;

const SignUpText = styled(NotUserText)`
  margin: 20px 0px 0px 0px;
  color: #2623d3;
  font-weight: 600;
  cursor: pointer;
`;

const ManagerLoginText = styled(SignUpText)`
  margin: 40px 0px 0px 0px;
  color: #f00c0c;
`;
