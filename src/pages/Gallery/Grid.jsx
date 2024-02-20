import React, { useState } from "react";
import styled from "styled-components";
import { ColContainer, RowContainer } from "../../components/commons/Container";
import { BlackText } from "../../components/commons/Font";
import { Link } from "react-router-dom";
import axios from "axios";
const Grid = ({ contents }) => {
  const [scrap, setScrap] = useState(false);
  const clickHeart = (id) => {
    if (scrap === true) {
      setScrap(!scrap);
      axios
        .delete(`/api/v1/scrap/unscrap/${id}`)
        .then((res) => console.log(res.data));
    } else {
      setScrap(!scrap);
      axios.post(`/api/v1/scrap/${id}`).then((res) => {
        console.log(res.data);
      });
    }
  };

  return (
    <ColContainer>
      <GridContainer>
        {contents &&
          contents.map((content) => (
            <CardContainer>
              <Link
                to={`/gallery/${content.exhibitionId}`}
                style={{ textDecoration: "none" }}
                aria-label="상세페이지"
              >
                <Img src={content.exhibitionThumbnail} alt="대표이미지"></Img>
              </Link>
              <Content>
                <RowContainer style={{ justifyContent: "space-between" }}>
                  <BlackText size="20px" weight="700">
                    {content.exhibitionName}
                  </BlackText>
                  <BlackText size="15px">
                    {content.exhibitionStartDate.substr(0, 10)}
                  </BlackText>
                </RowContainer>

                <RowContainer style={{ justifyContent: "space-between" }}>
                  <BlackText size="15px">
                    {content.exhibitionArtistName}
                  </BlackText>
                  <RowContainer>
                    {scrap === true || content.scrapFlag === true ? (
                      <img
                        src="../../imgs/fillheart.svg"
                        style={{ width: "20px" }}
                        onClick={() => clickHeart(content.exhibitionId)}
                        alt="하트"
                      ></img>
                    ) : (
                      <img
                        src="../../imgs/heart.svg"
                        onClick={() => clickHeart(content.exhibitionId)}
                        alt="하트"
                      ></img>
                    )}

                    <Num>{content.scrapCount}</Num>
                    <img src="../../imgs/comment.svg" alt="댓글"></img>
                    <Num>{content.commentCount}</Num>
                  </RowContainer>
                </RowContainer>
              </Content>
            </CardContainer>
          ))}
      </GridContainer>
    </ColContainer>
  );
};

export default Grid;

const GridContainer = styled(RowContainer)`
  width: 100%;
  flex-wrap: wrap;
  gap: 50px 5%;
`;

const CardContainer = styled(ColContainer)`
  width: 30%;
  height: 360px;
  margin-bottom: 100px;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
`;

const Content = styled.div`
  margin-top: 16px;
  width: 90%;
`;

const Num = styled(BlackText)`
  font-size: 15px;
  font-weight: 500px;
  margin: 0 9px 0 6px;
`;
