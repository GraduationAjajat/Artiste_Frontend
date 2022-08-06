import React from 'react'
import styled from 'styled-components'
import { BlackBtn, BorderBtn } from '../../../components/commons/Btns'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { BlackText, GrayText} from '../../../components/commons/Font'
import { GrayInput } from '../../../components/commons/Inputs'
const GalleryInfo = () => {
  return (
    <ColContainer>
        <GalleryInfoContainer>
            <TopContainer>
                <GrayText size={"32px"}>ART<br/>GALLERY</GrayText>
            </TopContainer>
            <ContentContainer>
                <Left>
                    <Img src='../../imgs/sampleImg.png'></Img>
                </Left>
                <Right>
                    <BlackText size={"32px"} weight={"700"}>꿈 속의 자연</BlackText>
                    <Tags>
                        <BlackText>#꽃</BlackText>
                        <BlackText>#꽃</BlackText>
                    </Tags>
                    <Line/>
                    <ColContainer style={{gap: "20px", width: "100%"}}>
                        <RowContainer style={{width:"100%"}}>
                            <Title>작가</Title>
                            <Content>toquf0797</Content>
                        </RowContainer>
                        <RowContainer style={{width:"100%"}}>
                            <Title>전시기간</Title>
                            <Content>2022.06.29 ~ 2022.07.04</Content>
                        </RowContainer>
                        <Title style={{width:"100%"}}>작가의 다른 전시회</Title> 
                    </ColContainer>
                   
                    <RowScrollContainer>
                        <Another src='../../imgs/sampleImg.png'></Another>
                        <Another src='../../imgs/sampleImg.png'></Another>
                        <Another src='../../imgs/sampleImg.png'></Another>
                        <Another src='../../imgs/sampleImg.png'></Another>
                    </RowScrollContainer>
                    <BorderBtn background="#111111" color={"#FFFFFF"} width="25%" style={{height:" 50px"}}>전시관람하기  </BorderBtn>
                </Right>
            </ContentContainer>
        </GalleryInfoContainer>
    </ColContainer>
  )
}

export default GalleryInfo
const GalleryInfoContainer=styled(ColContainer)`
    margin:30px 0;
    width: 80%;
    justify-content: flex-start;
`
const TopContainer=styled.div`
    width:100%;
    height: 150px;
`
const ContentContainer=styled(RowContainer)`
    width: 100%;
    height: 700px;
    border: 1px solid rgba(102, 102, 102, 0.35);
    border-radius: 12px;
    padding: 50px 5%;
    gap: 10%;
`
const Left=styled.div`
    width: 50%;
    height: 100%;
`
const Img=styled.img`
    width: 100%;
    height: 100%;
`
const Right=styled(ColContainer)`
    width: 50%;
    height: 80%;
    align-items: flex-start;
`
const Tags=styled(RowContainer)`
    width: 100%;
    gap: 10px;
    margin-top:10px;
`
const Line=styled.div`
    width: 100%;
    border: 1px solid #C4C4C4;
    margin: 40px 0;
`
const Title=styled.div`
    width: 20%;
    color:#666666;
`
const Content=styled.div`
    width: 80%;
    font-weight: 700;
    color: #666666;
    font-weight: 500;
`
const RowScrollContainer=styled(RowContainer)`
  height: 250px;
  width: 100%;
  white-space: nowrap;
  gap: 5%;
  overflow-x: auto;
  margin-bottom: 20px;
`
const Another=styled.img`
  width: 30%;
  height: 200px;
`