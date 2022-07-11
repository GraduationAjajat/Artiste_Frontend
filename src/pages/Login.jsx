import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../components/commons/Container'
import { BlackText, GrayText } from '../components/commons/Font'
import { GrayRoundBtn } from '../components/commons/Btns'
import { GrayRoundInput } from '../components/commons/Inputs'
const Login = () => {
  return (
    <LoginContainer>
      <ImgContainer>
       <Img src='../imgs/LoginImg.svg'></Img>
      </ImgContainer>
      <Content>
        <BlackText size={"32px"} weight={500}>로그인</BlackText>
        <Form>
          <GrayText>이메일</GrayText>
          <GrayRoundInput/>
          <GrayText>비밀번호</GrayText>
          <GrayRoundInput/>
          <Search>
            <div>아이디 찾기</div>
            <div>비밀번호 찾기</div>
            <div>회원가입</div>
          </Search>
          <GrayRoundBtn>로그인</GrayRoundBtn>
        </Form>
      </Content>
    </LoginContainer>
  )
}

export default Login
const LoginContainer=styled(RowContainer)`
`
const ImgContainer=styled.div`
  width:55%;
  height: 90vh;
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
  margin-top: 40px;
  flex-direction: column;
  align-items: flex-start;
`
const Search=styled(RowContainer)`
  width: 100%;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 40px;
`
