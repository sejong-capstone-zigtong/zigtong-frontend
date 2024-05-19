import styled from "styled-components";

const Div = styled.div`
  position: relative;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs-9) 0px 0px;
`;
const ChevronRightIcon = styled.img`
  height: 20.3px;
  width: 20.3px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
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
  width: 304.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-21xl);
  box-sizing: border-box;
`;
const Image13Icon = styled.img`
  align-self: stretch;
  position: relative;
  border-radius: var(--br-8xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  z-index: 1;
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg-6);
  max-width: 100%;
`;
const InnerRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs) var(--padding-sm-4);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--color-dimgray-100);
  font-family: var(--font-pretendard-variable);
`;

const FrameComponent = () => {
  return (
    <InnerRoot>
      <FrameParent>
        <FrameWrapper>
          <FrameGroup>
            <Wrapper>
              <Div>서울특별시 성동구 세종나랏길 40번길 17</Div>
            </Wrapper>
            <ChevronRightIcon alt="" src="/chevronright@2x.png" />
          </FrameGroup>
        </FrameWrapper>
        <Image13Icon loading="lazy" alt="" src="/image-13@2x.png" />
      </FrameParent>
    </InnerRoot>
  );
};

export default FrameComponent;
