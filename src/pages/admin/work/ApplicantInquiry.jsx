/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import applicantTestImage from "assets/adminWork/applicantTest.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { adminInfoState } from "recoil/atoms";
import { useEffect, useState } from "react";
import { GetApplicantsApi } from "apis/AdminApis";

const ApplicantInquiry = () => {
  const navigate = useNavigate();
  const id = useParams().postId;
  const [adminInfo, setAdminInfo] = useRecoilState(adminInfoState);

  const [applicants, setApplicants] = useState([]);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    const dayDifference = today.getDate() - birth.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    return age;
  };

  const getApplicants = async () => {
    try {
      await GetApplicantsApi(adminInfo.accessToken, id).then((res) => {
        setApplicants(res.data);
        console.log(res.data);
        // setApplicants([
        //   {
        //     id: 0,
        //     applicationStatus: "DEFAULT",
        //     workerDto: {
        //       id: "id1",
        //       name: "name1",
        //       birthdate: "1998-05-21",
        //       nickname: "nickname1",
        //       gender: "MALE",
        //       uploadRul: "string1",
        //     },
        //   },
        //   {
        //     id: 1,
        //     applicationStatus: "DEFAULT",
        //     workerDto: {
        //       id: "id2",
        //       name: "name2",
        //       birthdate: "1997-05-22",
        //       nickname: "nickname2",
        //       gender: "FEMALE",
        //       uploadRul: "string2",
        //     },
        //   },
        //   {
        //     id: 2,
        //     applicationStatus: "DEFAULT",
        //     workerDto: {
        //       id: "id3",
        //       name: "name3",
        //       birthdate: "1977-05-23",
        //       nickname: "nickname3",
        //       gender: "MALE",
        //       uploadRul: "string3",
        //     },
        //   },
        // ]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getApplicants();
  }, []);

  return (
    <Container>
      <Header>전체 지원자 조회</Header>
      {applicants.length > 0 &&
        applicants.map((user) => {
          return (
            <EachApplicantWrapper key={user.id}>
              <EachApplicantImage src={user.workerDto.uploadUrl} />
              <EachApplicantInfoWrapper>
                <EachApplicantInfoText>{user.workerDto.nickname}</EachApplicantInfoText>
                <EachApplicantInfoSecondLine>
                  <EachApplicantInfoText>{user.workerDto.name}</EachApplicantInfoText>
                  <EachApplicantInfoText style={{ margin: "0px 5px" }}> / </EachApplicantInfoText>
                  <EachApplicantInfoText>
                    {" "}
                    만 {calculateAge(user.workerDto.birthdate)}세{" "}
                  </EachApplicantInfoText>
                  <EachApplicantInfoText style={{ margin: "0px 5px" }}> / </EachApplicantInfoText>
                  <EachApplicantInfoText>
                    {" "}
                    {user.workerDto.gender === "MALE" ? "남성" : "여성"}{" "}
                  </EachApplicantInfoText>
                </EachApplicantInfoSecondLine>
              </EachApplicantInfoWrapper>
              <EachApplicantInfoBtn
                onClick={() => {
                  navigate(`/admin/works/${id}/profile`, {
                    state: {
                      workerId: user.workerDto.id,
                      workerApplicationId: user.id,
                    },
                  });
                }}
              >
                상세
              </EachApplicantInfoBtn>
            </EachApplicantWrapper>
          );
        })}
    </Container>
  );
};

export default ApplicantInquiry;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Header = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 30px 0px 23px 0px;
`;

const EachApplicantWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 355px;
  height: 91px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #989898;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 16px 0px 0px 0px;
`;

const EachApplicantImage = styled.img`
  width: 80px;
  height: 74px;
  flex-shrink: 0;
  border-radius: 80px;
  margin: 0px 0px 0px 6px;
`;

const EachApplicantInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 17px;
`;

const EachApplicantInfoText = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const EachApplicantInfoSecondLine = styled.div`
  display: flex;
  align-items: center;
`;

const EachApplicantInfoBtn = styled.button`
  display: flex;
  width: 80px;
  height: 38px;
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
  border: none;
  margin: 0px 0px 0px 25px;
`;
