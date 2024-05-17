import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outer from "pages/worker/Outer";
// 랜딩
import Landing from "pages/common/Landing";
// 로그인
import Login from "pages/common/Login";
// 회원가입
import PhoneCertify from "pages/worker/signup/PhoneCertify";
import PhoneCertifyConfirm from "pages/worker/signup/PhoneCertifyConfirm";
import Terms from "pages/worker/signup/Terms";
import OtherInfo from "pages/worker/signup/OtherInfo";
// 일자리 찾기
import SearchWork from "pages/worker/works/SearchWork";
import WorkDetail from "pages/worker/works/WorkDetail";
// 일자리 배정
import Assignment from "pages/worker/works/Assignment";
// 찜한 일자리
import SavedWorks from "pages/worker/works/SavedWork";
// 프로필
import Profile from "pages/worker/profile/Profile";
import MyPage from "pages/worker/profile/MyPage";

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
