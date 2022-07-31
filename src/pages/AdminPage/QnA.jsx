import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import { Line } from '../../components/commons/Line'

const QnA = () => {
  return (
    <ColContainer>
    <QnAContainer>
      <ContentContainer>
        <Left>
          <BlackText style={{marginBottom:"15px"}}>일상 속 풍경을 모네의 화풍으로 재해석한 점이 아주 인상깊고 좋아요</BlackText>
          <BlackText weight={"700"}>꿈 속의 자연</BlackText>
        </Left>
        <Right>
          <BlackText weight={"500"} size={"15px"}>2022.06.20</BlackText>
          <Btn src='../../imgs/downArrow.svg'></Btn>
        </Right>
      </ContentContainer>
      <Line/>
      </QnAContainer>
    </ColContainer>
  )
}
export default QnA
const QnAContainer=styled(ColContainer)`
  width: 90%;
  padding-top: 20px;
`
const ContentContainer=styled(RowContainer)`
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