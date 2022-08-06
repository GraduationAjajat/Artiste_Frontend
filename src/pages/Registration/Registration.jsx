import React, {useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText, GrayText } from '../../components/commons/Font'
import { GrayRoundInput } from '../../components/commons/Inputs'
import { CategoryList } from '../../components/CategoryList'
import ImageRegister from './ImageRegister'

const Registration = () => {
    
    const [checkedList, setCheckedList]=useState([false, false,false, false,false, false,false, false ]);
    
   const [component, setComponent]=useState([<ImageRegister/>]);

    const onCheckList=(item)=>{
        if(checkedList[item.id]==false){
            checkedList[item.id]=true;
            
        }else if(checkedList[item.id]==true){
            checkedList[item.id]=false;
        }
        setCheckedList([...checkedList]);
        console.log(checkedList)
    }
    const addComponent=()=>{
        component.push(<ImageRegister/>);
        setComponent([...component]);
    }
    const renderComponent=()=>{
        return component;
    }
  return (
    <RegistrationContainer>
        <Container>
            <ContentContainer>
               <div style={{margin: "50px 0"}}>
                    <BlackText weight={"500"} size={"32px"} >미술 전시회 개최</BlackText>
                    <GrayText>나만의 미술 전시회를 개최해보세요</GrayText>
               </div>
                <ColContainer style={{gap: "20px"}}>
                    <Content>
                        <GrayText>전시회명</GrayText>
                        <GrayRoundInput/>
                    </Content>
                    <Content>
                        <GrayText>전시 기간</GrayText>
                        <GrayRoundInput/>
                    </Content>
                    <Content>
                        <GrayText>전시회 특징 (복수선택가능)</GrayText>
                        <Checks>
                            {
                                CategoryList.map((item)=>(
                                    <RowContainer onClick={()=>onCheckList(item)} style={{gap:"5px"}}>
                                        {
                                            checkedList[item.id]===true
                                            ?<img src='../../imgs/checked.svg'></img>
                                            :<img src='../../imgs/unchecked.svg'></img>
                                        }
                                        <BlackText >{item.name}</BlackText>
                                    </RowContainer>    
                                ))
                            }
                        </Checks>
                    </Content>
                    <Content>
                        <GrayText>전시회 설명</GrayText>
                        <ContentArea></ContentArea>
                    </Content>
                    <Content>
                        <GrayText>작품 등록 ( 최대 10개 )</GrayText>
                        <div style={{fontSize:" 13px ", color:"#C4C4C4"}}> 변환할 사진과 원하는 화풍 사진을 추가한 후, 전시될 작품을 미리보기로 확인하세요!</div>
                    </Content>
                    {renderComponent()}
                   
                    <AddBtn src='../../imgs/AddBtn.svg' onClick={addComponent}/>
                    <RegisterBtn>전시회 신청</RegisterBtn>
            
                </ColContainer>
                
            </ContentContainer>
        </Container>
       
       
       
    </RegistrationContainer>
  )
}

export default Registration
const RegistrationContainer=styled(RowContainer)`
    width: 100vw;
    height: 100vh;
`
const Container=styled(ColContainer)`
    width: 60%;
    height: 100%;
`
const ContentContainer=styled.div`
    width: 70%;
    
`
const ImgContainer=styled.div`
    width: 40%;
`
const Img=styled.img`
`
const Content=styled(ColContainer)`
    width: 100%;
    align-items: flex-start;
    gap:5px;
`
const Checks=styled(RowContainer)  `
    width: 100%;
    gap: 2%;
`
const ContentArea=styled.textarea`
    width: 100%;
    height: 150px;
    border: 1px solid rgba(102, 102, 102, 0.35);
    border-radius: 12px;
`
const AddBtn=styled.img `
    width: 100%;
    height: 30px;
`
const RegisterBtn=styled.button`
    height: 64px;
    width: 100%;
background: #111111;
opacity: 0.25;
border-radius: 32px;
    color:white;
`