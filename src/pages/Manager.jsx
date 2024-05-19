import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FrameComponent1 from "../components/manage/FrameComponent1.jsx";
import FrameComponent from "../components/FrameComponent";

const ManagerLoginText = styled(SignUpText)`
  margin: 40px 0px 0px 0px;
  color: #f00c0c;
  cursor: pointer;
`;

// 컴포넌트 내에서 ManagerLoginText 컴포넌트를 사용하는 부분을 찾아서 다음과 같이 수정.
<ManagerLoginText
  onClick={() => {
    window.open('/Manager', '_blank');
  }}
>
  관리자 로그인
</ManagerLoginText>



const Child = styled.div`
  align-self: stretch;
  height: 844px;
  position: relative;
  background-color: var(--gray-white);
  display: none;
`;
const Div = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
  z-index: 1;
`;
const Wrapper = styled.div`
  width: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xs) 0px 0px;
  box-sizing: border-box;
`;
const Div1 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 65px;
  z-index: 1;
`;
const Div2 = styled.div`
  width: 65px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const FrameGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 48px 0px 43px;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gainsboro);
  width: 100%;
  height: 100%;
  display: none;
  z-index: 1;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #191717;
  width: 120px;
  height: 2px;
  z-index: 2;
`;
const RectangleParent = styled.div`
  align-self: stretch;
  height: 2px;
  position: relative;
  background-color: var(--color-gainsboro);
  z-index: 1;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 24.1px;
  gap: 9px;
  text-align: center;
  font-size: var(--font-size-xs);
`;
const Div3 = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 20px;
  font-weight: 500;
  font-family: var(--font-pretendard);
  color: var(--gray-white);
  text-align: left;
  display: inline-block;
  min-width: 91px;
`;
const Button3 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-3xs) var(--padding-xl);
  background-color: var(--grey-primary);
  flex: 1;
  border-radius: var(--br-sm);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  white-space: nowrap;
  max-width: 100%;
  z-index: 1;
`;
const ButtonWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xs) 0px 12px;
  box-sizing: border-box;
  max-width: 100%;
`;
const B = styled.b`
  position: relative;
  display: inline-block;
  min-width: 26px;
  z-index: 1;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mini);
`;
const Div4 = styled.div`
  position: relative;
  z-index: 1;
`;
const Frame1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mini);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-2xs);
`;
const RectangleGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 3px;
  box-sizing: border-box;
  gap: 15px;
  max-width: 100%;
`;
const Div5 = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 20px;
  font-weight: 500;
  font-family: var(--font-pretendard);
  color: var(--gray-white);
  text-align: left;
  display: inline-block;
  min-width: 60px;
`;
const ButtonContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs) 14px;
  box-sizing: border-box;
  max-width: 100%;
`;
const RectangleDiv = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  background-color: var(--color-gainsboro);
  max-width: 100%;
  z-index: 1;
`;
const Inner = styled.div`
  align-self: stretch;
  height: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-5xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const P = styled.p`
  margin: 0;
`;
const Div6 = styled.div`
  position: relative;
  font-size: var(--font-size-2xs);
  z-index: 1;
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const ButtonFrame = styled.footer`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 11px 0px var(--padding-4xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const DivRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--gray-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 61px 0px 55px;
  box-sizing: border-box;
  gap: 16px;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-black);
  font-family: var(--font-pretendard-variable);
`;

const Frame = () => {
  return (
    <DivRoot>
      <Child />
      <FrameComponent1 />
      <FrameParent>
        <FrameWrapper>
          <FrameGroup>
            <Wrapper>
              <Div>홈</Div>
            </Wrapper>
            <Div1>나의 게시글</Div1>
            <Div2>리뷰</Div2>
          </FrameGroup>
        </FrameWrapper>
        <RectangleParent>
          <FrameChild />
          <FrameItem />
        </RectangleParent>
      </FrameParent>
      <FrameComponent />
      <ButtonWrapper>
        <Button3>
          <Div3>업체 정보 관리</Div3>
        </Button3>
      </ButtonWrapper>
      <RectangleGroup>
        <RectangleParent />
        <Container>
          <B>공지</B>
        </Container>
        <Frame1>
          <Div4>
            장기 근무자 우대합니다. 6개월 이상 근무 가능하신 분 특이사항에
            남겨주세요.
          </Div4>
        </Frame1>
      </RectangleGroup>
      <ButtonContainer>
        <Button3>
          <Div5>공지 관리</Div5>
        </Button3>
      </ButtonContainer>
      <Inner>
        <RectangleDiv />
      </Inner>
      <Container>
        <Parent1>
          <B>소개</B>
          <Div6>
            <P>{`성수동에서 20년간 빌딩 청소를 전문으로 하는 업체입니다. `}</P>
            <P>가족같이 일하실 분 구해요~^^</P>
          </Div6>
        </Parent1>
      </Container>
      <ButtonFrame>
        <Button3>
          <Div5>소개 관리</Div5>
        </Button3>
      </ButtonFrame>
    </DivRoot>
  );
};

export default Frame;
