import styled from "styled-components";

const Jk = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 12px;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  min-width: 93px;
  z-index: 1;
`;
const Div = styled.div`
  position: relative;
  font-size: var(--font-size-3xs);
  font-weight: 500;
  color: var(--grey-primary);
  text-align: left;
  display: inline-block;
  min-width: 58px;
  z-index: 1;
`;
const FrameChild = styled.img`
  height: 43px;
  width: 289px;
  position: relative;
  z-index: 1;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-4xs) 0px var(--padding-12xs);
`;
const Div1 = styled.div`
  align-self: stretch;
  position: relative;
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
const Div2 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 65px;
  z-index: 1;
`;
const FrameGroup = styled.nav`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-black);
  font-family: var(--font-pretendard-variable);
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-6xl);
`;
const JkParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mini-5);
  max-width: 100%;
`;
const InnerRoot = styled.section`
  width: 362px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-lgi) var(--padding-5xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-pretendard-variable);
`;

const FrameComponent1 = () => {
  return (
    <InnerRoot>
      <JkParent>
        <Jk>성수JK청소</Jk>
        <Div>성수2동 | 청소</Div>
        <FrameWrapper>
          <FrameParent>
            <FrameContainer>
              <FrameChild loading="lazy" alt="" src="/frame-2438.svg" />
            </FrameContainer>
            <FrameGroup>
              <Wrapper>
                <Div1>광고</Div1>
              </Wrapper>
              <Div2>게시글 작성</Div2>
              <Div2>지원자 조회</Div2>
            </FrameGroup>
          </FrameParent>
        </FrameWrapper>
      </JkParent>
    </InnerRoot>
  );
};

export default FrameComponent1;
