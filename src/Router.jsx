import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outer from "./pages/Outer";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import PhoneCertify from "./pages/PhoneCertify";
import PhoneCertifyConfirm from "./pages/PhoneCertifyConfirm";
import Terms from "./pages/Terms";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
