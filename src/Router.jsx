import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outer from "./pages/Outer";
// 랜딩
import Landing from "./pages/Landing";
// 로그인
import Login from "./pages/Login";
// 회원가입
import PhoneCertify from "./pages/PhoneCertify";
import PhoneCertifyConfirm from "./pages/PhoneCertifyConfirm";
import Terms from "./pages/Terms";
import OtherInfo from "./pages/OtherInfo";
// 일자리 찾기
import SearchWork from "./pages/SearchWork";
import WorkDetail from "./pages/WorkDetail";
// 일자리 배정
import Assignment from "./pages/Assignment";
// 찜한 일자리
import SavedWorks from "./pages/SavedWork";
// 프로필
import Profile from "./pages/Profile";
import MyPage from "./pages/MyPage";

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
