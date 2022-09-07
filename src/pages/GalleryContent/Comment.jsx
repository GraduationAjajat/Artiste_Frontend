import React from 'react'
import styled from 'styled-components'
import { BlackText } from '../../components/commons/Font'
import { ColContainer, RowContainer } from '../../components/commons/Container'
const Comment = ({comments}) => {
    console.log(comments);
  return (
    <CommentContainer>
        <Title>
        <BlackText size="26px">comment</BlackText>
        </Title>
        <Content>
            {
                comments.map((comment)=>(
                <RowContainer style={{gap:"20px"}}>
                    <Img src='../../imgs/profileSample.svg'/>
                    <div>
                        <BlackText size="20px">{comment.user.nickname}</BlackText>
                        <BlackText size="20px">{comment.commentContent}</BlackText>
                    </div>
                </RowContainer>
                ))
            }
            
        </Content>
    </CommentContainer>
  )
}

export default Comment
const CommentContainer=styled(ColContainer)`
    width: 100%;
    border-top: 1px solid #C4C4C4;
    padding: 50px 0;
`
const Title=styled.div`
    width: 85%;
`
const Content=styled(ColContainer)`
    margin-top: 50px;
    align-items: flex-start;
    width: 80%;
    gap:40px;
`
const Img=styled.img`
    
`