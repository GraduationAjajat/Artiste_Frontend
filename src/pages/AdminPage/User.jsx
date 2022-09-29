import axios from 'axios'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import { Line } from '../../components/commons/Line'

const User = () => {
    const [userArr, setUserArr]=useState([]);
    const [display, setDisplay]=useState([]);
    const [comments, setComments]=useState([]);
    
    useEffect(()=>{
        axios.get('/api/v1/admin/user')
        .then((res)=>{
            console.log(res.data);
            setUserArr(res.data.data);
            for (let i=0;i<res.data.count;i++){
                display[i]=false;
            }
        })
    },[])
    
    const clickCommentBtn=(id, userId)=>{
       
        setDisplay(
            display.map((ele,i)=>(
            i===id 
            ?
            ele=!ele
            :
            ele=false
          ))
        )
        axios.get(`/api/v1/admin/${userId}`)
        .then((res)=>{
            console.log(res.data);
            setComments(res.data.data);
            
        })
    }
    const clickDelete=(id)=>{
        axios.delete(`/api/v1/admin/${id}`)
        .then({
            
        })
    }
  return (
    <ColContainer>
        <UserContainer>
            {
                userArr.map((user,i)=>(
                    <>
                    <ContentContainer>
                        <Img src='../../imgs/profileSample.svg'></Img>
                        <Content>
                            <BlackText weight={"500"} size={"20px"} style={{marginBottom:"15px"}}>{user.nickname}</BlackText>
                            <RowContainer style={{gap: "5px"}}>
                                <BlackText>가입일</BlackText>
                                <BlackText style={{marginRight: "15px"}}>{user.registerDate.substring(0,10)}</BlackText>
                                <BlackText>작성한 글</BlackText>
                                <BlackText style={{marginRight: "15px"}}>{user.exhibitionCount}</BlackText>
                                <BlackText>작성한 댓글</BlackText>
                                <BlackText>{user.commentCount}</BlackText>
                            </RowContainer>
                        </Content>
                        {
                            user.commentCount===0?
                            <>
                            </>
                            :
                            <BtnContainer>
                            <div>
                                작성한 댓글 보기
                                <Btn src="../../imgs/downArrow.svg" onClick={()=>clickCommentBtn(i, user.userId)}></Btn>
                            </div>
                            </BtnContainer>
                        }
                       
                        
                    </ContentContainer>
                    <ExpandContainer>
                        {
                            comments.map((comment)=>(
                                <>
                                <CommentContainer display={display[i]}>
                                <Left>
                                    <BlackText style={{marginBottom:"15px"}}>{comment.user.nickname}</BlackText>
                                    <BlackText weight={"700"}>{comment.commentContent}</BlackText>
                                </Left>
                                <Right>
                                    <BlackText weight={"500"} size={"15px"}>{comment.createdDate.substring(0,10)}</BlackText>
                                    <DeleteBtn onClick={()=>clickDelete(comment.id)}>삭제</DeleteBtn>
                                </Right>
                                </CommentContainer>
                               
                                </>
                              
                            ))
                        }
                      
                    </ExpandContainer>

                    <Line/>
                    </>
                
                ))
            }


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

const Left=styled.div`
  width: 90%;
`
const Right=styled(ColContainer)`
  width: 15%;
  gap: 15px;
`
const DeleteBtn=styled.button`
  width: 89px;
  height: 35px;
  background: white;
  border: 1px solid #000000;
  border-radius: 5px;
  color: black;
  font-size: 15px;
  font-weight: 500;
  &:hover{
    background: #111111;
    color: white;
  }
`
const ExpandContainer=styled(ColContainer)`
    width: 100%;
`
const CommentContainer=styled(RowContainer)`
    width: 90%;
    padding: 50px 0;
    justify-content: space-between;
    display: ${props=>props.display === true ? '': 'none'}
`