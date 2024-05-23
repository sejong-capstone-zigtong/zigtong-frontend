/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import xIcon from "assets/adminSignup/XIcon.svg";
import bar from "assets/adminSignup/Bar.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(location.state.userInfo);
  const { accountId, password, passwordCheck } = userInfo;

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const nextSignUp = () => {
    if (accountId === "") {
      alert("아이디를 입력해주세요");
    } else if (password === "") {
      alert("전화번호를 입력해주세요");
    } else if (passwordCheck === "") {
      alert("비밀번호가 일치하지 않습니다");
    } else if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다");
    } else {
      navigate("/admin/signup/companyName", {
        state: {
          userInfo: userInfo,
        },
      });
    }
  };

  return (
    <TotalComponent>
      <XIcon src={xIcon} onClick={() => navigate("/admin/login")} />
      <BusinessLabel>아이디</BusinessLabel>
      <BusinessNumberWrapper>
        <BusinessNumberInput
          placeholder="아이디를 입력해주세요"
          width="329px"
          onChange={onChange}
          name="accountId"
          value={accountId}
        />
      </BusinessNumberWrapper>
      <BusinessLabel>비밀번호</BusinessLabel>
      <BusinessNumberWrapper>
        <BusinessNumberInput
          placeholder="비밀번호를 입력해주세요"
          width="329px"
          onChange={onChange}
          name="password"
          value={password}
        />
      </BusinessNumberWrapper>
      <BusinessLabel>비밀번호 확인</BusinessLabel>
      <BusinessNumberWrapper>
        <BusinessNumberInput
          placeholder="비밀번호를 재입력해주세요"
          width="329px"
          onChange={onChange}
          name="passwordCheck"
          value={passwordCheck}
        />
      </BusinessNumberWrapper>
      <BtnWrapper>
        <Btn backgroundColor="#646464" onClick={() => navigate(-1)}>
          이전
        </Btn>
        <Btn backgroundColor="#006FFD" onClick={nextSignUp}>
          다음
        </Btn>
      </BtnWrapper>
    </TotalComponent>
  );
};

export default Account;

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

const BarIcon = styled.img`
  width: 10px;
  height: 2px;
  flex-shrink: 0;
  margin: 0px 10px;
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

const BusinessNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 11px 0px 0px 18px;
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
