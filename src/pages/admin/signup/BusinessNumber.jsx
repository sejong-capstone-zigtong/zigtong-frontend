/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import xIcon from "assets/adminSignup/XIcon.svg";
import bar from "assets/adminSignup/Bar.svg";
import { useState } from "react";
import { useEffect } from "react";
import { handleCheckRegistrationNumber } from "hook/CheckBusinessNumber";
import { useNavigate } from "react-router-dom";

const BusinessNumber = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    businessName: "",
    businessNumber: "",
    name: "",
    phoneNumber: "",
    accountId: "",
    password: "",
    passwordCheck: "",
    companyName: "",
    address: "",
    category: "",
    role: "COMPANY",
  });

  const [businessNumber1, setBusinessNumber1] = useState("");
  const [businessNumber2, setBusinessNumber2] = useState("");
  const [businessNumber3, setBusinessNumber3] = useState("");

  const { businessName, name, phoneNumber } = userInfo;

  const onChangeBusinessName = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      businessName: value,
    });
  };
  const onChangeBusinessNumber1 = (e) => {
    const value = e.target.value;
    setBusinessNumber1(value);
    setUserInfo({
      ...userInfo,
      businessNumber: value + businessNumber2 + businessNumber3,
    });
  };
  const onChangeBusinessNumber2 = (e) => {
    const value = e.target.value;
    setBusinessNumber2(value);
    setUserInfo({
      ...userInfo,
      businessNumber: businessNumber1 + value + businessNumber3,
    });
  };
  const onChangeBusinessNumber3 = (e) => {
    const value = e.target.value;
    setBusinessNumber3(value);
    setUserInfo({
      ...userInfo,
      businessNumber: businessNumber1 + businessNumber2 + value,
    });
  };
  const onChageName = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      name: value,
    });
  };
  // 핸드폰 번호 입력 함수
  const onChangePhoneNumber = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자가 아닌 것은 제거
    if (value.length <= 11) {
      setUserInfo({
        ...userInfo,
        phoneNumber: value,
      });
    }
  };

  const handleCheckBusinessRegistration = async () => {
    if (userInfo.businessName === "") {
      alert("상호명을 입력해주세요");
    } else if (userInfo.businessNumber.length !== 10) {
      alert("올바른 사업자 번호를 입력해주세요");
    } else if (userInfo.name === "") {
      alert("대표자명을 입력해주세요");
    } else if (userInfo.phoneNumber.length !== 11) {
      alert("올바른 전화번호를 입력해주세요");
    } else {
      try {
        const data = await handleCheckRegistrationNumber(userInfo.businessNumber);
        if (data === "") {
          alert("올바른 사업자번호를 입력해주세요");
        } else if (data === "02") {
          alert("휴업자 사업자번호입니다");
        } else if (data === "03") {
          alert("폐업자 사업자번호입니다");
        } else if (data === "01") {
          navigate("/admin/signup/account", {
            state: {
              userInfo: userInfo,
            },
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <TotalComponent>
      <XIcon src={xIcon} onClick={() => navigate("/admin/login")} />

      <BusinessLabel>상호명</BusinessLabel>
      <BusinessNumberWrapper>
        <BusinessNumberInput
          onChange={onChangeBusinessName}
          value={businessName}
          placeholder="상호명을 입력해주세요"
          width="249px"
        />
      </BusinessNumberWrapper>
      <BusinessLabel>사업자 등록 번호를 입력해주세요</BusinessLabel>
      <BusinessNumberWrapper>
        <BusinessNumberInput
          onChange={onChangeBusinessNumber1}
          value={businessNumber1}
          style={{ textAlign: "center" }}
          width="80px"
          placeholder="XXX"
        />
        <BarIcon src={bar} />
        <BusinessNumberInput
          onChange={onChangeBusinessNumber2}
          value={businessNumber2}
          style={{ textAlign: "center" }}
          width="60px"
          placeholder="XX"
        />
        <BarIcon src={bar} />
        <BusinessNumberInput
          onChange={onChangeBusinessNumber3}
          value={businessNumber3}
          style={{ textAlign: "center" }}
          width="100px"
          placeholder="XXXXX"
        />
      </BusinessNumberWrapper>
      <BusinessLabel>대표자명</BusinessLabel>
      <BusinessNumberWrapper>
        <BusinessNumberInput onChange={onChageName} value={name} width="120px" />
      </BusinessNumberWrapper>
      <BusinessLabel>전화번호를 입력해주세요</BusinessLabel>
      <BusinessNumberWrapper>
        <BusinessNumberInput
          onChange={onChangePhoneNumber}
          value={phoneNumber}
          width="329px"
          placeholder="'-'없이 입력해주세요"
        />
      </BusinessNumberWrapper>
      <WarningText>*사업자 등록증에 기재되어있는 정보를 정확하게 입력해주세요.</WarningText>
      <BtnWrapper>
        <Btn backgroundColor="#646464" onClick={() => navigate(-1)}>
          이전
        </Btn>
        <Btn backgroundColor="#006FFD" onClick={handleCheckBusinessRegistration}>
          다음
        </Btn>
      </BtnWrapper>
    </TotalComponent>
  );
};

export default BusinessNumber;

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

const WarningText = styled.div`
  display: flex;
  width: 369px;
  height: 37px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 85.714% */
  margin: 30px 0px 0px 17px;
`;
