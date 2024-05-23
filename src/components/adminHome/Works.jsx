/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import EachWork from "./EachWork";

const Works = () => {
  return (
    <WorkListComponent>
      <EachWork />
      <EachWork />
    </WorkListComponent>
  );
};

export default Works;

const WorkListComponent = styled.div`
  width: 353px;
  padding: 10px 0px 118px 0px;
`;
