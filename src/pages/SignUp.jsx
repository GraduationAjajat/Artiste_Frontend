import React, {useState} from 'react'
import styled from 'styled-components'
import { BorderBtn, GrayRoundBtn } from '../components/commons/Btns'
import { RowContainer, ColContainer } from '../components/commons/Container'
import { BlackText, GrayText } from '../components/commons/Font'
import { GrayRoundInput } from '../components/commons/Inputs'
import axios from 'axios'

const SignUp = () => {
  const [sex, setSex]=useState(0)
  const [agree1, setAgree1]=useState(false);
  const [agree2, setAgree2]=useState(false);
  const [email, setEmail]=useState('');
  const [pw, setPw]=useState('');
  const [pwConfirm, setPwConfirm]=useState('');
  const [name, setName]=useState('');
  const [nickname, setNickname]=useState('');
  const [birth, setBirth]=useState('');
  const [img, setImg]=useState('');
  const handleClick=(e)=>{
    if (sex===0){
      setSex(1);
    }else{
      setSex(0)
    }
  }
  const onChangeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const clickCheckEmailBtn=()=>{
    console.log(email)
    axios.get(`/api/v1/user/check/email/${email}`)
    .then((res)=>{
      if (res.data===false){
        setEmailMessage('사용 가능한 아이디입니다.');
      }else{
        setEmailMessage('이미 존재하는 아이디입니다.');
      }
    })
  }
  const clickCheckNicknameBtn=()=>{
    axios.get(`/api/v1/user/check/nickname/${nickname}`)
    .then((res)=>{
      if (res.data===false){
        setNicknameMessage('사용 가능한 닉네임입니다.');
      }else{
        setNicknameMessage('이미 존재하는 닉네임입니다.');
      }
    })
  }
  //오류메시지
  const [emailMessage, setEmailMessage]=useState('');
  const [pwMessage, setPwMessage]=useState('');
  const [pwConfirmMessage, setPwConfirmMessage]=useState('');
  const [nicknameMessage, setNicknameMessage]=useState('');

  //유효성 검사 
  const [isPwConfirm, setIsPwConfirm]=useState(false);

  const onChangePw=(e)=>{
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const pwCurrent=e.target.value;
    setPw(pwCurrent);
      if(!passwordRegex.test(pwCurrent)){
        setPwMessage('알파벳, 숫자, 특수문자 조합으로 8자리 이상 입력해주세요');
      }else{
        setPwMessage('안전한 비밀번호에요');
      }
  }
  const onChangePwConfirm=(e)=>{
    const pwConfirmCurrent=e.target.value;
    setPwConfirm(pwConfirmCurrent);
      if (pw === pwConfirmCurrent){
        setPwConfirmMessage('비밀번호가 일치합니다.');
      }else{
        setPwConfirmMessage('비밀번호가 다릅니다. 올바르게 입력해주세요')

      }
  }
  const onChangeName=(e)=>{
    setName(e.target.value);
  }
  const onChangeNickname=(e)=>{
    setNickname(e.target.value);
  }
  const onChangeBirth=(e)=>{
    setBirth(e.target.value);
  }
  const clickSubmit=(e)=>{
    axios.post('/api/v1/user/signup',{
      birthday: birth,
      email: email,
      gender: sex,
      nickname: nickname, 
      password: pw,
      profileImage: img,
      username: name
    })
    .then((res)=>{
      console.log(res.data);
    })
  }
  
  return (
    <SignUpContainer>
      <ImgContainer>
        <Img src='../imgs/LoginImg.svg'></Img>
      </ImgContainer>
      <Content>
        <BlackText size={"32px"} weight={500}>회원가입</BlackText>
        <GrayText marginTop={"4px"}>아르티스트를 이용하시려면 회원가입을 진행해주세요</GrayText>
        <Form>
          <InputText>이메일</InputText>
          <Label>
            <GrayRoundInput onChange={(e)=>onChangeEmail(e)}/>
            <CheckEmailBtn type='button' onClick={()=>clickCheckEmailBtn()}>중복확인</CheckEmailBtn>
          </Label>
          <GrayText>{emailMessage}</GrayText>
          <InputText>비밀번호</InputText>
          <GrayRoundInput onChange={(e)=>onChangePw(e)} type={'password'}/>
          <GrayText>{pwMessage}</GrayText>
          <InputText>비밀번호 확인</InputText>
          <GrayRoundInput onChange={(e)=>onChangePwConfirm(e)} type={'password'}/>
          <GrayText>{pwConfirmMessage}</GrayText>
          <InputText>이름</InputText>
          <GrayRoundInput onChange={(e)=>onChangeName(e)}/>
          <InputText>닉네임</InputText>
          <Label>
            <GrayRoundInput onChange={(e)=>onChangeNickname(e)}/>
            <CheckEmailBtn type='button' onClick={()=>clickCheckNicknameBtn()}>중복확인</CheckEmailBtn>
          </Label>
          <GrayText>{nicknameMessage}</GrayText>
          <InputText>생년월일</InputText>
          <GrayRoundInput placeholder='YYYY-MM-DD' onChange={(e)=>onChangeBirth(e)}/>

          <InputText>프로필사진</InputText>
          <input type='file' onChange={(e)=>setImg(e.target.value)}></input>

          <GrayText marginTop={"24px"}>성별</GrayText>
          <RowContainer style={{margin: "15px 0 20px 0"}}>
            {sex===0?<img src='../imgs/checked.svg' onClick={handleClick}></img> : <img src='../imgs/unchecked.svg' onClick={handleClick}></img> }
            <CheckText>남성</CheckText>
            {sex===1?<img src='../imgs/checked.svg' onClick={handleClick}></img> : <img src='../imgs/unchecked.svg' onClick={handleClick}></img> }
            <CheckText>여성</CheckText>
          </RowContainer>
          <hr></hr>


          <RowContainer>
            {agree1 ===true ? <img src='../imgs/checked.svg' onClick={()=>setAgree1(!agree1)}/>
              : <img src='../imgs/unchecked.svg' onClick={()=>setAgree1(!agree1)}/>}
            <CheckText>이용약관에 동의합니다. &#40;필수&#41;  </CheckText>
          </RowContainer>
          <RowContainer style={{margin:"20px 0 40px 0"}}>
            {agree2 ===true ? <img src='../imgs/checked.svg' onClick={()=>setAgree2(!agree2)}/>
              : <img src='../imgs/unchecked.svg' onClick={()=>setAgree2(!agree2)}/>}
            <CheckText>개인정보 수집 및 이용에 동의합니다. &#40;필수&#41;  </CheckText>
          </RowContainer>
         
          <GrayRoundBtn onClick={()=>clickSubmit()}>회원가입</GrayRoundBtn>
        </Form>
        
      </Content>
    </SignUpContainer>
  )
}

export default SignUp
const SignUpContainer=styled(RowContainer)`  
`
const ImgContainer=styled.div`
  width:55%;
  height: 1300px;
`
const Img=styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`
const Content=styled(ColContainer)`
  width: 45%;
  height: 100%;
  padding: 53px 93px 0 93px;
  align-items: flex-start;
`
const Form=styled.form`
  width: 100%;
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  align-items: flex-start;
`
const InputText=styled(GrayText)`
  margin-top: 24px;
`
const CheckText=styled(BlackText)`
  margin-left: 5px;
  margin-right: 20px;
`
const CheckEmailBtn=styled(BorderBtn)`
  position: absolute;
  right: 10px;
  top: 13px;
`
const Label=styled.label`
  position: relative;
  width: 100%;
`