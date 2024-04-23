import React from "react";
import styled from "styled-components";
import EachWork from "./EachWork";

const TotalWorkListComponent = () => {
  return (
    <WorkListComponent>
      <EachWork />
      <EachWork />
      <EachWork />
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
