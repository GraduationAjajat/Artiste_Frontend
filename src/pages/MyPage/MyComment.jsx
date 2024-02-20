import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ColContainer, RowContainer } from "../../components/commons/Container";
import { BlackText } from "../../components/commons/Font";
import { Line } from "../../components/commons/Line";

const MyComment = () => {
  const token = localStorage.getItem("token");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/comment", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setComments(res.data.data);
      });
  }, [token]);

  return (
    <ColContainer>
      <MyCommentContainer>
        {comments.map((comment) => (
          <>
            <CommentContainer>
              <Left>
                <BlackText style={{ marginBottom: "15px" }}>
                  {comment.commentContent}
                </BlackText>
                <BlackText weight={"700"}>
                  {comment.exhibition.exhibitionName}
                </BlackText>
              </Left>
              <Right>
                <BlackText weight={"500"} size={"15px"}>
                  {comment.createdDate.substr(0, 10)}
                </BlackText>
                <Link to={`/gallery/content/${comment.exhibition.id}`}>
                  <Btn>확인</Btn>
                </Link>
              </Right>
            </CommentContainer>
            <Line />
          </>
        ))}
      </MyCommentContainer>
    </ColContainer>
  );
};

export default MyComment;
const MyCommentContainer = styled(ColContainer)`
  width: 90%;
  padding-top: 20px;
`;

const CommentContainer = styled(RowContainer)`
  width: 90%;
  padding: 50px 0;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 90%;
`;

const Right = styled(ColContainer)`
  width: 15%;
  gap: 15px;
`;

const Btn = styled.button`
  width: 89px;
  height: 35px;
  background: white;
  border: 1px solid #000000;
  border-radius: 5px;
  color: black;
  font-size: 15px;
  font-weight: 500;
  &:hover {
    background: #111111;
    color: white;
  }
`;
