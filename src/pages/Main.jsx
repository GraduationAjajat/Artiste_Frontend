import React from "react";
import styled from "styled-components";
import { ColContainer } from "../components/commons/Container";
import { BlackText } from "../components/commons/Font";
import { BlackBtn } from "../components/commons/Btns";
const Main = () => {
  return (
    <MainContainer>
      <CardContainer>
        <Title>Be Artiste, Meet Artiste</Title>
        <BlackText size={"24px"} style={{ margin: "16px 0 36px 0" }}>
          이곳은 예술가가 될 수 있고 예술가를 만날 수 있는
          <br />
          아르티스트&#40;Artiste&#41;입니다.{" "}
        </BlackText>
        <BlackBtn width={"240px"} height={"60px"}>
          <span>전시관람하기</span>
          <img
            src="../imgs/rightArrow.svg"
            alt="rightArrow"
            style={{ verticalAlign: "top", marginLeft: "15px" }}
          ></img>
        </BlackBtn>
      </CardContainer>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  position: relative;
  color: rgba(217, 217, 217, 0.2);
  height: 90vh;
  overflow: hidden;
  ::after {
    content: "";
    opacity: 0.8;
    background: url("../imgs/main.svg") no-repeat fixed top;
    background-size: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    filter: blur(3px);
    z-index: -1;
    height: 100%;
  }
`;

const CardContainer = styled(ColContainer)`
  width: 40%;
  height: 600px;
  margin: 100px 0 0 70px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(14px);
  border-radius: 24px;
  align-items: flex-start;
  padding-left: 3%;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 45px;
  margin-top: 200px;
  color: #111111;
`;
