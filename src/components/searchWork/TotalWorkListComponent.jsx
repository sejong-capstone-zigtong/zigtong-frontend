import React from "react";
import styled from "styled-components";
import EachWork from "components/searchWork/EachWork";

// 전체 일자리 리스트 컴포넌트
const TotalWorkListComponent = () => {
  return (
    <WorkListComponent>
      <EachWork />
      <EachWork />
      <EachWork />
    </WorkListComponent>
  );
};

export default TotalWorkListComponent;

const WorkListComponent = styled.div`
  width: 353px;
  padding: 10px 0px 118px 0px;
`;
