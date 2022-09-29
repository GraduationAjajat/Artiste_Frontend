import React, {useState} from 'react'
import styled from 'styled-components'
import { BlackText } from '../../components/commons/Font'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { GrayInput } from '../../components/commons/Inputs'
import { GrayRoundBtn } from '../../components/commons/Btns'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Comment = ({comments}) => {
    console.log(comments)
    const [addComment, setAddComment]=useState('');
    const id=useParams();
    const writeComment=(e)=>{
        setAddComment(e.target.value);
    }
    const clickAdd=()=>{
        console.log(addComment)
        axios.post('/api/v1/comment', 
            {
                commentContent: addComment,
                exhibitionId: id.id
            }
        )
        .then((res)=>{console.log(res.data); window.location.reload()})
    }
    const clickDelete=(id)=>[
        axios.delete(`/api/v1/comment/${id}`)
        .then((res)=>{console.log(res.data); window.location.reload()})
    ]
  return (
    <CommentContainer>
        <Title>
        <BlackText size="26px">comment</BlackText>
        </Title>
        <WriteContainer>
            <Write onChange={writeComment}></Write>
            <Add onClick={clickAdd}>작성</Add>
        </WriteContainer>
        <Content>
            {
                comments.map((comment, id)=>(
                <RowContainer style={{gap:"20px", width: "90%", justifyContent:"space-between"}}>
                    <Img src='../../imgs/profileSample.svg'/>
                    <div style={{width:"80%"}}>
                        <BlackText size="20px">{comment.user.nickname}</BlackText>
                        <BlackText size="20px">{comment.commentContent}</BlackText>
                    </div>
                    <Delete onClick={()=>clickDelete(comment.commentId)}>
                        삭제
                    </Delete>
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
    //align-items: flex-start;
    width: 80%;
    gap:40px;
`
const Img=styled.img`
    
`
const WriteContainer=styled.div`
    margin: 30px 0;
    width: 80%;
    position: relative;
`
const Write=styled(GrayInput)`
    width: 100%;
    height: 100px;
    border-radius: 30px;
    
`
const Add=styled(GrayRoundBtn)`
    position: absolute; 
    right: 20px;
    bottom: 20px;
    width: 7%;
    height: 40px;
`
const Delete=styled(GrayRoundBtn)`
    width: 7%;
    height: 40px;
`