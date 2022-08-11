import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../components/commons/Container'

const About = () => {
  return (
    <AboutContainer>
        <ContentContainer>
            <Img src='../imgs/aboutSample.svg'></Img>
            <Content>
                <Title>Be Artiste</Title>
                <Subtitle>아르티스트는 온라인 아트뮤지엄으로 누구나 반고흐가 될 수 있다.</Subtitle>
                <Text>우리는 우리의 추억을 자신이 원하는 스타일의 화풍으로 출력하여 
                        자신만의 미술 작품을 만들어낼 수 있도록 한다.
                        이를 2D와 3D로 전시하여 사람들과 공유함으로써 온라인으로 
                        누구나 예술가가 될 수 있는 경험을 제공한다. 
                </Text>
            </Content>
        </ContentContainer>
        <ContentContainer>
            <Content>
                <Title>Meet Artiste</Title>
                <Subtitle>아르티스트는 온라인 아트뮤지엄으로 누구나 예술가를 만날 수 있다.</Subtitle>
                <Text>우리는 인기 예술가를 만나고 관심있는 전시를 관람할 수 있으며,
감상평과 함께 기록을 남겨둘 수 있다.
                </Text>
            </Content>
            <Img src='../imgs/aboutSample2.svg'></Img>
        </ContentContainer>
    </AboutContainer>
  )
}

export default About
const AboutContainer=styled(ColContainer)`
    padding: 10% 15%;
    gap: 100px;
`
const ContentContainer=styled(RowContainer)`
    width: 100%;
    justify-content: space-between;
`
const Img=styled.img`
`
const Content=styled.div`
    width: 38%;
`
const Title=styled.div`
    font-weight: 500;
    font-size: 32px;
    color: #333333;
    margin-bottom: 10px;
`
const Subtitle=styled.div`
    color: rgba(102, 102, 102, 0.8);
    margin-bottom: 20px;
`
const Text=styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #666666;

`