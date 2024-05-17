import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outer from "pages/worker/Outer";
// 랜딩
import Landing from "pages/common/Landing";
// 로그인
import Login from "pages/common/Login";
// 회원가입
import PhoneCertify from "pages/worker/PhoneCertify";
import PhoneCertifyConfirm from "pages/worker/PhoneCertifyConfirm";
import Terms from "pages/worker/Terms";
import OtherInfo from "pages/worker/OtherInfo";
// 일자리 찾기
import SearchWork from "pages/worker/SearchWork";
import WorkDetail from "pages/worker/WorkDetail";
// 일자리 배정
import Assignment from "pages/worker/Assignment";
// 찜한 일자리
import SavedWorks from "pages/worker/SavedWork";
// 프로필
import Profile from "pages/worker/Profile";
import MyPage from "pages/worker/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outer />}>
          <Route path="" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/phoneCertify" element={<PhoneCertify />} />
          <Route path="/signup/phoneCertifyConfirm" element={<PhoneCertifyConfirm />} />
          <Route path="/signup/terms" element={<Terms />} />
          <Route path="/signup/otherInfo" element={<OtherInfo />} />
          <Route path="/works" element={<SearchWork />} />
          <Route path="/works/detail" element={<WorkDetail />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/works/saved" element={<SavedWorks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
