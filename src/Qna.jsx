import React from 'react'
import styled from 'styled-components'
import { BorderBtn } from './components/commons/Btns'
import { ColContainer, RowContainer } from './components/commons/Container'
import { GrayText } from './components/commons/Font'
import { BlackText } from './components/commons/Font'
import { Line } from './components/commons/Line'
const Qna = () => {
  return (
    <ColContainer>
        <QnaContainer>
            <TopContainer>
                <GrayText size={"32px"}>Q&amp;A</GrayText>
            </TopContainer>
            <Textarea/>
            <SubmitBtn>문의 남기기</SubmitBtn>
            <ContentContainer>
            <Content>
                <Left>
                <BlackText style={{marginBottom:"15px"}}>일상 속 풍경을 모네의 화풍으로 재해석한 점이 아주 인상깊고 좋아요</BlackText>
                <BlackText weight={"700"}>꿈 속의 자연</BlackText>
                </Left>
                <Right>
                <BlackText weight={"500"} size={"15px"}>2022.06.20</BlackText>
                <Btn src='../imgs/downArrow.svg'></Btn>
                </Right>
            </Content>
            <Line style={{width:"90%"}}/>
            </ContentContainer>
        </QnaContainer>
    </ColContainer>
  )
}

export default Qna
const QnaContainer=styled(ColContainer)`
    margin:60px 0;
    width: 80%;
    justify-content: flex-start;
    position: relative;
`
const TopContainer=styled.div`
    width:95%;
    height: 120px;
`
const Textarea=styled.textarea`
    width: 95%;
    height: 125px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 20px;
   
`
const SubmitBtn=styled(BorderBtn)`
    background: #111111;
    color:white;
    width: 10%;
    position: absolute;
    top: 190px;
    right: 5%;
`
const ContentContainer=styled(ColContainer)`
    width: 100%;
    height: 609px;
    border: 1px solid rgba(102, 102, 102, 0.35);
    border-radius: 12px;
    margin: 50px 0;
    padding: 30px 0;
`

const Content=styled(RowContainer)`
  width: 90%;
  padding: 40px 0;
  justify-content: space-between;
`
const Left=styled.div`
  width: 90%;
`
const Right=styled(ColContainer)`
  width: 10%;
  gap: 15px;
`
const Btn=styled.img`
 margin-top: 10px;
`