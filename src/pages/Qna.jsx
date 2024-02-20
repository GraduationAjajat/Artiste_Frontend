import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BorderBtn } from "./components/commons/Btns";
import { ColContainer, RowContainer } from "./components/commons/Container";
import { GrayText } from "./components/commons/Font";
import { BlackText } from "./components/commons/Font";
import { Line } from "./components/commons/Line";
const Qna = () => {
  const [qnaArray, setQnaArray] = useState([]);
  const [display, setDisplay] = useState([]);
  const [content, setContent] = useState("");
  useEffect(() => {
    axios.get("/api/v1/qna").then((res) => {
      setQnaArray(res.data.data);
      for (let i = 0; i < res.data.count; i++) {
        display[i] = false;
      }
    });
  }, [display]);
  const clickArrow = (id) => {
    setDisplay(
      display.map((ele, i) => (i === id ? (ele = !ele) : (ele = false)))
    );
  };
  const onSubmit = () => {
    axios.post("/api/v1/qna", {
      qnaContent: content,
    });
  };

  return (
    <ColContainer>
      <QnaContainer>
        <TopContainer>
          <GrayText size={"32px"}>Q&amp;A</GrayText>
        </TopContainer>
        <Textarea onChange={(e) => setContent(e.target.value)} />
        <SubmitBtn onClick={onSubmit}>문의 남기기</SubmitBtn>
        <ContentContainer>
          {qnaArray.map((qna, i) => (
            <>
              <Content>
                <Left>
                  <BlackText style={{ marginBottom: "15px" }}>
                    {qna.qnaContent}
                  </BlackText>
                  <BlackText weight={"700"}>{qna.user.nickname}</BlackText>
                </Left>
                <Right>
                  <BlackText weight={"500"} size={"15px"}>
                    {qna.createdDate.substr(0, 10)}
                  </BlackText>
                  {qna.qnaAnswer !== null &&
                    (display[i] === true ? (
                      <Btn
                        src="../imgs/upArrow.svg"
                        onClick={() => clickArrow(i)}
                      ></Btn>
                    ) : (
                      <Btn
                        src="../imgs/downArrow.svg"
                        onClick={() => clickArrow(i)}
                      ></Btn>
                    ))}
                </Right>
              </Content>
              <ExpandContainer display={display[i]}>
                <Answer>{qna.qnaAnswer}</Answer>
              </ExpandContainer>
              <Line style={{ width: "90%" }} />
            </>
          ))}
        </ContentContainer>
      </QnaContainer>
    </ColContainer>
  );
};

export default Qna;
const QnaContainer = styled(ColContainer)`
  margin: 60px 0;
  width: 80%;
  justify-content: flex-start;
  position: relative;
`;

const TopContainer = styled.div`
  width: 95%;
  height: 120px;
`;

const Textarea = styled.textarea`
  width: 90%;
  height: 125px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 20px;
  padding: 20px;
`;

const SubmitBtn = styled(BorderBtn)`
  background: #111111;
  color: white;
  width: 10%;
  position: absolute;
  top: 220px;
  right: 5%;
`;

const ContentContainer = styled(ColContainer)`
  width: 100%;
  height: 609px;
  border: 1px solid rgba(102, 102, 102, 0.35);
  border-radius: 12px;
  margin: 50px 0;
  padding: 30px 0;
  overflow: scroll;
`;

const Content = styled(RowContainer)`
  width: 90%;
  padding: 40px 0;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 90%;
`;

const Right = styled(ColContainer)`
  width: 10%;
  gap: 15px;
`;

const Btn = styled.img`
  margin-top: 10px;
`;

const ExpandContainer = styled.div`
  width: 80%;
  padding: 0 5% 20px 3%;
  display: ${(props) => (props.display === true ? "" : "none")};
`;

const Answer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #e4e4e4;
  border-radius: 10px;
  padding: 15px;
`;
