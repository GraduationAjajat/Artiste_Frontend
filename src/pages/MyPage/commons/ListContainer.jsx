import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BlackBtn } from '../../../components/commons/Btns'
import { ColContainer, RowContainer } from '../../../components/commons/Container'
import { BlackText } from '../../../components/commons/Font'
import { Line } from '../../../components/commons/Line'
import axios from 'axios'
const ListContainer = ({contents, type}) => {
  console.log(contents);
  const [isApproval, setIsApproval]=useState(false);
  
  const clickApproval=(id)=>{
    axios.put(`/api/v1/admin/waiting/${id}`)
    .then((res)=>{
      setIsApproval(true);
      console.log(res.data);
    })
   
  } 
  return (
    <ColContainer>
      <MyGalleryContainer>
        {contents.map((content)=>(
        <>
          <ContentContainer>
          <Img src={type === 'scrap' ? content.exhibition.exhibitionThumbnail : content.exhibitionThumbnail}></Img>   
              <Content>
                <LeftSection>
                    <div>
                      { type ==='gallery'?
                        (
                          content.exhibitionState==="APPROVAL"
                          ?
                          <ApprovalBtn>
                            승인됨
                          </ApprovalBtn>
                          :
                          <ApprovalBtn color='black'>
                            대기중
                          </ApprovalBtn>
                        )
                      :
                      <></>
                      }
                        <BlackText weight={"700"} size={"20px"}>{ type === 'scrap' ? content.exhibition.exhibitionName : content.exhibitionName}</BlackText>
                        <BlackText weight={"500"} size={"15px"}>{content.exhibitionArtistName}</BlackText>
                    </div>
                </LeftSection>
                <RightSection>
                        <BlackText weight={"500"} size={"15px"}>{content.exhibitionStartDate.substring(0,10)}</BlackText>
                        {
                          type==="admin"
                          ?
                          <ApprovalBtn style={{margin: '10px 0 0 0'}} onClick={()=>clickApproval(content.exhibitionId)} color={isApproval===true ? 'black' : ''}>승인</ApprovalBtn>
                          :
                          <RowContainer>
                            <img src='../../imgs/heart.svg'></img>
                            <Num>{content.scrapCount}</Num>
                            <img src='../../imgs/comment.svg'></img>
                            <Num>{content.commentCount}</Num>
                          </RowContainer>
                        }
                       
                </RightSection>
              </Content>
          </ContentContainer>
          <Line/>
          </>
        ))}
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
const ApprovalBtn=styled.button`
    padding:5px 10px;
    border: 1px solid #111111;
    border-radius: 5px;
    background-color:${props=>props.color ==='black' ? 'black' : 'white'};
    color: ${props=>props.color ==='black' ? 'white' : 'black'};
    margin-bottom: 10px;
`