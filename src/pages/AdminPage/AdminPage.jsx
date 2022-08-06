import React , {useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import ListContainer from '../MyPage/commons/ListContainer'
import QnA from './QnA'
import Edit from './Edit'
import User from './User'
const AdminPage = () => {
    const [tab, setTab]=useState(1);

    const ClickTab=()=>{
        switch(tab){
            case 1:
                return <ListContainer/>//props로 admiin 페이지임을 알려주기 
            case 2: 
                return <QnA/>
            case 3:
                return <User/>
            case 4:
                return <Edit/>
        }
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
                        <BlackText size={"20px"}>admin</BlackText>
                </div>
            </ProfileSection>
            <ColContainer style={{width:"80%"}}>
                <RowContainer style={{width:"100%"}}>
                    <Tab onClick={()=>setTab(1)} className={tab===1 ? "focused": ""}>전시 승인 대기</Tab>
                    <Tab onClick={()=>setTab(2)} className={tab===2 ? "focused": ""}>문의사항</Tab>
                    <Tab onClick={()=>setTab(3)} className={tab===3 ? "focused": ""}>회원 관리</Tab>
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

export default AdminPage
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
 