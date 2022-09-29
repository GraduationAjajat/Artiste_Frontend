import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BorderBtn, ViewBtn } from '../../components/commons/Btns'
import { BlackText } from '../../components/commons/Font'
import Content2D from './Content2D'
import Content3D from './Content3D'
import Comment from './Comment'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Content = () => {

    const params=useParams();
    const [view, setView]=useState('2D');
    const [color1, setColor1]=useState('c4c4c4');
    const [color2, setColor2]=useState('');
    const [like, setLike]=useState(false);
    const [content, setContent]=useState({});
    const [artist, setArtist]=useState({});
    const [artList, setArtList]=useState([]);
    const [comment, setComment]=useState([]);
    const [follow, setFollow]=useState(false);
    
    const ClickRadio=(e)=>{
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
      console.log(artist)
      if(like===true){
        setLike(!like);
        axios.delete(`/api/v1/scrap/unscrap/${params.id}`)
          .then((res)=>console.log(res.data));
      }else{
      setLike(!like);
      axios.post(`/api/v1/scrap/${params.id}`)
        .then((res=>{
            console.log(res.data);
        }))
      }
    }
    const clickFollow=()=>{
      if (follow===true){
        //팔로우 취소
        setFollow(!follow);
        axios.delete(`/api/v1/follow/following/${artist.id}`)
        .then((res)=>console.log(res.data))
      }else{
        //팔로우 추가
        setFollow(!follow);
        axios.post(`/api/v1/follow/${artist.id}`)
        .then((res)=>console.log(res.data))
      }
    }
    const token=localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] =`Bearer ${token}`;
    useEffect(()=>{
      axios.get(`/api/v1/exhibition/${params.id}`)
      .then((res)=>{
        
          setContent(res.data);
          setArtist(res.data.exhibitionArtist);
          setArtList(res.data.artList);
          console.log(res.data.exhibitionArtist);
          axios.get(`/api/v1/follow/check/${res.data.exhibitionArtist.id}`)
          .then((res)=>{
            console.log(res.data)
            if (res.data===true){
              setFollow(true)
            }else{
              setFollow(false)
            }
          })
      })
      
      axios.get(`/api/v1/comment/${params.id}`)
      .then((res)=>{
        console.log(res.data.data);
        setComment(res.data.data);
      })
      axios.get(`/api/v1/scrap/check/${params.id}`)
      .then((res)=>{
        if (res.data===true){
          setLike(true);
        }
      })

  },[])

  return (
    <ColContainer>
       <HeaderContainer>
            <HeaderContent>
                <div style={{fontSize:'36px', }}>{content.exhibitionName}</div>
            {/* 여기서 content.exhibitionArtist.ninkname이렇게 하지말고 각각 다 state로 만들면 오류 안남 */}
          <RowContainer style={{gap: '15px'}}>
            <div>{artist.nickname}</div>
            
            <FollowBtn onClick={clickFollow} color={follow}>팔로우</FollowBtn>
          </RowContainer>
          
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

          {view==='2D'?<Content2D artList={artList}/> : <Content3D/>}
          
          
          <Text>
            {content.exhibitionDesc}
          </Text>
         
          
        </ContentContainer>
        <Comment comments={comment}/>
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
const FollowBtn=styled.button`
  background-color: ${props=>props.color? 'black' : 'transparent'};
  border-radius: 5px;
  border: 1px solid;
  color: ${props=>props.color ? 'white': 'black'};
  padding: 4px 9px;
`