/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import user from "assets/adminHome/workerGray.svg";
import thumbsUp from "assets/adminHome/thumbsup.svg";

const Reviews = () => {
  return (
    <Container>
      <ReviewWrapper>
        <NicknameWrapper>
          <NicknameIcon src={user} />
          <NicknameText>퐁퐁</NicknameText>
        </NicknameWrapper>
        <ReviewContent>
          반장님이 좋으신 분이라 추천합니다~
          <br />
          제공되는 점심도 맛있고 화장실도 양호해요
        </ReviewContent>
      </ReviewWrapper>
      <ReviewFooterWrapper>
        <ReviewFooterText>2달 전 · 4회 고용</ReviewFooterText>
        <ReviwFooterThumbsUpIcon src={thumbsUp} />
        <ReviewFooterText>13</ReviewFooterText>
      </ReviewFooterWrapper>
      <ReviewManagerAnswer placeholder="관리자로 댓글남기기" />
      <FullLine />
      <ReviewWrapper>
        <NicknameWrapper>
          <NicknameIcon src={user} />
          <NicknameText>하이</NicknameText>
        </NicknameWrapper>
        <ReviewContent>
          쉬는 시간도 적절히 주십니다
          <br />
          환경도 이정도면 꽤 쾌적해요
        </ReviewContent>
      </ReviewWrapper>
      <ReviewFooterWrapper>
        <ReviewFooterText>3달 전 · 2회 고용</ReviewFooterText>
        <ReviwFooterThumbsUpIcon src={thumbsUp} />
        <ReviewFooterText>10</ReviewFooterText>
      </ReviewFooterWrapper>
      <ReviewManagerAnswer placeholder="관리자로 댓글남기기" />
      <FullLine />
    </Container>
  );
};

export default Reviews;

const Container = styled.div`
  width: 353px;
  padding: 0px 0px 118px 0px;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 185px;
`;

const NicknameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 32px 0px 0px 0px;
`;

const NicknameIcon = styled.img`
  width: 16px;
  height: 16px;
  fill: #9f9f9f;
`;

const NicknameText = styled.div`
  color: #767676;
  font-family: "Pretendard Variable";
  font-size: 14px;
  /* height: 16px; */

  font-style: normal;
  font-weight: 500;
  line-height: 10px; /* 71.429% */
`;

const ReviewContent = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 100% */
  margin-top: 27px;
`;

const ReviewFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: -30px 0px 0px 0px;
`;

const ReviewFooterText = styled.div`
  color: #767676;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
`;

const ReviwFooterThumbsUpIcon = styled.img`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin: 0px 0px 0px 213px;
`;

const ReviewManagerAnswer = styled.input`
  width: 350px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 2px solid #d9d9d9;
  background: #fff;
  padding: 16px 12px;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 10px; /* 62.5% */
  margin: 16px 0px 0px 0px;
  &::placeholder {
    color: #d9d9d9;
  }
`;

const FullLine = styled.div`
  width: 350px;
  height: 2px;
  flex-shrink: 0;
  background: #e4e1e1;
  margin: 22px 0px 0px 0px;
`;
