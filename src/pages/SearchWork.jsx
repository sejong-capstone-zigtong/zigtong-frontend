import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { WorkList } from "../data/WorkData";
import { FilterList } from "../data/WorkData";
import Footer from "../components/common/Footer";
import arrowDown from "../assets/searchWork/ArrowDown.svg";
import bell from "../assets/searchWork/Bell.svg";
import xIcon from "../assets/searchWork/XGray.svg";
import TotalWorkListComponent from "../components/searchWork/TotalWorkListComponent";

const SearchWork = () => {
  //   const navigate = useNavigate();

  return (
    <SearchWorkTotalComponent>
      <HeaderComponent>
        <RegionText>서울</RegionText>
        <RegionDropDownArrow src={arrowDown} alt="v" />
        <BellAlert src={bell} alt="bell" />
      </HeaderComponent>
      <RegionsComponent>
        <EachRegion>
          <EachRegionText>서울 광진구</EachRegionText>
          <XIcon src={xIcon} alt="X" />
        </EachRegion>
        <EachRegion>
          <EachRegionText>서울 광진구</EachRegionText>
          <XIcon src={xIcon} alt="X" />
        </EachRegion>
      </RegionsComponent>
      <WorkListComponent>
        {WorkList.map((item) => {
          return <WorkListText key={item.value}>{item.label}</WorkListText>;
        })}
      </WorkListComponent>
      <FilterListComponent>
        {FilterList.map((item) => {
          if (item.label === "금구")
            return <FilterListText key={item.value}>⏰{item.label}</FilterListText>;
          else if (item.label === "장기가능")
            return <FilterListText key={item.value}>🤝{item.label}</FilterListText>;
          else if (item.label === "초보가능")
            return <FilterListText key={item.value}>🐥{item.label}</FilterListText>;
          else {
            return <FilterListText key={item.value}>{item.label}</FilterListText>;
          }
        })}
      </FilterListComponent>
      <TotalWorkListComponent />
      <Footer />
    </SearchWorkTotalComponent>
  );
};

export default SearchWork;

const SearchWorkTotalComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const HeaderComponent = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin: 27px 0px 0px 0px;
  padding: 0px 18px 0px 15px;
`;

const RegionText = styled.div`
  font-family: "Pretendard Variable";
  width: 35px;
  color: #1e1e1e;
  font-size: 18px;
  font-weight: 800;
`;

const RegionDropDownArrow = styled.img`
  width: 15px;
  height: 15px;
`;

const BellAlert = styled.img`
  position: absolute;
  right: 13px;
  width: 24px;
  height: 24px;
`;

const RegionsComponent = styled.div`
  align-self: flex-start;
  display: flex;
  margin: 8px 0px 0px 0px;
  height: 29px;
`;

const EachRegion = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 80px;
  height: 29px;
  margin: 0px 0px 0px 18px;
  background-color: #d9d9d9;
`;

const EachRegionText = styled.div`
  font-family: "Pretendard Variable";
  color: #767676;
  font-size: 10px;
  margin: 0px 0px 0px 11px;
`;

const XIcon = styled.img`
  position: absolute;
  right: 8px;
  width: 9px;
  height: 10px;
`;

const WorkListComponent = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin: 16px 0px 0px 12px;
`;

const WorkListText = styled.div`
  font-family: "Pretendard Variable";
  height: 26px;
  color: #888;
  font-size: 15px;
  font-weight: 600;
  margin: 0px 7.5px;
`;

const FilterListComponent = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin: 26px 0px 0px 2px;
`;

const FilterListText = styled.button`
  font-family: "Pretendard Variable";
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  padding: 10px;
  border-radius: 30px;
  border: 1px solid #b6b6b6;
  background-color: #fbfbfb;
  color: #000;
  font-size: 10px;
  font-weight: 400;
  margin: 0px 0px 0px 8px;
`;
