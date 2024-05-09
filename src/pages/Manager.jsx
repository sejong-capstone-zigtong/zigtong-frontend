import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ManagerLoginText = styled(SignUpText)`
  margin: 40px 0px 0px 0px;
  color: #f00c0c;
  cursor: pointer;
`;

// 컴포넌트 내에서 ManagerLoginText 컴포넌트를 사용하는 부분을 찾아서 다음과 같이 수정합니다.
<ManagerLoginText
  onClick={() => {
    window.open('/Manager', '_blank');
  }}
>
  관리자 로그인
</ManagerLoginText>
