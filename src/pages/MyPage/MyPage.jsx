import React , {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import MyComment from './MyComment'
import MyGallery from './MyGallery'
import EditProfile from './EditProfile'
import Scrap from './Scrap'
import axios from 'axios'
import { Link } from 'react-router-dom'
const MyPage = () => {
    const [tab, setTab]=useState(1);
    const [followerCnt, setFollowerCnt]=useState(0);
    const [followingCnt, setFollowingCnt]=useState(0);
    const [follower, setFollower]=useState([{}]);
    const [follow, setFollow]=useState([{}]);
    const [display, setDisplay]=useState(false);
    const [display2, setDisplay2]=useState(false);
    const ClickTab=()=>{
        switch(tab){
            case 1:
                return <MyGallery/>
            case 2:
                return <Scrap/>
            case 3:
                return <MyComment/>
            case 4:
                return <EditProfile/>
        }
    }
    const token=localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] =`Bearer ${token}`;
    useEffect(()=>{
        axios.get('/api/v1/follow/count')
        .then((res)=>{
            console.log(res.data);
            setFollowerCnt(res.data.followerCount)
            setFollowingCnt(res.data.followingCount)
        }
        )
    },[])
   const getFollower=()=>{
    axios.get('/api/v1/follow/follower')
    .then((res)=>{
        console.log(res.data);
        setFollower(res.data.data)
    })
   }
   const getFollow=()=>{
    axios.get('/api/v1/follow/following')
    .then((res)=>{
        console.log(res.data);
        setFollow(res.data.data);
    })
   }
   const clickFollower=(value)=>{
    let id=0;
    for(var i=0;i<follower.length;i++){
        if (follower[i].nickname===value){
            id=follower[i].id;
        }
    }
    window.location.href=`profile/${id}`
   }
   const clickFollow=(value)=>{
    let id=0;
    for(var i=0;i<follow.length;i++){
        if (follow[i].nickname===value){
            id=follow[i].id;
        }
    }
    window.location.href=`profile/${id}`
   }
  return (
      <ColContainer>
        <MyPageContainer>
            <TopSection>
                <BlackText weight={500} size={"32px"}>마이페이지</BlackText>
            </TopSection>
            <ProfileSection>
                <Img src="../../imgs/profileSample.svg"></Img>
                <div>
                    <BlackText size={"24px"} weight={500} style={{marginBottom:"10px"}}>toquf0797</BlackText>
                    <RowContainer style={{gap:"10px", }}>
                        <img src='../../imgs/follow.svg'></img>
                        <BlackText weight={500} size={"20px"} onClick={()=>{setDisplay(!display); getFollower()}}>팔로워</BlackText>
                      
                        <BlackText weight={500} size={"20px"} >{followerCnt}</BlackText>
                        <BlackText weight={500} size={"20px"} onClick={()=>{setDisplay2(!display2); getFollow()}}>팔로우</BlackText>
                        <BlackText weight={500} size={"20px"}>{followingCnt}</BlackText>
                    </RowContainer>
                    <DropDown display={display} onChange={(e)=>{ clickFollower(e.target.value)}}>
                        <option>팔로워 목록</option>
                        {follower.map((obj , i)=>(
                            <option>{obj.nickname}</option> 
                        ))}
                            
                    </DropDown>
                    <DropDown display={display2} onChange={(e)=>{ clickFollow(e.target.value)}} style={{float: "right", marginLeft:"0px"}} >
                        <option>팔로우 목록</option>
                        {
                            follow.map((obj)=>(
                                <option>{obj.nickname}</option>
                            ))
                        }
                    </DropDown>
                </div>
            </ProfileSection>
            <ColContainer style={{width:"80%"}}>
                <RowContainer style={{width:"100%"}}>
                    <Tab onClick={()=>setTab(1)} className={tab===1 ? "focused": ""}>나의 전시회</Tab>
                    <Tab onClick={()=>setTab(2)} className={tab===2 ? "focused": ""}>찜한 목록</Tab>
                    <Tab onClick={()=>setTab(3)} className={tab===3 ? "focused": ""}>작성한 댓글</Tab>
                    <Tab onClick={()=>setTab(4)} className={tab===4 ? "focused": ""}>회원정보 수정</Tab>
                </RowContainer>
                <div style={{display: "flex", width:"100%"}}>
                    <ContentContainer>
                        {ClickTab()}
                    </ContentContainer>
                </div>
            </ColContainer>
        </MyPageContainer>  
      </ColContainer>
    
  )
}

export default MyPage
const MyPageContainer=styled(ColContainer)`
    width:80vw;
    padding: 75px 0;
`
const TopSection=styled.div`
    width: 100%;
    margin-bottom: 30px;
`
const ProfileSection=styled(RowContainer)`
    width: 100%;
    margin-bottom: 60px;
`
const Img=styled.img`
    width:10%;
    margin-right: 30px;
`
const Tab=styled.button`
    width: 100%;
    height: 60px;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
        border-radius: 5px 5px 0px 0px; 
    &.focused{
        background: #E4E4E4;
    }
    font-size:20px;
`
const ContentContainer=styled.div`
    width: 100%;
    height: 470px;
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: #C4C4C4;
    overflow: auto;
`
const DropDown=styled.select`
    display: ${(props)=>(props.display === true ? '' :'none' )};
    margin-left: 35px;
    width: 37%;
    margin-top: 10px;
    height: 30px;
`