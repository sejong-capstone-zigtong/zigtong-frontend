/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import TotalWorkListComponent from "components/searchWork/TotalWorkListComponent";
import { WorkList } from "data/WorkData";
import { FilterList } from "data/WorkData";
import Footer from "components/common/Footer";
import arrowDown from "assets/searchWork/ArrowDown.svg";
import bell from "assets/searchWork/Bell.svg";
import xIcon from "assets/searchWork/XGray.svg";
import { getWorkListApi } from "apis/WorkApi";
import { useRecoilValue } from "recoil";
import { userAccessTokenState } from "recoil/atoms";
import { useCallback } from "react";
import { getSkillCategoryApi, getUserInfoApi } from "apis/ProfileApis";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";

// 일자리 메인페이지
const SearchWork = () => {
  //   const navigate = useNavigate();
  const accessToken = useRecoilValue(userAccessTokenState);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(0);
  const size = 10;

  const [workList, setWorkList] = useState([]);

  const getWorkList = useCallback(async () => {
    try {
      // setWorkList([
      //   {
      //     id: 0,
      //     title: "제목0",
      //     wageType: "CASE",
      //     wage: 10000,
      //     recruitmentStatus: "RECRUITING",
      //     startTime: "2024-05-30T01:27:37.018Z",
      //     endTime: "2024-05-30T11:30:37.018Z",
      //     category: "업종0",
      //     location: "서울특별시 광진구 화양동 105번지",
      //   },
      //   {
      //     id: 1,
      //     title: "제목1",
      //     wageType: "MONTH",
      //     wage: 2000000,
      //     recruitmentStatus: "DONE",
      //     startTime: "2024-06-30T01:27:37.018Z",
      //     endTime: "2024-06-30T11:30:37.018Z",
      //     category: "업종1",
      //     location: "서울특별시 광진구 화양동 105번지",
      //   },
      //   {
      //     id: 2,
      //     title: "제목2",
      //     wageType: "DAY",
      //     wage: 100000,
      //     recruitmentStatus: "RECRUITING",
      //     startTime: "2024-06-30T11:27:37.018Z",
      //     endTime: "2024-06-30T21:30:37.018Z",
      //     category: "업종2",
      //     location: "주소주소주소주소주소",
      //   },
      //   {
      //     id: 3,
      //     title: "제목3",
      //     wageType: "CASE",
      //     wage: 50000,
      //     recruitmentStatus: "RECRUITING",
      //     startTime: "2024-06-30T01:27:37.018Z",
      //     endTime: "2024-06-30T11:30:37.018Z",
      //     category: "업종3",
      //     location: "서울특별시 광진구 화양동 105번지",
      //   },
      //   {
      //     id: 4,
      //     title: "제목3",
      //     wageType: "CASE",
      //     wage: 50000,
      //     recruitmentStatus: "RECRUITING",
      //     startTime: "2024-06-30T01:27:37.018Z",
      //     endTime: "2024-06-30T11:30:37.018Z",
      //     category: "업종3",
      //     location: "서울특별시 광진구 화양동 105번지",
      //   },
      //   {
      //     id: 5,
      //     title: "제목3",
      //     wageType: "CASE",
      //     wage: 50000,
      //     recruitmentStatus: "RECRUITING",
      //     startTime: "2024-06-30T01:27:37.018Z",
      //     endTime: "2024-06-30T11:30:37.018Z",
      //     category: "업종3",
      //     location: "서울특별시 광진구 화양동 105번지",
      //   },
      //   {
      //     id: 6,
      //     title: "제목3",
      //     wageType: "CASE",
      //     wage: 50000,
      //     recruitmentStatus: "RECRUITING",
      //     startTime: "2024-06-30T01:27:37.018Z",
      //     endTime: "2024-06-30T11:30:37.018Z",
      //     category: "업종3",
      //     location: "서울특별시 광진구 화양동 105번지",
      //   },
      //   {
      //     id: 7,
      //     title: "제목3",
      //     wageType: "CASE",
      //     wage: 50000,
      //     recruitmentStatus: "RECRUITING",
      //     startTime: "2024-06-30T01:27:37.018Z",
      //     endTime: "2024-06-30T11:30:37.018Z",
      //     category: "업종3",
      //     location: "서울특별시 광진구 화양동 105번지",
      //   },
      //   {
      //     id: 8,
      //     title: "제목3",
      //     wageType: "CASE",
      //     wage: 50000,
      //     recruitmentStatus: "RECRUITING",
      //     startTime: "2024-06-30T01:27:37.018Z",
      //     endTime: "2024-06-30T11:30:37.018Z",
      //     category: "업종3",
      //     location: "서울특별시 광진구 화양동 105번지",
      //   },
      //   {
      //     id: 9,
      //     title: "제목3",
      //     wageType: "CASE",
      //     wage: 50000,
      //     recruitmentStatus: "RECRUITING",
      //     startTime: "2024-06-30T01:27:37.018Z",
      //     endTime: "2024-06-30T11:30:37.018Z",
      //     category: "업종3",
      //     location: "서울특별시 광진구 화양동 105번지",
      //   },
      //   {
      //     id: 10,
      //     title: "제목3",
      //     wageType: "CASE",
      //     wage: 50000,
      //     recruitmentStatus: "RECRUITING",
      //     startTime: "2024-06-30T01:27:37.018Z",
      //     endTime: "2024-06-30T11:30:37.018Z",
      //     category: "업종3",
      //     location: "서울특별시 광진구 화양동 105번지",
      //   },
      // ]);
      await getWorkListApi(accessToken, page, size, category).then((res) => {
        console.log(res);
        setWorkList(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [category, accessToken, page]);

  useEffect(() => {
    getWorkList();
  }, [getWorkList]);

  const [categories, setCategories] = useState([]);

  const getSkillCategories = async () => {
    await getSkillCategoryApi().then((res) => {
      console.log(res);
      setCategories(res.data.data);
    });
  };

  useEffect(() => {
    getSkillCategories();
  }, []);

  return (
    <SearchWorkTotalComponent>
      <HeaderComponent>
        <RegionText>전체 지역</RegionText>
        <RegionDropDownArrow src={arrowDown} alt="v" />
        <BellAlert src={bell} alt="bell" />
      </HeaderComponent>

      <Swiper
        style={{ width: "95%", margin: "15px 0px 0px 0px" }}
        slidesPerView={4.4}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* 일자리 필터 */}
        <WorkListComponent>
          {categories.length > 0 &&
            categories.map((item) => {
              return (
                <SwiperSlide key={item.categoryId}>
                  {category === item.category ? (
                    <WorkListText
                      style={{ color: "black" }}
                      onClick={() => {
                        setCategory(item.category);
                      }}
                      key={item.category}
                    >
                      {item.category}
                    </WorkListText>
                  ) : (
                    <WorkListText
                      onClick={() => {
                        setCategory(item.category);
                      }}
                      key={item.category}
                    >
                      {item.category}
                    </WorkListText>
                  )}
                </SwiperSlide>
              );
            })}
        </WorkListComponent>
      </Swiper>
      {/* 필터 리스트 */}
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
      {/* 해당 필터에 해당하는 일자리 리스트 */}
      {workList.length > 0 && <TotalWorkListComponent workList={workList} />}
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
  width: 70px;
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
  /* height: 26px; */

  color: #888;
  font-size: 15px;
  font-weight: 600;
  margin: 0px 7.5px;
  cursor: pointer;
`;

const FilterListComponent = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin: 6px 0px 0px 2px;
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
