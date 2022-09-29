import axios from 'axios'
import React , {useState, useEffect}from 'react'
import styled from 'styled-components'
import { BorderBtn } from '../../components/commons/Btns'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import { Line } from '../../components/commons/Line'

const QnA = () => {
  const [display, setDisplay]=useState([])
  const [content, setContent]=useState('');
  const [qna, setQna]=useState([]);
  useEffect(()=>{
    axios.get('/api/v1/qna')
    .then((res)=>{
      console.log(res.data.data)
      setQna(res.data.data)
      for (let i=0;i<res.data.count;i++){
        display[i]=false;
      }
    })
  },[])
  const clickArrow=(id)=>{
    console.log(id)
    setDisplay(
      display.map((ele,i)=>(
      i===id 
      ?
      ele=!ele
      :
      ele=false
    ))
    )

    //setDisplay(!display);
  }
  const onSubmit=(id)=>{
    axios.put('/api/v1/admin/qna',{
      qnaAnswer: content,
      qnaId:id
    })
    .then((res)=>{
      console.log(res.data)
      setDisplay(!display);
    })
  }
  return (
    <ColContainer>
    <QnAContainer>
      {
        qna.map((q,id)=>(
          <>
           <ContentContainer>
          <Left>
            <BlackText style={{marginBottom:"15px"}} weight={"700"}>{q.user.nickname}</BlackText>
            <BlackText >{q.qnaContent}</BlackText>
          </Left>
          <Right>
            <BlackText size={"15px"}>{q.createdDate.substr(0,10)}</BlackText>
            {
              q.qnaAnswer ===null
              ?(
                
                  display[id]===true
                  ?
                  <Btn src='../../imgs/upArrow.svg' onClick={()=>clickArrow(id)}></Btn>
                  :
                  <Btn src='../../imgs/downArrow.svg' onClick={()=>clickArrow(id)}></Btn>
      
              )
              :
              <>
              <BorderBtn style={{backgroundColor:'#e4e4e4', border:'none'}}>답변작성완료</BorderBtn>
              </>

            }
            
            
          </Right>
        </ContentContainer>
        <ExpandContainer display={display[id]}>
         
            <Input onChange={(e)=>setContent(e.target.value)}></Input>
            <SubmitBtn onClick={()=>{onSubmit(q.id)}}>작성 완료</SubmitBtn>
         
  
        </ExpandContainer>
        <Line/>
          </>
        
        ))
      }
     </QnAContainer>
    </ColContainer>
  )
}
export default QnA
const QnAContainer=styled(ColContainer)`
  width: 90%;
  padding-top: 20px;
`
const ContentContainer=styled(RowContainer)`
  width: 90%;
  padding: 40px 0;
  justify-content: space-between;
  
`
const Left=styled.div`
  width: 87%;
  
`
const Right=styled(ColContainer)`
  width: 13%;
  gap: 15px;
`
const Btn=styled.img`
 margin-top: 10px;
`
const ExpandContainer=styled.div`
  width: 90%;
  padding: 0 5% 20px 5%;
  display: ${props=>props.display ===true ? '': 'none'};
`


const Input=styled.textarea`
  width: 100%;
  height: 60px;
  background-color: #E4E4E4;
  border-radius: 10px;
  padding: 10px;
  border-color: #E4E4E4;
  :focus{
    outline: none;
  }
`
const SubmitBtn=styled.button`
   
    height: 35px;
    border: 1px solid #111111;
    border-radius: 8px;
    background-color: white;
    float: right ;
`