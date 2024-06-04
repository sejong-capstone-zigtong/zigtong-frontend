/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import KakaoMap from "pages/worker/signup/KakaoMap.jsx";
import { signUpApi } from "apis/SignUpApis.jsx";
import icon from "assets/sign/Icon.svg";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { getSkill, getSkillAll, getSkillCategoryApi } from "apis/ProfileApis";
// 회원 가입 시 추가정보 받는 페이지
const OtherInfo = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  // userInfo 전달받아 저장(아이디, 비밀번호 추가)
  const [userInfo, setUserInfo] = useState({
    ...state.userInfo,
    name: "",
    address: "",
    gender: "",
    birthdate: "",
    nickname: "",
    skillId: 0,
  });

  // 주요 직무 드롭다운
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  // 주요 직무 드롭다운
  const [isOpenDropdownSkill, setIsOpenDropdownSkill] = useState(false);
  const [selectedDropdownSkill, setSelectedDropdownSkill] = useState(null);
  const [dropdownOptionsSkill, setDropdownOptionsSkill] = useState([]);

  const getSkillCategories = async () => {
    await getSkillCategoryApi().then((res) => {
      console.log(res);
      setDropdownOptions(res.data.data);
    });
  };

  useEffect(() => {
    getSkillCategories();
  }, []);

  const toggleDropdown = () => {
    if (isOpenDropdown === false) {
      setIsOpenDropdownSkill(false);
    }
    setIsOpenDropdown(!isOpenDropdown);
  };

  const toggleDropdownSkill = () => {
    if (isOpenDropdownSkill === false) {
      setIsOpenDropdown(false);
    }
    setIsOpenDropdownSkill(!isOpenDropdownSkill);
  };

  const handleOptionClick = async (option) => {
    setSelectedDropdown(option.category);
    setIsOpenDropdown(false);
    await getSkill(option.category).then((res) => {
      console.log(res);
      setDropdownOptionsSkill(res.data.data);
    });
  };

  const handleOptionClickSkill = (option) => {
    setSelectedDropdownSkill(option.name);
    setIsOpenDropdownSkill(false);
    setUserInfo({
      ...userInfo,
      skillId: option.id,
    });
  };

  // 지도 맵 킬지 여부
  const [mapToggle, setMapToggle] = useState(false);
  const handleMapToggle = () => {
    setMapToggle(!mapToggle);
  };

  // 이름 입력 함수
  const onChangeName = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      name: value,
    });
  };

  // 성별 선택
  const onClickGender = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      gender: e.target.value,
    });
  };

  // 생년월일 입력
  const onChangeBirthDate = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      birthdate: value,
    });
  };
  const isValidDate = (dateString) => {
    // 정규 표현식을 이용하여 YYYY-MM-DD 형식인지 확인
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  };

  // 이름 입력
  const onChangeNickname = (e) => {
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      nickname: value,
    });
  };

  // 회원가입
  const signup = async () => {
    try {
      await signUpApi(userInfo).then((res) => {
        console.log(res);
        alert("회원가입 성공");
        navigate("/login");
      });
    } catch (err) {
      console.log(err);
    }
  };

  // 회원가입 버튼 눌렀을 때
  const onClickSignUp = () => {
    if (!isValidDate(userInfo.birthdate)) {
      alert("올바른 생년월일 형식으로 작성해주세요");
    } else if (
      userInfo.name !== "" &&
      userInfo.gender !== "" &&
      userInfo.address !== "" &&
      userInfo.nickname !== ""
    ) {
      signup();
    } else {
      alert("모든 정보를 입력해주세요");
    }
  };

  return (
    <PhoneCertifyConfirmTotalComponent>
      {mapToggle ? (
        <KakaoMap handleMapToggle={handleMapToggle} userInfo={userInfo} setUserInfo={setUserInfo} />
      ) : (
        <>
          <IconComponent
            onClick={() => {
              navigate("/");
            }}
            src={icon}
            alt="icon"
          />
          <Header>
            반갑습니다!
            <br />
            회원님의 정보를 알려주세요.
          </Header>
          <ContentComponent margin="38px 0px 0px 0px">
            <ContentLabel>이름</ContentLabel>
            <ContentInput
              type="text"
              value={userInfo.name}
              onChange={onChangeName}
              placeholder="이름을 입력하세요"
            />
          </ContentComponent>
          <ContentComponent>
            <ContentLabel>성별</ContentLabel>
            {userInfo.gender === "MALE" ? (
              <SelectedGender value="MALE" onClick={onClickGender}>
                남성
              </SelectedGender>
            ) : (
              <UnSelectedGender value="MALE" onClick={onClickGender}>
                남성
              </UnSelectedGender>
            )}
            {userInfo.gender === "FEMALE" ? (
              <SelectedGender value="FEMALE" onClick={onClickGender} margin="0px 0px 0px 8px">
                여성
              </SelectedGender>
            ) : (
              <UnSelectedGender value="FEMALE" onClick={onClickGender} margin="0px 0px 0px 8px">
                여성
              </UnSelectedGender>
            )}
          </ContentComponent>
          <ContentComponent>
            <ContentLabel>생년월일</ContentLabel>
            <ContentInput
              value={userInfo.birthdate}
              onChange={onChangeBirthDate}
              type="text"
              placeholder="YYYY-MM-DD"
            />
          </ContentComponent>
          <ContentComponent>
            <ContentLabel>거주지</ContentLabel>
            <ContentInput
              type="text"
              placeholder="거주지 선택 (클릭) "
              name="address"
              value={userInfo.address}
              onClick={handleMapToggle}
            />
          </ContentComponent>
          <ContentComponent>
            <ContentLabel>활동명</ContentLabel>
            <ContentInput
              placeholder="활동명을 입력하세요"
              type="text"
              onChange={onChangeNickname}
              value={userInfo.nickname}
            />
          </ContentComponent>
          <ContentComponent
            style={{
              position: "relative",
              margin: "34px 0px 0px 0px",
              height: "auto",
              alignItems: "flex-start",
            }}
          >
            <ContentLabel
              style={{
                margin: "8px 0px 0px 0px",
              }}
            >
              주요 직무
            </ContentLabel>
            <div
              style={{
                position: "relative",
              }}
            >
              <DropdownInput onClick={toggleDropdown}>
                {selectedDropdown || "직무를 선택해주세요"}
              </DropdownInput>
              <div style={{ backgroundColor: "#f1f1f1" }}>
                <AnimatePresence>
                  {isOpenDropdown && (
                    <motion.div
                      className="dropdown-options"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        zIndex: 2,
                        position: "absolute",
                        width: "100%",
                        height: "150px",
                        overflowY: "auto",
                        top: "100%",
                        left: "0",
                        transition: "opacity 0.2s ease, transform 0.2s ease",
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        display: "flex",
                        flexDirection: "column",
                        borderTop: "none",
                        alignItems: "center",
                        borderBottomLeftRadius: "4px",
                        borderBottomRightRadius: "4px",
                        padding: "3px 0px",
                      }}
                    >
                      {dropdownOptions.map((option) => (
                        <motion.div
                          key={option.category}
                          onClick={() => handleOptionClick(option)}
                          whileHover={{ backgroundColor: "#ccc" }}
                          style={{
                            borderTop: "1px solid #f1f1f1",
                            padding: "5px",
                            width: "100%",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                            cursor: "pointer",
                          }}
                        >
                          {option.category}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ContentComponent>
          <ContentComponent
            style={{
              position: "relative",
              margin: "34px 0px 0px 0px",
              height: "auto",
              alignItems: "flex-start",
            }}
          >
            <ContentLabel
              style={{
                margin: "8px 0px 0px 0px",
              }}
            >
              직무 스킬
            </ContentLabel>
            <div
              style={{
                position: "relative",
              }}
            >
              <DropdownInput onClick={toggleDropdownSkill}>
                {selectedDropdownSkill || "직무의 스킬을 선택해주세요"}
              </DropdownInput>
              <div style={{ backgroundColor: "#f1f1f1" }}>
                <AnimatePresence>
                  {isOpenDropdownSkill && (
                    <motion.div
                      className="dropdown-options"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        zIndex: 2,
                        position: "absolute",
                        width: "100%",
                        height: "150px",
                        overflowY: "auto",
                        top: "100%",
                        left: "0",
                        transition: "opacity 0.2s ease, transform 0.2s ease",
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        display: "flex",
                        flexDirection: "column",
                        borderTop: "none",
                        alignItems: "center",
                        borderBottomLeftRadius: "4px",
                        borderBottomRightRadius: "4px",
                        padding: "3px 0px",
                      }}
                    >
                      {dropdownOptionsSkill.map((option) => (
                        <motion.div
                          key={option.id}
                          onClick={() => handleOptionClickSkill(option)}
                          whileHover={{ backgroundColor: "#ccc" }}
                          style={{
                            borderTop: "1px solid #f1f1f1",
                            padding: "5px",
                            width: "100%",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                            cursor: "pointer",
                          }}
                        >
                          {option.name}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ContentComponent>
          <ContentComponent
            style={{
              position: "relative",
              margin: "34px 0px 0px 0px",
              // height: "auto",
              alignItems: "flex-start",
            }}
          ></ContentComponent>
          <LastSignUpPage>`거의 다 왔어요! 마지막이에요:)`</LastSignUpPage>
          <SignUpCompleteBtn onClick={onClickSignUp}>가입완료</SignUpCompleteBtn>
        </>
      )}
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

const DropdownInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 178px;
  height: 32px;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
  border: none;
  cursor: pointer;
`;

const UnSelectedGender = styled.button`
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
  border: none;
  margin: ${(props) => props.margin || "0px"};
`;

const SelectedGender = styled(UnSelectedGender)`
  background-color: #3461fd;
  color: #fff;
`;

const LastSignUpPage = styled.div`
  font-family: "Pretendard Variable";
  color: #2623d3;
  font-size: 14px;
  font-weight: 600;
  margin: 80px 0px 0px 0px;
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
