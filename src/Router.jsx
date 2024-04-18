import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outer from "./pages/Outer";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import PhoneCertify from "./pages/PhoneCertify";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outer />}>
          <Route path="" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/phoneCertify" element={<PhoneCertify />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
