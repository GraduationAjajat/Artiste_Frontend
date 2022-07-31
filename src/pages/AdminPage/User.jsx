import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import { Line } from '../../components/commons/Line'

const User = () => {
  return (
    <ColContainer>
        <UserContainer>
            <ContentContainer>
                <Img src='../../imgs/profileSample.svg'></Img>
                <Content>
                    <BlackText weight={"500"} size={"20px"} style={{marginBottom:"5px"}}>user1</BlackText>
                    <RowContainer style={{gap: "5px"}}>
                        <BlackText>가입일</BlackText>
                        <BlackText style={{marginRight: "15px"}}>2022.06.20</BlackText>
                        <BlackText>작성한 글</BlackText>
                        <BlackText style={{marginRight: "15px"}}>7</BlackText>
                        <BlackText>작성한 댓글</BlackText>
                        <BlackText>5</BlackText>
                    </RowContainer>
                </Content>
                <BtnContainer>
                    <div>
                        작성한 댓글 보기
                        <Btn src="../../imgs/downArrow.svg"></Btn>
                    </div>
                </BtnContainer>
            </ContentContainer>
            <Line/>
            <ContentContainer>
                <Img src='../../imgs/profileSample.svg'></Img>
                <Content>
                    <BlackText weight={"500"} size={"20px"} style={{marginBottom:"5px"}}>user1</BlackText>
                    <RowContainer style={{gap: "5px"}}>
                        <BlackText>가입일</BlackText>
                        <BlackText style={{marginRight: "15px"}}>2022.06.20</BlackText>
                        <BlackText>작성한 글</BlackText>
                        <BlackText style={{marginRight: "15px"}}>7</BlackText>
                        <BlackText>작성한 댓글</BlackText>
                        <BlackText>5</BlackText>
                    </RowContainer>
                </Content>
                <BtnContainer>
                    <div>
                        작성한 댓글 보기
                        <Btn src="../../imgs/downArrow.svg"></Btn>
                    </div>
                </BtnContainer>
            </ContentContainer>
            <Line/>

        </UserContainer>
    </ColContainer>
  )
}

export default User
const UserContainer=styled(ColContainer)`
    width:90%;
    padding-top: 20px;
    
`
const ContentContainer=styled(RowContainer)`
    width: 100%;
    padding: 30px 0;
    gap: 20px;
    height: 100px;
`
const Img=styled.img`
    width: 10%;
`
const Content=styled.div`
    width: 65%;
`
const BtnContainer=styled(RowContainer)`
    height: 100%;
    align-items: flex-end;
   margin-bottom: 20px;
`
const Btn=styled.img`
   margin-left: 10px;
`
