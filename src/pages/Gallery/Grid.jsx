import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Grid = ({contents}) => {
    console.log(contents);
    const [scrap, setScrap]=useState(false);
    const clickHeart=(id)=>{
        
        if (scrap===true){
            setScrap(!scrap);
            axios.delete(`/api/v1/scrap/unscrap/${id}`)
            .then((res)=>console.log(res.data));
        }
        else{
            setScrap(!scrap);
            axios.post(`/api/v1/scrap/${id}`)
            .then((res=>{
            console.log(res.data);
            }))
        }
    }
   
  return (
    <ColContainer>
        <GridContainer>
            {contents.map((content)=>(
                <CardContainer>
                    <Link to={`content/${content.exhibitionId}`} style={{ textDecoration: 'none' }}>
                        <Img src='../../imgs/sampleImg.png'></Img>
                        </Link>
                        <Content>
                        <RowContainer style={{justifyContent:"space-between"}}>
                            <BlackText size="20px" weight="700">{content.exhibitionName}</BlackText>
                            <BlackText size="15px">{content.exhibitionStartDate}</BlackText>
                        </RowContainer>
                       
                        <RowContainer style={{justifyContent:"space-between"}}>
                            <BlackText size="15px">{content.exhibitionArtistName}</BlackText>
                            <RowContainer>
                                {
                                    scrap?
                                    <img src='../../imgs/fillheart.svg' style={{width: "20px"}} onClick={()=>clickHeart(content.exhibitionId)}></img>
                                    :
                                    <img src='../../imgs/heart.svg' onClick={()=>clickHeart(content.exhibitionId)}></img>

                                }
                               
                                <Num>{content.scrapCount}</Num>
                                <img src='../../imgs/comment.svg'></img>
                                <Num>{content.commentCount}</Num>
                            </RowContainer>
                        </RowContainer>
                        </Content>
                </CardContainer>
            ))}
        </GridContainer>
    </ColContainer>
  )
}

export default Grid

const GridContainer=styled(RowContainer)`
    width: 100%;
    //justify-content: space-between;
    flex-wrap: wrap;
    gap:50px 5%;
`
const CardContainer=styled(ColContainer)`
    width: 30%;
    height: 360px;
    margin-bottom: 100px;
`
const Img=styled.img`
    width: 100%;
`
const Content=styled.div`
    margin-top: 16px;
    width: 80%;
  
`
const Num=styled(BlackText)`
    font-size: 15px;
    font-weight: 500px;
    margin: 0 9px 0 6px;
`