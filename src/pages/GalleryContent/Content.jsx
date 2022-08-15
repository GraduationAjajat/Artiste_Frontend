import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { ViewBtn } from '../../components/commons/Btns'
import { BlackText } from '../../components/commons/Font'
import Content2D from './Content2D'
import Content3D from './Content3D'
import Comment from './Comment'
import { Link } from 'react-router-dom'
const Content = () => {
    const [view, setView]=useState('2D');
    const [color1, setColor1]=useState('c4c4c4');
    const [color2, setColor2]=useState('');
    const [like, setLike]=useState(false)
    const id="toquf0797"
    const ClickRadio=(e)=>{
        console.log(e.target.value);
        setView(e.target.value);
        if(color1!==''){
          setColor1('');
          setColor2('c4c4c4')
        }else{
          setColor2('');
          setColor1('c4c4c4')
        } 
    }
    const ClickLike=()=>{
      setLike(!like);
    }
  return (
    <ColContainer>
        <HeaderContainer>
            <HeaderContent>
                <div style={{fontSize:'36px', }}>꿈 꾸는 자연</div>
                <Link to={`/profile/${id}`} style={{textDecoration:"none"}}>
                <div>{id}</div>
                </Link> 
            </HeaderContent>
        </HeaderContainer>
        <ContentContainer>
          <RowContainer style={{justifyContent:"space-between"}}>
            <RowContainer style={{gap: "10px"}}>
              <ViewBtn
                value='2D'
                onClick={ClickRadio}
                color={color1} >
                2D
              </ViewBtn>
              <ViewBtn
                value='3D'
                onClick={ClickRadio}
                color={color2} >
                3D
              </ViewBtn>              
            </RowContainer>
            <RowContainer>
              <LikeBtn src={like? '../../imgs/fillheart.svg':'../../imgs/heart.svg'} width="20px"
                onClick={ClickLike}
              ></LikeBtn>
              <BlackText weight="500" size="20px">좋아요</BlackText>
            </RowContainer>
          </RowContainer>

          {view==='2D'?<Content2D/> : <Content3D/>}
          
          
          <Text>
            글 내용
          </Text>    
        </ContentContainer>
        <Comment/>
    </ColContainer>
  )
}

export default Content
const HeaderContainer=styled.div`
    width: 100%;
    height:170px;
    background: url("../../imgs/content_back.svg");
    background-size: cover;
`
const HeaderContent=styled(ColContainer)`
  margin-left: 10%;
  margin-top: 40px;
  align-items: flex-start;
  gap:10px;
`
const ContentContainer=styled.div`
  width: 80%;
  margin: 40px 0;
`
const LikeBtn=styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
const Text=styled.div`
  width: 100%;
  height: 400px;
  margin: 70px 0 100px 0;
`