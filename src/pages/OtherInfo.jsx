import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon from "../assets/sign/Icon.svg";

const OtherInfo = () => {
  const navigate = useNavigate();

  const onClickIcon = () => {
    navigate("/");
  };

  return (
    <PhoneCertifyConfirmTotalComponent>
      <IconComponent onClick={onClickIcon} src={icon} alt="icon" />
      <Header>
        반갑습니다!
        <br />
        회원님의 정보를 알려주세요.
      </Header>
      <ContentComponent margin="38px 0px 0px 0px">
        <ContentLabel>이름</ContentLabel>
        <ContentInput type="text" />
      </ContentComponent>
      <ContentComponent>
        <ContentLabel>성별(필수)</ContentLabel>
        <UnSelectedGender>남성</UnSelectedGender>
        <UnSelectedGender margin="0px 0px 0px 8px">여성</UnSelectedGender>
      </ContentComponent>
      <ContentComponent>
        <ContentLabel>생년월일(필수)</ContentLabel>
        <ContentInput type="text" placeholder="주민번호 앞자리 입력" />
      </ContentComponent>
      <ContentComponent>
        <ContentLabel>거주지(필수)</ContentLabel>
        <ContentInput type="text" />
      </ContentComponent>
      <ContentComponent>
        <ContentLabel>활동명(필수)</ContentLabel>
        <ContentInput type="text" />
      </ContentComponent>
      <ContentComponent>
        <ContentLabel>주요 직무</ContentLabel>
        <ContentInput type="text" />
      </ContentComponent>
      <LastSignUpPage>`거의 다 왔어요! 마지막이에요:)`</LastSignUpPage>
      <SignUpCompleteBtn>가입완료</SignUpCompleteBtn>
    </PhoneCertifyConfirmTotalComponent>
  );
};

export default OtherInfo;

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

const Header = styled.div`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  font-size: 28px;
  font-weight: 600;
  margin: 24px 0px 0px 0px;
`;

const ContentComponent = styled.div`
  display: flex;
  align-items: center;
  width: 328px;
  height: 32px;
  margin: ${(props) => props.margin || "30px 0px 0px 0px"};
`;

const ContentLabel = styled.div`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  font-size: 18px;
  font-weight: 600;
  width: 142px;
`;

const ContentInput = styled.input`
  text-align: center;
  width: 178px;
  height: 32px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
  border: none;
  outline: none;
`;

const UnSelectedGender = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 32px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
  color: #1e1e1e;
  font-size: 18px;
  margin: ${(props) => props.margin || "0px"};
`;

// const SelectedGender = styled(UnSelectedGender)`
//   background-color: #3461fd;
//   color: #fff;
// `;

const LastSignUpPage = styled.div`
  font-family: "Pretendard Variable";
  color: #2623d3;
  font-size: 14px;
  font-weight: 600;
  margin: 100px 0px 0px 0px;
`;

const SignUpCompleteBtn = styled.button`
  font-family: "Pretendard Variable";
  width: 345px;
  height: 53px;
  border-radius: 14px;
  background-color: #3461fd;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin: 12px 0px 0px 0px;
  border: none;
`;
