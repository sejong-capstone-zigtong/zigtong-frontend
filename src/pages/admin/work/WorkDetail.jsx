/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import Back from "assets/adminWork/Detail.png";
import profile from "assets/adminWork/profile.png";
import pencil from "assets/adminWork/Pencil.svg";
import calculator from "assets/adminWork/calculator.svg";
import applicant from "assets/adminWork/applicant.svg";
import calendar from "assets/adminWork/calendar.svg";
import clock from "assets/adminWork/clock.svg";
import addressImg from "assets/adminWork/AddressDetail.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GetPostInfoApi } from "apis/AdminApis";
import { useRecoilState } from "recoil";
import { adminInfoState } from "recoil/atoms";
import { useEffect, useState } from "react";

const WorkDetail = () => {
  const navigate = useNavigate();
  const id = useParams().postId;
  console.log(id);

  const [adminInfo, setAdminInfo] = useRecoilState(adminInfoState);

  const [postInfo, setPostInfo] = useState({});

  const getPostInfo = async () => {
    try {
      await GetPostInfoApi(adminInfo.accessToken, id).then((res) => {
        console.log(res);
        setPostInfo(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPostInfo();
  }, []);

  return (
    <Container>
      <Background src={Back} />
      <HeaderWork>
        <HeaderProfile src={profile} />
        <HeaderContentWrapper>
          <HeaderContentTopText>{postInfo.title}</HeaderContentTopText>
          <HeaderContentContentText>{postInfo.category}</HeaderContentContentText>
          <HeaderContentPencil src={pencil} />
        </HeaderContentWrapper>
        <IconWrapper onClick={() => navigate(`/admin/works/${id}/settlementStatus`)}>
          <Icon src={calculator} />
          <IconText>대금 지급 조회</IconText>
        </IconWrapper>
        <IconWrapper
          onClick={() => navigate(`/admin/works/${id}/applicants`)}
          style={{ margin: "16px 0px 0px 12px" }}
        >
          <Icon src={applicant} />
          <IconText>지원자 조회</IconText>
        </IconWrapper>
      </HeaderWork>
      <Line />
      <Content>{postInfo.content}</Content>
      <DateWrapper>
        <EachDate>
          <DateIcon src={calendar} />
          <DateText>{postInfo.startTime && postInfo.startTime.substring(0, 10)}</DateText>
        </EachDate>
        <UpperBar />
        <EachDate>
          <DateIcon src={clock} />
          <DateText>
            {postInfo.startTime && postInfo.startTime.substring(11, 16)} ~{" "}
            {postInfo.startTime && postInfo.endTime.substring(11, 16)}
          </DateText>
        </EachDate>
      </DateWrapper>
      <Wage>
        {" "}
        {postInfo.wageType === "MONTH"
          ? "월급"
          : postInfo.wageType === "DAY"
          ? "일급"
          : "건당"}{" "}
        {postInfo.wage}원
      </Wage>
      <Address>근무지 위치</Address>
      <AddressWrapper src={addressImg} />
      <BtnWrapper>
        <Btn backgroundColor="#FA2E2E">지원 마감</Btn>
        <Btn backgroundColor="#006FFD">지원 활성화</Btn>
      </BtnWrapper>
    </Container>
  );
};

export default WorkDetail;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Background = styled.img`
  width: 390px;
  height: 399px;
  flex-shrink: 0;
`;

const HeaderWork = styled.div`
  display: flex;
  align-items: center;
  margin: 17px 0px 0px 0px;
`;

const HeaderProfile = styled.img`
  width: 80px;
  height: 76px;
  flex-shrink: 0;
  border-radius: 5px;
`;

const HeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 150px;
`;

const HeaderContentTopText = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  margin: 10px 0px 0px 9px;
`;

const HeaderContentContentText = styled.div`
  color: var(--Grey-primary, #646464);
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 8px 0px 0px 9px;
`;

const HeaderContentPencil = styled.img`
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  margin: 8px 0px 0px 9px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 64px;
  margin: 16px 0px 0px 0px;
`;

const Icon = styled.img`
  width: 43px;
  height: 43px;
  flex-shrink: 0;
`;

const IconText = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 7px 0px 0px 0px;
`;

const Line = styled.div`
  width: 390px;
  height: 2px;
  flex-shrink: 0;
  background: #e4e1e1;
  margin: 11px 0px 0px 0px;
`;

const Content = styled.div`
  margin: 5px 0px 0px 0px;
  display: flex;
  height: 42px;
  width: 220px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const DateWrapper = styled.div`
  width: 234px;
  height: 33px;
  flex-shrink: 0;
  background-color: rgba(188, 188, 188, 0.3);
  margin: 9px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EachDate = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const DateIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const DateText = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const UpperBar = styled.div`
  width: 10px;
  height: 1px;
  transform: rotate(90deg);
  background-color: rgba(53, 53, 53, 0.6);
  margin: 0px 20px;
`;

const TotalWage = styled.div`
  color: #696969;
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 15px 0px 0px 0px;
`;

const Wage = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 15px 0px 0px 0px;
`;

const Address = styled.div`
  display: flex;
  width: 144px;
  height: 16px;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  flex-shrink: 0;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 10px 0px 0px 21px;
`;

const AddressWrapper = styled.img`
  width: 347px;
  height: 149px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  margin: 14px 0px 0px 0px;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 51px 0px 30px 0px;
`;

const Btn = styled.div`
  display: flex;
  width: 160px;
  height: 38px;
  padding: 18px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 8px;
  color: var(--Gray-White, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  margin: 0px 15px;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
`;
