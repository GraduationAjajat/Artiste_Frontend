import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import { Line } from '../../components/commons/Line'

const MyComment = () => {
  return (
    <ColContainer>
      <MyCommentContainer>
        <CommentContainer>
          <Left>
            <BlackText style={{marginBottom:"15px"}}>일상 속 풍경을 모네의 화풍으로 재해석한 점이 아주 인상깊고 좋아요</BlackText>
            <BlackText weight={"700"}>꿈 속의 자연</BlackText>
          </Left>
          <Right>
            <BlackText weight={"500"} size={"15px"}>2022.06.20</BlackText>
            <Btn>확인</Btn>
          </Right>
        </CommentContainer>
        <Line/>
        <CommentContainer>
          <Left>
            <BlackText style={{marginBottom:"15px"}}>일상 속 풍경을 모네의 화풍으로 재해석한 점이 아주 인상깊고 좋아요</BlackText>
            <BlackText weight={"700"}>꿈 속의 자연</BlackText>
          </Left>
          <Right>
            <BlackText weight={"500"} size={"15px"}>2022.06.20</BlackText>
            <Btn>확인</Btn>
          </Right>
        </CommentContainer>
        <Line/>
        <CommentContainer>
          <Left>
            <BlackText style={{marginBottom:"15px"}}>일상 속 풍경을 모네의 화풍으로 재해석한 점이 아주 인상깊고 좋아요</BlackText>
            <BlackText weight={"700"}>꿈 속의 자연</BlackText>
          </Left>
          <Right>
            <BlackText weight={"500"} size={"15px"}>2022.06.20</BlackText>
            <Btn>확인</Btn>
          </Right>
        </CommentContainer>
        <Line/>
      </MyCommentContainer>
    </ColContainer>
    
  )
}

export default MyComment
const MyCommentContainer=styled(ColContainer)`
  width: 90%;
  padding-top: 20px;
`
const CommentContainer=styled(RowContainer)`
  width: 90%;
  padding: 50px 0;
  justify-content: space-between;
`
const Left=styled.div`
  width: 90%;
`
const Right=styled(ColContainer)`
  width: 10%;
  gap: 15px;
`
const Btn=styled.button`
  width: 89px;
  height: 35px;
  background: #111111;
  border: 1px solid #000000;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: 500;
`