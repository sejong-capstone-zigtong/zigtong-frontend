/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import xIcon from "assets/adminSignup/XIcon.svg";
import picture from "assets/adminWork/picture.svg";
import bottomArrow from "assets/adminWork/bottomArrow.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PostWorkApi } from "apis/AdminApis";

const NewWork = () => {
  const [workInfo, setWorkInfo] = useState({
    content: "",
    category: "건설업",
    numberOfRecruits: 0,
    startTime: "",
    endTime: "",
    recruitmentStartTime: "",
    recruitmentEndTime: "",
    lunchTime: "",
    wageType: "",
    wage: 0,
    address: "",
    phoneNumber: "",
  });
  const { content, category, numberOfRecruits, lunchTime, wageType, wage, address, phoneNumber } =
    workInfo;

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setWorkInfo({
      ...workInfo,
      [name]: value,
    });
  };
  const handleNumberOfRecruitsChange = (e) => {
    const newValue = e.target.value.trim(); // 입력값 (공백 제거)

    // 입력값이 숫자인지 확인
    if (!isNaN(newValue)) {
      // 입력값이 숫자인 경우, 상태를 업데이트
      setWorkInfo((prevState) => ({
        ...prevState,
        numberOfRecruits: newValue === "" ? 0 : parseInt(newValue), // 빈 문자열인 경우 0으로 초기화
      }));
    }
  };

  const [workStartDate, setWorkStartDate] = useState("");
  const [workStartTime, setWorkStartTime] = useState("");
  const [workEndDate, setWorkEndDate] = useState("");
  const [workEndTime, setWorkEndTime] = useState("");
  const [recruitStartDate, setRecruitStartDate] = useState("");
  const [recruitStartTime, setRecruitStartTime] = useState("");
  const [recruitEndDate, setRecruitEndDate] = useState("");
  const [recruitEndTime, setRecruitEndTime] = useState("");

  const isValidDateFormat = (input) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD 형식의 정규식
    return regex.test(input);
  };

  const isValidTimeFormat = (input) => {
    const regex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/; // HH:MM:SS 형식의 정규식
    return regex.test(input);
  };

  const isValidLunchTimeFormat = (input) => {
    const regex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/; // HH:MM 형식의 정규식
    return regex.test(input);
  };

  const onChangeWorkStartDate = (e) => {
    const value = e.target.value;
    setWorkStartDate(value);
    setWorkInfo({
      ...workInfo,
      startTime: value + "T" + workStartTime,
    });
  };
  const onChangeWorkStartTime = (e) => {
    const value = e.target.value;
    setWorkStartTime(value);
    setWorkInfo({
      ...workInfo,
      startTime: workStartDate + "T" + value,
    });
  };
  const onChangeWorkEndDate = (e) => {
    const value = e.target.value;
    setWorkEndDate(value);
    setWorkInfo({
      ...workInfo,
      endTime: value + "T" + workEndTime,
    });
  };
  const onChangeWorkEndTime = (e) => {
    const value = e.target.value;
    setWorkEndTime(value);
    setWorkInfo({
      ...workInfo,
      endTime: workEndDate + "T" + value,
    });
  };

  const onChangeRecruitStartDate = (e) => {
    const value = e.target.value;
    setRecruitStartDate(value);
    setWorkInfo({
      ...workInfo,
      recruitmentStartTime: value + "T" + recruitStartTime,
    });
  };
  const onChangeRecruitStartTime = (e) => {
    const value = e.target.value;
    setRecruitStartTime(value);
    setWorkInfo({
      ...workInfo,
      recruitmentStartTime: recruitStartDate + "T" + value,
    });
  };
  const onChangeRecruitEndDate = (e) => {
    const value = e.target.value;
    setRecruitEndDate(value);
    setWorkInfo({
      ...workInfo,
      recruitmentEndTime: value + "T" + recruitEndTime,
    });
  };
  const onChangeRecruitEndTime = (e) => {
    const value = e.target.value;
    setRecruitEndTime(value);
    setWorkInfo({
      ...workInfo,
      recruitmentEndTime: recruitEndDate + "T" + value,
    });
  };

  const onChangeLunchTime = (e) => {
    const value = e.target.value;
    setWorkInfo({
      ...workInfo,
      lunchTime: value,
    });
  };

  const [isWageModalOpen, setIsWageModalOpen] = useState(false);

  const handleNumberOfWageChange = (e) => {
    const newValue = e.target.value.trim(); // 입력값 (공백 제거)

    // 입력값이 숫자인지 확인
    if (!isNaN(newValue)) {
      // 입력값이 숫자인 경우, 상태를 업데이트
      setWorkInfo((prevState) => ({
        ...prevState,
        wage: newValue === "" ? 0 : parseInt(newValue), // 빈 문자열인 경우 0으로 초기화
      }));
    }
  };

  // 핸드폰 번호 입력 함수
  const onChangePhoneNumber = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // 숫자가 아닌 것은 제거
    if (value.length <= 11) {
      setWorkInfo({
        ...workInfo,
        phoneNumber: value,
      });
    }
  };

  const submitWork = async () => {
    try {
      if (content === "") {
        alert("제목을 입력해주세요");
      } else if (category === "") alert("하는 일을 선택해주세요");
      else if (numberOfRecruits === 0) alert("채용 인원을 입력해주세요");
      else if (!isValidDateFormat(workStartDate))
        alert("올바른 일하는 시작 날짜 형식으로 입력해주세요");
      else if (!isValidDateFormat(workEndDate))
        alert("올바른 일하는 종료 날짜 형식으로 입력해주세요");
      else if (!isValidDateFormat(recruitStartDate))
        alert("올바른 채용 시작 날짜 형식으로 입력해주세요");
      else if (!isValidDateFormat(recruitEndDate))
        alert("올바른 채용 시작 날짜 형식으로 입력해주세요");
      else if (!isValidTimeFormat(workStartTime))
        alert("올바른 일하는 시작 시간 형식으로 입력해주세요");
      else if (!isValidTimeFormat(workEndTime))
        alert("올바른 일하는 종료 시간 형식으로 입력해주세요");
      else if (!isValidTimeFormat(recruitStartTime))
        alert("올바른 채용 시작 시간 형식으로 입력해주세요");
      else if (!isValidTimeFormat(recruitEndTime))
        alert("올바른 채용 종료 시간 형식으로 입력해주세요");
      else if (!isValidLunchTimeFormat(lunchTime)) alert("점심 시작시간을 임력해주세요");
      else if (wageType === "") alert("임금 타입을 선택해주세요");
      else if (wage === 0) alert("임금을 입력해주세요");
      else if (address === "") alert("주소를 입력해주세요");
      else if (phoneNumber === "") alert("연락처를 입력해주세요");
      else {
        await PostWorkApi(workInfo).then((res) => {
          console.log(res);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <XIcon src={xIcon} onClick={() => navigate("/admin")} />
      <Label margin="26px 0px 0px 24px">사진 (선택)</Label>
      <LabelDescription>일하는 공간이나 일과 관련된 사진을 올려보세요.</LabelDescription>
      <CaptureIcon src={picture} />
      <Label margin="18px 0px 0px 24px">제목</Label>
      <SeekContent
        onChange={onChange}
        name="content"
        value={content}
        placeholder="구인 내용 요약"
      />
      <Label margin="24px 0px 0px 24px">하는일</Label>
      <SeekContent placeholder="스킬 검색" />
      <Label margin="24px 0px 0px 24px">모집 인원수</Label>
      <SeekContent
        onChange={handleNumberOfRecruitsChange}
        value={numberOfRecruits}
        placeholder="모집 인원수 입력"
      />
      <Label margin="24px 0px 0px 24px">일하는 날짜</Label>
      <DateText>시작</DateText>
      <DateWrapper>
        <DateInput
          value={workStartDate}
          onChange={onChangeWorkStartDate}
          placeholder="YYYY-MM-DD"
        />
        <DateInput value={workStartTime} onChange={onChangeWorkStartTime} placeholder="HH:MM:SS" />
      </DateWrapper>
      <DateText>종료</DateText>
      <DateWrapper>
        <DateInput value={workEndDate} onChange={onChangeWorkEndDate} placeholder="YYYY-MM-DD" />
        <DateInput value={workEndTime} onChange={onChangeWorkEndTime} placeholder="HH:MM:SS" />
      </DateWrapper>

      <Label margin="24px 0px 0px 24px">채용 날짜</Label>
      <DateText>시작</DateText>
      <DateWrapper>
        <DateInput
          value={recruitStartDate}
          onChange={onChangeRecruitStartDate}
          placeholder="YYYY-MM-DD"
        />
        <DateInput
          value={recruitStartTime}
          onChange={onChangeRecruitStartTime}
          placeholder="HH:MM:SS"
        />
      </DateWrapper>
      <DateText>종료</DateText>
      <DateWrapper>
        <DateInput
          value={recruitEndDate}
          onChange={onChangeRecruitEndDate}
          placeholder="YYYY-MM-DD"
        />
        <DateInput
          value={recruitEndTime}
          onChange={onChangeRecruitEndTime}
          placeholder="HH:MM:SS"
        />
      </DateWrapper>
      <Label margin="24px 0px 0px 24px">점심시간 시작</Label>
      <SeekContent
        value={lunchTime}
        onChange={onChangeLunchTime}
        placeholder="HH:MM 형식으로 입력"
      />
      <Label margin="24px 0px 0px 24px">임금</Label>
      <WageWrapper>
        <WageDiv>
          {workInfo.wageType === "MONTH"
            ? "월급"
            : workInfo.wageType === "DAY"
            ? "일급"
            : workInfo.wageType === "CASE"
            ? "건당"
            : "선택"}
        </WageDiv>
        <BottomArrowIcon onClick={() => setIsWageModalOpen(!isWageModalOpen)} src={bottomArrow} />
        {isWageModalOpen && (
          <WageModal>
            <WageModalEachWrapper
              onClick={() => {
                setWorkInfo({
                  ...workInfo,
                  wageType: "MONTH",
                });
                setIsWageModalOpen(false);
              }}
            >
              월급
            </WageModalEachWrapper>
            <WageModalEachWrapper
              onClick={() => {
                setWorkInfo({
                  ...workInfo,
                  wageType: "DAY",
                });
                setIsWageModalOpen(false);
              }}
            >
              일급
            </WageModalEachWrapper>
            <WageModalEachWrapper
              onClick={() => {
                setWorkInfo({
                  ...workInfo,
                  wageType: "CASE",
                });
                setIsWageModalOpen(false);
              }}
            >
              건당
            </WageModalEachWrapper>
          </WageModal>
        )}
        <WageInput onChange={handleNumberOfWageChange} value={wage}></WageInput>
        <WageOne>원</WageOne>
      </WageWrapper>
      <MinorityPay>
        <MinorityPayText>2024년 최저시급은 </MinorityPayText>
        <MinorityPayText style={{ color: "#006FFD", margin: "0px 0px 0px 5px" }}>
          9,860
        </MinorityPayText>
        <MinorityPayText>원입니다.</MinorityPayText>
      </MinorityPay>
      <Label margin="15px 0px 0px 24px">근무지 주소</Label>
      <SeekContent
        onChange={onChange}
        name="address"
        value={address}
        placeholder="주소를 입력해주세요"
      />
      <Label margin="15px 0px 0px 24px">연락처</Label>
      <SeekContent
        onChange={onChangePhoneNumber}
        value={phoneNumber}
        placeholder="전화번호 11자리를 입력해주세요"
      />
      <CompleteBtn onClick={submitWork}>작성 완료</CompleteBtn>
    </Container>
  );
};

export default NewWork;

const Container = styled.div`
  width: 100%;
  height: 100%;
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

const Label = styled.div`
  display: flex;
  height: 19px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 85.714% */
  margin: ${(props) => props.margin};
`;

const LabelDescription = styled.div`
  display: flex;
  width: 271px;
  height: 24px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Grey-text, #a6a6a6);
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 100% */
  margin: 0px 0px 0px 26px;
`;

const CaptureIcon = styled.img`
  width: 60px;
  height: 60px;
  margin: 3px 0px 0px 26px;
`;

const SeekContent = styled.input`
  width: 329px;
  height: 43px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #000;
  background: #fff;
  margin: 6px 0px 0px 26px;
  padding: 13px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
`;

const DateText = styled.div`
  display: flex;
  width: 28px;
  height: 24px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Grey-text, #a6a6a6);
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 100% */
  margin: 3px 0px 0px 31px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 2px 0px 0px 29px;
`;

const DateInput = styled.input`
  width: 100px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #000;
  background: #fff;
  display: flex;
  height: 26px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 85.714% */
`;

const WageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 13px 0px 0px 24px;
  gap: 19px;
`;

const BottomArrowIcon = styled.img`
  position: absolute;
  left: 95px;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  cursor: pointer;
`;

const WageDiv = styled.div`
  width: 120px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 85.714% */
  display: flex;
  height: 26px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
`;

const WageInput = styled.input`
  width: 120px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 85.714% */
  display: flex;
  height: 26px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
`;

const WageOne = styled.div`
  display: flex;
  width: 43px;
  height: 27px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 85.714% */
  position: absolute;
  right: 100px;
`;

const MinorityPay = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0px 0px 29px;
`;

const MinorityPayText = styled.span`
  display: flex;
  height: 24px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Grey-primary, #646464);
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 100% */
`;

const CompleteBtn = styled.button`
  display: flex;
  width: 350px;
  height: 40px;
  padding: 18px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--secondary, #006ffd);
  color: var(--Gray-White, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  margin: 36px 0px 26px 24px;
  border: none;
  cursor: pointer;
`;

const WageModal = styled.div`
  position: absolute;
  left: 0;
  top: 28px;
  width: 120px;
  height: 110px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d9d9d9;
`;

const WageModalEachWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  width: 120px;
  height: 37px;
  border-bottom: 1px solid #fff;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 85.714% */
`;
