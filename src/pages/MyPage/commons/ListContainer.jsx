import React from 'react'
import styled from 'styled-components'
import { BlackBtn } from '../../../components/commons/Btns'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { BlackText } from '../../../components/commons/Font'
import { Line } from '../../../components/commons/Line'

const ListContainer = () => {
  return (
    <ColContainer>
      <MyGalleryContainer>
        <ContentContainer>
        <Img src='../../imgs/sampleImg.png'></Img>   
            <Content>
              <LeftSection>
                  <div>
                      <BlackText weight={"700"} size={"20px"}>꿈 속의 자연</BlackText>
                      <BlackText weight={"500"} size={"15px"}>toquf0797</BlackText>
                  </div>
              </LeftSection>
              <RightSection>
                      <BlackText weight={"500"} size={"15px"}>2022.06.29</BlackText>
                      <RowContainer>
                                  <img src='../../imgs/heart.svg'></img>
                                  <Num>13</Num>
                                  <img src='../../imgs/comment.svg'></img>
                                  <Num>7</Num>
                        </RowContainer>
              </RightSection>
            </Content>
        </ContentContainer>
        <Line/>
        <ContentContainer>
        <Img src='../../imgs/sampleImg.png'></Img>   
            <Content>
              <LeftSection>
                  <div>
                      <BlackText weight={"700"} size={"20px"}>꿈 속의 자연</BlackText>
                      <BlackText weight={"500"} size={"15px"}>toquf0797</BlackText>
                  </div>
              </LeftSection>
              <RightSection>
                      <BlackText weight={"500"} size={"15px"}>2022.06.29</BlackText>
                      <RowContainer>
                                  <img src='../../imgs/heart.svg'></img>
                                  <Num>13</Num>
                                  <img src='../../imgs/comment.svg'></img>
                                  <Num>7</Num>
                        </RowContainer>
              </RightSection>
            </Content>
        </ContentContainer>
      </MyGalleryContainer>
    </ColContainer>
  )
}

export default ListContainer

const MyGalleryContainer=styled(ColContainer)`
    width: 90%;
    padding-top: 20px;
`
const ContentContainer=styled(RowContainer)`
    width: 90%;
    height: 200px;
    padding: 40px 0;
`
const Content=styled(RowContainer)`
  width: 80%;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  padding: 0 0 10px 30px;
`
const LeftSection=styled(RowContainer)`

`
const RightSection=styled(ColContainer)`
 
`
const Img=styled.img`
    height: 100%;
    width: 20%;
`
const Num=styled(BlackText)`
    font-size: 15px;
    font-weight: 500px;
    margin: 0 9px 0 6px;
`