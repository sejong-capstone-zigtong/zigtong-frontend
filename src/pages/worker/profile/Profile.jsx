/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { userAccessTokenState } from "recoil/atoms";
import Footer from "components/common/Footer";
import {
  getCertificateCategoryApi,
  getCertificateInfoApi,
  getProfileImageApi,
  getSkillAll,
  getUserInfoApi,
  modiftSkillApi,
  putCertificateApi,
  putUserCareersApi,
  putUserIntroduceApi,
  updateProfileImageApi,
} from "apis/ProfileApis";
import experienceIcon from "assets/profile/ExperienceIcon.svg";
import user from "assets/profile/User.svg";
import pencil from "assets/profile/Pencil.svg";
import editProfile from "assets/profile/EditProfile.svg";
import oneOfFour from "assets/profile/OneOfFour.svg";
import twoOfFour from "assets/profile/TwoOfFour.svg";
import threeOfFour from "assets/profile/ThreeOfFour.svg";
import fourOfFour from "assets/profile/FourOfFour.svg";
import checkBlue from "assets/profile/CheckBlue.svg";
import plus from "assets/profile/Plus.svg";

// 유저 프로필 페이지
const Profile = () => {
  // 4단계 충족 여부 확인
  const [isIdVerification, setIsIdVerification] = useState(true);
  const [isProfileImg, setIsProfileImg] = useState(false);
  const [isSelfIntroduce, setIsSelfIntroduce] = useState(false);
  const [isHasSkill, setIsHasSkill] = useState(false);

  // 유저정보 저장
  const [userInfo, setUserInfo] = useState({
    birthdate: "",
    careers: [],
    certificates: [],
    content: "",
    gender: "",
    name: "손솬",
    phoneNumber: "",
    profileImageUrl: "",
    skills: [],
  });
  const [content, setContent] = useState(userInfo.content);
  const [career, setCareer] = useState({
    companyName: "",
    role: "",
    roleDetail: "",
    startDate: "",
    endDate: "",
  });
  const [certificates, setCertificates] = useState(userInfo.certificates);
  const [skills, setSkills] = useState(userInfo.skills);
  const [profileImageUrl, setProfileImageUrl] = useState(userInfo.profileImageUrl);
  const [profileImageFile, setProfileImageFile] = useState();

  // 리코일 받은 어세스토큰
  const accessToken = useRecoilValue(userAccessTokenState);

  // 유저 이력서 정보 받기
  const getUserInfo = useCallback(async () => {
    try {
      getUserInfoApi(accessToken).then((res) => {
        setUserInfo(res.data.data);
        console.log(res.data.data);
        setAge(calculateAge(res.data.data.birthdate));
        if (res.data.data.profileImageUrl != "") setIsProfileImg(true);
        if (res.data.data.content !== null && res.data.data.content !== "")
          setIsSelfIntroduce(true);
        if (res.data.data.skills.length !== 0) setIsHasSkill(true);
        setContent(res.data.data.content);
        setCertificates(res.data.data.certificates);
        setSkills(res.data.data.skills);
        if (res.data.data.certificates.length > 0) {
          res.data.data.certificates.map((item) =>
            getCertificateInfoApi(accessToken, item.name).then((res) => {
              console.log(res.data.data);
              if (res.data.data[0]) {
                toggleCertificateId(res.data.data[0]);
              }
            }),
          );
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  // YYYY-MM-DD형식의 생년월일을 만 나이로 변환
  const [age, setAge] = useState(null);
  const calculateAge = (birthDateString) => {
    if (!birthDateString) {
      console.error("No birth date provided or birth date is undefined");
      return NaN; // 제공된 날짜가 없거나 undefined인 경우 NaN 반환
    }

    // 'yyyy-mm-dd' 형식을 분해하여 연, 월, 일을 구함
    const parts = birthDateString.split("-");
    if (parts.length !== 3) {
      console.error("Invalid date format:", birthDateString);
      return NaN; // 날짜 형식이 잘못된 경우 NaN 반환
    }
    const [year, month, day] = parts.map((num) => parseInt(num, 10));
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    // 만약 생일이 아직 오지 않았다면 1을 빼서 만나이를 계산
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // 한줄 자기소개
  const [isOpenIntroduceModal, setIsOpenIntroduceModal] = useState(false);
  const onChangeIntroduce = (e) => {
    setContent(e.target.value);
  };

  // 한줄 자기소개 수정
  const putUserIntroduce = async () => {
    try {
      await putUserIntroduceApi(accessToken, content).then((res) => {
        if (res.data.status === 200) {
          setUserInfo({
            ...userInfo,
            content: content,
          });
          setIsOpenIntroduceModal(false);
          window.location.reload();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  // 경력 및 경험
  const [isOpenCareersModal, setIsOpenCareersModal] = useState(false);
  const onChangeCareer = (e) => {
    const { value, name } = e.target;
    setCareer({
      ...career,
      [name]: value,
    });
  };
  // 생년월일 형식 맞는지 확인
  const isValidDate = (dateString) => {
    // 정규 표현식을 이용하여 YYYY-MM-DD 형식인지 확인
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  };
  // 경력 수정
  const putCareer = async () => {
    try {
      if (!isValidDate(career.startDate || !isValidDate(career.endDate))) {
        alert("날짜를 올바른 형식으로 입력해주세요.");
      } else {
        await putUserCareersApi(accessToken, [...userInfo.careers, career]).then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            setUserInfo({
              ...userInfo,
              careers: [...userInfo.careers, career],
            });
            setCareer({
              companyName: "",
              role: "",
              roleDetail: "",
              startDate: "",
              endDate: "",
            });
            setIsOpenCareersModal(false);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 선택한 자격증 정보 저장
  const [isOpenCertificatesModal, setIsOpenCertificatesModal] = useState(false);
  const [certificateNameList, setCertificateNameList] = useState({});
  const [certificateIds, setCertificateIds] = useState([]);
  const [certificateNames, setCertificateNames] = useState([]);

  const toggleCertificateId = (item) => {
    setCertificateIds((currentIds) => {
      // 배열에 ID가 이미 있는지 확인
      if (currentIds.includes(item.id)) {
        // ID가 있으면 제거
        return currentIds.filter((certificateId) => certificateId !== item.id);
      } else {
        // ID가 없으면 추가
        return [...currentIds, item.id];
      }
    });
    setCertificateNames((currentNames) => {
      // 배열에 ID가 이미 있는지 확인
      if (currentNames.includes(item.affiliation)) {
        // ID가 있으면 제거
        return currentNames.filter((certificateName) => certificateName !== item.affiliation);
      } else {
        // ID가 없으면 추가
        return [...currentNames, item.affiliation];
      }
    });
  };
  const getCertificateCategory = async () => {
    try {
      await getCertificateCategoryApi(accessToken).then((res) => {
        console.log(res.data.data);
        setCertificateNameList(res.data.data.affiliations);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // 자격증 선택 시
  const onClickCertificateItem = (item) => {
    getCertificateInfoApi(accessToken, item).then((res) => {
      console.log(res.data);
      console.log(res.data.data[0]);
      toggleCertificateId(res.data.data[0]);
    });
  };

  // 자격증 수정하기 버튼 누를시
  const certificateModify = async () => {
    try {
      await putCertificateApi(accessToken, certificateIds).then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          setIsOpenCertificatesModal(false);
          window.location.reload();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCertificateCategory();
    getProfileImage();
  }, []);

  const getProfileImage = useCallback(async () => {
    try {
      await getProfileImageApi(accessToken).then((res) => {
        setUserInfo({
          ...userInfo,
          profileImageUrl: res.data.data.uploadedUrl,
        });
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // 이미지 파일 선택 핸들러
  const handleImageChange = (e) => {
    let file = e.target.files && e.target.files[0];
    if (file) {
      setProfileImageUrl(URL.createObjectURL(file)); // 미리보기를 위해 파일 URL 저장
      setProfileImageFile(file);
    }
    updateProfileImageApi(accessToken, file).then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        setUserInfo({
          ...userInfo,
          profileImageUrl: URL.createObjectURL(file),
        });
        window.location.reload();
      }
    });
  };

  // 선택한 스킬 정보 저장
  const [isOpenSkillsModal, setIsOpenSkillsModal] = useState(false);
  const [skillNameList, setSkillNameList] = useState({});
  const [skillIds, setSkillIds] = useState([]);
  const [skillNames, setSkillNames] = useState([]);

  const toggleSkillId = (item) => {
    setSkillIds((currentIds) => {
      // 배열에 ID가 이미 있는지 확인
      if (currentIds.includes(item.id)) {
        // ID가 있으면 제거
        return currentIds.filter((certificateId) => certificateId !== item.id);
      } else {
        // ID가 없으면 추가
        return [...currentIds, item.id];
      }
    });
    setSkillNames((currentNames) => {
      // 배열에 ID가 이미 있는지 확인
      if (currentNames.includes(item.name)) {
        // ID가 있으면 제거
        return currentNames.filter((certificateName) => certificateName !== item.name);
      } else {
        // ID가 없으면 추가
        return [...currentNames, item.name];
      }
    });
  };
  const getSkills = async () => {
    try {
      await getSkillAll().then((res) => {
        console.log(res);
        setSkillNameList(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // 자격증 선택 시
  const onClickSkillItem = (item) => {
    toggleSkillId(item);
  };

  // 자격증 수정하기 버튼 누를시
  const skillModify = async () => {
    try {
      await modiftSkillApi(accessToken, skillIds).then((res) => {
        console.log(res);
        setIsOpenSkillsModal(false);
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <ProfileTotalComponent>
      <ProfileHeader>프로필</ProfileHeader>
      <ProfileInfo>
        <ProfileInfoImgContainer>
          {userInfo.profileImageUrl !== null && userInfo.profileImageUrl !== "" ? (
            <ProfileInfoImg src={userInfo.profileImageUrl} />
          ) : (
            <ProfileInfoImg src={user} />
          )}
          <EditProfileInfoWrapper>
            <label htmlFor="file">
              <EditProfileInfoImg src={editProfile} />
            </label>
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </EditProfileInfoWrapper>
        </ProfileInfoImgContainer>
        <ProfileOtherInfoContainer>
          <ProfileOtherInfoContainerText>{userInfo.name}</ProfileOtherInfoContainerText>
          <ProfileOtherInfoContainerText fontSize="14px" fontWeight="600">
            만 {age}세 | {userInfo.gender === "MALE" ? "남" : "여"}
          </ProfileOtherInfoContainerText>
        </ProfileOtherInfoContainer>
      </ProfileInfo>
      <ProfileCompletePercentComponent>
        {/* 완성도 그래프 */}
        <ProfileCompletePercentText>프로필 완성도</ProfileCompletePercentText>
        {[isIdVerification, isProfileImg, isSelfIntroduce, isHasSkill].filter(Boolean).length ===
        4 ? (
          <ProfileCompleteGraph src={fourOfFour} alt="g" />
        ) : [isIdVerification, isProfileImg, isSelfIntroduce, isHasSkill].filter(Boolean).length ===
          3 ? (
          <ProfileCompleteGraph src={threeOfFour} alt="g" />
        ) : [isIdVerification, isProfileImg, isSelfIntroduce, isHasSkill].filter(Boolean).length ===
          2 ? (
          <ProfileCompleteGraph src={twoOfFour} alt="g" />
        ) : (
          <ProfileCompleteGraph src={oneOfFour} alt="g" />
        )}
        <ProfileUnderGraphText>
          아래 4가지 항목이 모두 채워져야 일자리에 지원이 가능합니다
        </ProfileUnderGraphText>
        <ProfileGraphItemsWrapper>
          <ProfileGraphItemWrapper>
            {isIdVerification ? (
              <ProfileGraphItemCheckIcon src={checkBlue} />
            ) : (
              <ProfileGraphItemIcon src={plus} />
            )}
            {isIdVerification ? (
              <ProfileGraphItemText color="#006FFD">본인 인증</ProfileGraphItemText>
            ) : (
              <ProfileGraphItemText color="#A6A6A6">본인 인증</ProfileGraphItemText>
            )}
          </ProfileGraphItemWrapper>
          <ProfileGraphItemWrapper>
            {isProfileImg ? (
              <ProfileGraphItemCheckIcon src={checkBlue} />
            ) : (
              <ProfileGraphItemIcon src={plus} />
            )}
            {isProfileImg ? (
              <ProfileGraphItemText color="#006FFD">프로필 사진 등록</ProfileGraphItemText>
            ) : (
              <ProfileGraphItemText color="#A6A6A6">프로필 사진 등록</ProfileGraphItemText>
            )}
          </ProfileGraphItemWrapper>
          <ProfileGraphItemWrapper>
            {isSelfIntroduce ? (
              <ProfileGraphItemCheckIcon src={checkBlue} />
            ) : (
              <ProfileGraphItemIcon src={plus} />
            )}
            {isSelfIntroduce ? (
              <ProfileGraphItemText color="#006FFD">한줄 자기소개 등록</ProfileGraphItemText>
            ) : (
              <ProfileGraphItemText color="#A6A6A6">한줄 자기소개 등록</ProfileGraphItemText>
            )}
          </ProfileGraphItemWrapper>
          <ProfileGraphItemWrapper>
            {isHasSkill ? (
              <ProfileGraphItemCheckIcon src={checkBlue} />
            ) : (
              <ProfileGraphItemIcon src={plus} />
            )}
            {isHasSkill ? (
              <ProfileGraphItemText color="#006FFD">업무스킬 등록</ProfileGraphItemText>
            ) : (
              <ProfileGraphItemText color="#A6A6A6">업무스킬 등록</ProfileGraphItemText>
            )}
          </ProfileGraphItemWrapper>
        </ProfileGraphItemsWrapper>
      </ProfileCompletePercentComponent>

      {/* 자기소개 */}
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>한줄 자기소개</ProfileEachHeaderTopic>
          <PencilIcon
            onClick={() => {
              setIsOpenIntroduceModal(!isOpenIntroduceModal);
            }}
            src={pencil}
            alt="pencil"
          />
        </ProfileEachHeaderContainer>
        {userInfo.content === null ? (
          <ProfileEachContentPlaceholder>
            나에 대해 한줄로 소개해주세요
          </ProfileEachContentPlaceholder>
        ) : (
          <ProfileEachContentPlaceholder>{userInfo.content}</ProfileEachContentPlaceholder>
        )}
      </ProfileEachContainer>
      <TenPixelBar />

      {/* 보유 스킬 */}
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>스킬</ProfileEachHeaderTopic>
          <ProfileEachHeaderPriority>적합한 스킬 보유자 우선배정</ProfileEachHeaderPriority>
          <PencilIcon
            onClick={() => {
              setIsOpenSkillsModal(!isOpenSkillsModal);
            }}
            src={pencil}
            alt="pencil"
          />
        </ProfileEachHeaderContainer>
        {userInfo.skills && userInfo.skills.length === 0 ? (
          <ProfileEachContentPlaceholder>등록된 스킬이 없습니다</ProfileEachContentPlaceholder>
        ) : (
          <ProfileEachContentPlaceholder>
            {userInfo.skills &&
              userInfo.skills.map((item) => {
                return <EachContentAnswer key={item.name}>{item.name}</EachContentAnswer>;
              })}
          </ProfileEachContentPlaceholder>
        )}
      </ProfileEachContainer>
      <TenPixelBar />

      {/* 경력 및 경험 */}
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>경력 및 경험</ProfileEachHeaderTopic>
          <ProfileEachHeaderPriority>유사업종 경력자 우선배정</ProfileEachHeaderPriority>
          <PencilIcon
            onClick={() => setIsOpenCareersModal(!isOpenCareersModal)}
            src={pencil}
            alt="pencil"
          />
        </ProfileEachHeaderContainer>
        {Array.isArray(userInfo.careers) ? (
          userInfo.careers.map((career, index) => {
            return (
              <JobExperienceWapper key={career.companyName || index}>
                <JobExperienceHeader>
                  <JobExperienceIcon src={experienceIcon} />
                  <JobExperienceText
                    margin="0px 0px 0px 9px"
                    color="#006FFD"
                    fontWeight="500"
                    fontSize="12px"
                  >
                    {career.companyName}
                  </JobExperienceText>
                  <JobExperienceDate>
                    <JobExperienceText
                      margin="0px"
                      color="#A6A6A6"
                      fontWeight="500"
                      fontSize="11px"
                    >
                      {career.startDate} ~ {career.endDate}
                    </JobExperienceText>
                  </JobExperienceDate>
                </JobExperienceHeader>
                <JobExperienceText
                  margin="2px 0px 0px 43.5px"
                  color="#000"
                  fontWeight="700"
                  fontSize="12px"
                >
                  {career.role}
                </JobExperienceText>
                <JobExperienceText
                  margin="4px 0px 0px 43.5px"
                  color="#A6A6A6"
                  fontWeight="500"
                  fontSize="11px"
                >
                  {career.roleDetail}
                </JobExperienceText>
              </JobExperienceWapper>
            );
          })
        ) : (
          <ProfileEachContentPlaceholder>
            나의 근무이력에 대해 알려주세요
          </ProfileEachContentPlaceholder>
        )}
      </ProfileEachContainer>
      <TenPixelBar />

      {/* 자격증 정보 */}
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>자격증</ProfileEachHeaderTopic>
          <ProfileEachHeaderPriority>관련 자격증 보유자 우선배정</ProfileEachHeaderPriority>
          <PencilIcon
            onClick={() => {
              setIsOpenCertificatesModal(!isOpenCertificatesModal);
            }}
            src={pencil}
            alt="pencil"
          />
        </ProfileEachHeaderContainer>
        {userInfo.certificates && userInfo.certificates.length === 0 ? (
          <ProfileEachContentPlaceholder>
            보건증, 기초안정보건교육 이수증, 조리사자격증 등
          </ProfileEachContentPlaceholder>
        ) : (
          <ProfileEachContentPlaceholder>
            {userInfo.certificates &&
              userInfo.certificates.map((item) => {
                return <EachContentAnswer key={item.name}>{item.name}</EachContentAnswer>;
              })}
          </ProfileEachContentPlaceholder>
        )}
      </ProfileEachContainer>
      <TenPixelBar />

      {/* 리뷰 */}
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>리뷰</ProfileEachHeaderTopic>
        </ProfileEachHeaderContainer>
        <ProfileEachContentPlaceholder>
          추천 및 리뷰가 많을수록 근무배정에 유리해요
        </ProfileEachContentPlaceholder>
      </ProfileEachContainer>
      <TenPixelBar />

      {/* 계좌번호 */}
      <ProfileEachContainer>
        <ProfileEachHeaderContainer>
          <ProfileEachHeaderTopic>임금 계좌</ProfileEachHeaderTopic>
          {/* <PencilIcon src={pencil} alt="pencil" /> */}
        </ProfileEachHeaderContainer>
        <ProfileEachContentPlaceholder>
          급여를 입금받을 계좌를 등록해주세요
        </ProfileEachContentPlaceholder>
      </ProfileEachContainer>
      <Footer />
      {/* 자기소개 수정 모달창 */}
      {isOpenIntroduceModal && (
        <AnimatePresence>
          {/* 뒷배경을 클릭하면 모달을 나갈 수 있게 해야하므로 뒷 배경 onClick에 state함수를 넣는다. */}
          <SearchModalBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpenIntroduceModal(false)}
          >
            <SearchModalContent
              width="320px"
              height="220px"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <ModalHeader>한줄 자기소개 수정</ModalHeader>
              <ModalInput
                value={content}
                onChange={onChangeIntroduce}
                margin="30px 0px 0px 0px"
                type="text"
                placeholder={userInfo.content}
              />
              <ModalBtn onClick={putUserIntroduce}>수정</ModalBtn>
            </SearchModalContent>
          </SearchModalBox>
        </AnimatePresence>
      )}
      {/* 경력 및 경험 추가 모달창 */}
      {isOpenCareersModal && (
        <AnimatePresence>
          {/* 뒷배경을 클릭하면 모달을 나갈 수 있게 해야하므로 뒷 배경 onClick에 state함수를 넣는다. */}
          <SearchModalBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpenCareersModal(false)}
          >
            <SearchModalContent
              width="320px"
              height="337px"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <ModalHeader>경력 추가</ModalHeader>
              <ModalInput
                value={career.companyName}
                onChange={onChangeCareer}
                margin="30px 0px 0px 0px"
                type="text"
                name="companyName"
                placeholder="회사명을 입력해주세요"
              />
              <ModalInput
                value={career.role}
                onChange={onChangeCareer}
                margin="10px 0px 0px 0px"
                type="text"
                name="role"
                placeholder="직무를 입력해주세요(ex. 매장관리)"
              />
              <ModalInput
                value={career.roleDetail}
                onChange={onChangeCareer}
                margin="10px 0px 0px 0px"
                type="text"
                name="roleDetail"
                placeholder="직무 상세정보를 입력해주세요"
              />
              <FlexInputWrapper>
                <ModalInput
                  style={{ width: "120px", padding: "7px" }}
                  value={career.startDate}
                  onChange={onChangeCareer}
                  margin="15px 0px 0px 0px"
                  type="text"
                  name="startDate"
                  placeholder="시작일(YYYY-MM-DD)"
                />
                <GapModalInput>~</GapModalInput>
                <ModalInput
                  style={{ width: "120px", padding: "7px" }}
                  value={career.endDate}
                  onChange={onChangeCareer}
                  margin="15px 0px 0px 0px"
                  type="text"
                  name="endDate"
                  placeholder="종료일(YYYY-MM-DD)"
                />
              </FlexInputWrapper>
              <ModalBtn onClick={putCareer}>추가</ModalBtn>
            </SearchModalContent>
          </SearchModalBox>
        </AnimatePresence>
      )}
      {/* 자격증 선택 모달창 */}
      {isOpenCertificatesModal && (
        <AnimatePresence>
          {/* 뒷배경을 클릭하면 모달을 나갈 수 있게 해야하므로 뒷 배경 onClick에 state함수를 넣는다. */}
          <SearchModalBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpenCertificatesModal(false)}
          >
            <SearchModalContent
              width="320px"
              height="380px"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <ModalHeader>자격증 수정</ModalHeader>
              <ProfileEachContentPlaceholder style={{ height: "220px", overflowY: "auto" }}>
                {certificateNameList &&
                  certificateNameList.map((item, index) => {
                    if (certificateNames.includes(item)) {
                      return (
                        <EachContentAnswer
                          style={{ cursor: "pointer", backgroundColor: "#006FFD", color: "white" }}
                          key={index}
                          onClick={() => onClickCertificateItem(item)}
                        >
                          {item}
                        </EachContentAnswer>
                      );
                    } else {
                      return (
                        <EachContentAnswer
                          onClick={() => onClickCertificateItem(item)}
                          style={{ cursor: "pointer" }}
                          key={index}
                        >
                          {item}
                        </EachContentAnswer>
                      );
                    }
                  })}
              </ProfileEachContentPlaceholder>

              <ModalBtn onClick={certificateModify}>수정</ModalBtn>
            </SearchModalContent>
          </SearchModalBox>
        </AnimatePresence>
      )}
      {/* 자격증 선택 모달창 */}
      {isOpenSkillsModal && (
        <AnimatePresence>
          {/* 뒷배경을 클릭하면 모달을 나갈 수 있게 해야하므로 뒷 배경 onClick에 state함수를 넣는다. */}
          <SearchModalBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpenSkillsModal(false)}
          >
            <SearchModalContent
              width="320px"
              height="380px"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <ModalHeader>스킬 수정</ModalHeader>
              <ProfileEachContentPlaceholder style={{ height: "220px", overflowY: "auto" }}>
                {skillNameList &&
                  skillNameList.map((item, index) => {
                    if (skillNames.includes(item.name)) {
                      return (
                        <EachContentAnswer
                          style={{ cursor: "pointer", backgroundColor: "#006FFD", color: "white" }}
                          key={index}
                          onClick={() => onClickSkillItem(item)}
                        >
                          {item.name}
                        </EachContentAnswer>
                      );
                    } else {
                      return (
                        <EachContentAnswer
                          onClick={() => onClickSkillItem(item)}
                          style={{ cursor: "pointer" }}
                          key={index}
                        >
                          {item.name}
                        </EachContentAnswer>
                      );
                    }
                  })}
              </ProfileEachContentPlaceholder>

              <ModalBtn onClick={skillModify}>수정</ModalBtn>
            </SearchModalContent>
          </SearchModalBox>
        </AnimatePresence>
      )}
    </ProfileTotalComponent>
  );
};

export default Profile;

const ProfileTotalComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 0px 0px 100px 0px;
`;

const ProfileHeader = styled.div`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  align-self: flex-start;
  font-size: 18px;
  font-weight: 800;
  margin: 20px 0px 0px 14px;
`;

const ProfileInfo = styled.div`
  margin: 32px 0px 0px 0px;
  display: flex;
  height: 65px;
  width: 100%;
`;

const ProfileInfoImgContainer = styled.div`
  position: relative;
  display: flex;
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
  border-radius: 1300px;
  border: 3.25px solid #eceff1;
  background-color: #e3f2fd;
  margin: 0px 0px 0px 14px;
`;

const ProfileInfoImg = styled.img`
  width: 39px;
  height: 39px;
`;

const EditProfileInfoWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -4px;
  bottom: -4px;
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  background-color: #eceff1;
  stroke-width: 0.287px;
  border: 1px solid #000;
  border-radius: 50%;
  cursor: pointer;
`;

const EditProfileInfoImg = styled.img`
  display: flex;
  width: 13.8px;
  height: 13.8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const ProfileOtherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: 0px 0px 0px 17px;
`;

const ProfileOtherInfoContainerText = styled.div`
  color: #1e1e1e;
  font-family: "Pretendard Variable";
  font-size: ${(props) => props.fontSize || "16px"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "800"};
  line-height: 18px;
`;

const ProfileCompletePercentComponent = styled.div`
  width: 359px;
  height: 307px;
  margin: 32px 0px 0px 0px;
`;

const ProfileCompletePercentText = styled.div`
  color: #1e1e1e;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

const ProfileCompleteGraph = styled.img`
  width: 355px;
  height: 10px;
  margin: 32px 0px 0px 0px;
`;

const ProfileUnderGraphText = styled.div`
  color: var(--Grey-text, #a6a6a6);
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin: 20px 0px 0px 0px;
`;

const ProfileGraphItemsWrapper = styled.div`
  display: flex;
  width: 355px;
  padding: 10px 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  border-radius: 12px;
  border: 1px solid #000;
  margin: 20px 0px 0px 0px;
`;

const ProfileGraphItemWrapper = styled.div`
  display: flex;
  padding: 3px 0px;
  height: 38px;
  align-items: center;
  gap: 9px;
`;
const ProfileGraphItemCheckIcon = styled.img`
  width: 24px;
  height: 20px;
`;

const ProfileGraphItemIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ProfileGraphItemText = styled.div`
  color: ${(props) => props.color};
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

const ProfileEachContainer = styled.div`
  width: 359px;
  min-height: 156px;
  padding: 44px 0px 34px 0px;
`;

const ProfileEachHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ProfileEachHeaderTopic = styled.div`
  font-family: "Pretendard Variable";
  color: #1e1e1e;
  font-size: 18px;
  font-weight: 600;
`;

const ProfileEachHeaderPriority = styled.div`
  font-family: "Pretendard Variable";
  position: absolute;
  right: 34px;
  color: #a6a6a6;
  font-size: 14px;
  font-weight: 500;
`;

const PencilIcon = styled.img`
  position: absolute;
  right: 0px;
  width: 24px;
  height: 24px;
`;

const ProfileEachContentPlaceholder = styled.div`
  font-family: "Pretendard Variable";
  color: #a6a6a6;
  font-size: 14px;
  font-weight: 500;
  margin: 29px 0px 0px 0px;
`;

const EachContentAnswer = styled.div`
  display: inline-flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 7px 4px;
  border-radius: 13px;
  background: var(--grey-secondary, #f0f0f0);
  color: var(--Grey-primary, #646464);
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const TenPixelBar = styled.div`
  width: 390px;
  height: 10px;
  background-color: #e0e0e0;
`;

const JobExperienceWapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0px 0px 0px;
`;

const JobExperienceHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const JobExperienceDate = styled.div`
  position: absolute;
  right: 13.5px;
`;

const JobExperienceIcon = styled.img`
  width: var(--Spacing-SM, 32px);
  height: var(--Spacing-SM, 32px);
`;

const JobExperienceText = styled.div`
  color: ${(props) => props.color};
  font-family: "Pretendard Variable";
  font-size: ${(props) => props.fontSize};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  line-height: 18px;
  margin: ${(props) => props.margin || "0px"};
`;

const SelfCertification = styled.div`
  font-family: "Pretendard Variable";
  display: flex;
  width: 356px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #006ffd;
  color: #304ffe;
  font-size: 14px;
  font-weight: 600;
  margin: 18px 0px 0px;
`;

// 모달 창 뒷배경
const SearchModalBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
`;

// 모달 스타일
const SearchModalContent = styled(motion.div)`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 24px 20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-shrink: 0;
  border-radius: 12px;
  background: #fff;
  z-index: 5;
`;

const ModalHeader = styled.div`
  color: #1e1e1e;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

const ModalInput = styled.input`
  margin: 11px 0px 0px 0px;
  height: 30px;
  padding: 18px 24px;
  border-radius: 10px;
  background-color: #f5f9fe;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);

  color: #000;
  font-weight: 400;
  border: none;
  outline: none;
  margin: ${(props) => props.margin || "0px"};
  &::placeholder {
    color: #7c8ba0;
  }
`;

const GapModalInput = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
`;

const FlexInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBtn = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  width: 280px;
  height: 45px;
  padding: 18px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 14px;
  background: var(--petit-blue, #3461fd);
  color: var(--Gray-White, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
