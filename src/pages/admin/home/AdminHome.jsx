/* eslint-disable no-unused-vars */
import styled from "styled-components";
import group1 from "assets/adminHome/group1.svg";
import group2 from "assets/adminHome/group2.svg";
import group3 from "assets/adminHome/group3.svg";

import { useState } from "react";
import Home from "components/adminHome/Home";
import Works from "components/adminHome/Works";
import Reviews from "components/adminHome/Reviews";

/* eslint-disable react/react-in-jsx-scope */
const AdminHome = () => {
  const [sector, setSector] = useState(0);

  return (
    <Container>
      <CompanyName>성수 JK 청소</CompanyName>
      <CompanyUnderText>성수2동 | 청소</CompanyUnderText>
      <CategoriesWrapper>
        <CategoryWrapper>
          <CategoryImg src={group1} />
          <CategoryName>광고</CategoryName>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryImg src={group1} />
          <CategoryName>게시글 작성</CategoryName>
        </CategoryWrapper>
        <CategoryWrapper>
          <CategoryImg src={group1} />
          <CategoryName>지원자 조회</CategoryName>
        </CategoryWrapper>
      </CategoriesWrapper>
      <SectorsWrapper>
        <EachSector selected={sector === 0} onClick={() => setSector(0)}>
          홈
        </EachSector>
        <EachSector selected={sector === 1} onClick={() => setSector(1)}>
          나의 게시글
        </EachSector>
        <EachSector selected={sector === 2} onClick={() => setSector(2)}>
          리뷰
        </EachSector>
      </SectorsWrapper>
      {sector === 0 && <Home />}
      {sector === 1 && <Works />}
      {sector === 2 && <Reviews />}
    </Container>
  );
};

export default AdminHome;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const CompanyName = styled.div`
  color: #000;
  align-self: flex-start;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 60% */
  margin: 41px 0px 0px 19px;
`;

const CompanyUnderText = styled.div`
  color: var(--Grey-primary, #646464);
  font-family: "Pretendard Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-self: flex-start;
  margin: 13px 0px 0px 19px;
`;

const CategoriesWrapper = styled.div`
  padding: 0px 45px;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 85px;
  margin: 16px 0px 0px 0px;
`;

const CategoryWrapper = styled.div`
  width: 43px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

const CategoryImg = styled.img`
  width: 43px;
  height: 43px;
  cursor: pointer;
`;
const CategoryName = styled.div`
  width: 60px;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SectorsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0px 0px 0px;
`;

const EachSector = styled.div`
  width: 130px;
  padding: 9px;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: ${(props) => (props.selected ? "2px solid #191717" : "2px solid #E4E1E1")};
  cursor: pointer;
`;
