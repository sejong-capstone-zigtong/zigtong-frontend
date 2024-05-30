import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outer from "pages/worker/Outer";
// 랜딩
import Landing from "pages/common/Landing";

// Worker

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

// Admin

// 로그인
import AdminLogin from "pages/admin/login/AdminLogin";
import BusinessNumber from "pages/admin/signup/BusinessNumber";
import Account from "pages/admin/signup/Account";
import CompanyName from "pages/admin/signup/CompanyName";
import CompanyAddress from "pages/admin/signup/CompanyAddress";
import CompanySector from "pages/admin/signup/CompanySector";
import AdminHome from "pages/admin/home/AdminHome";
import NewWork from "pages/admin/work/NewWork";
import ApplicantInquiry from "pages/admin/work/ApplicantInquiry";
import SettlementStatus from "pages/admin/work/SettlementStatus";
import AdminWorksDetail from "pages/admin/work/WorkDetail";
import ApplicantProfile from "pages/admin/work/ApplicantProfile";
// 회원가입

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
          <Route path="/works/:postId" element={<WorkDetail />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/works/saved" element={<SavedWorks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="admin">
            <Route index path="" element={<AdminHome />} />
            <Route path="login" element={<AdminLogin />} />
            <Route path="signup">
              <Route path="businessNumber" element={<BusinessNumber />} />
              <Route path="account" element={<Account />} />
              <Route path="companyName" element={<CompanyName />} />
              <Route path="companyAddress" element={<CompanyAddress />} />
              <Route path="companySector" element={<CompanySector />} />
            </Route>
            <Route path="works">
              <Route path="new" element={<NewWork />} />
              <Route path=":postId">
                <Route index path="" element={<AdminWorksDetail />} />
                <Route path="applicants" element={<ApplicantInquiry />} />
                <Route path="settlementStatus" element={<SettlementStatus />} />
                <Route path="profile" element={<ApplicantProfile />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
