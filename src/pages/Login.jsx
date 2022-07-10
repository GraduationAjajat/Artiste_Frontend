import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../components/commons/Container'
const Login = () => {
  return (
    <LoginContainer>
      <ImgContainer>
       <Img src='../imgs/LoginImg.svg'></Img>
      </ImgContainer>
      <Content>
        <Title>로그인</Title>
        <Form>
          <Subtitle>이메일</Subtitle>
          <Input></Input>
          <Subtitle>비밀번호</Subtitle>
          <Input></Input>
          <Search>
            <div>아이디 찾기</div>
            <div>비밀번호 찾기</div>
            <div>회원가입</div>
          </Search>
          <Btn>
            로그인
          </Btn>
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
const Title=styled.div`
  font-weight: 500;
  font-size: 32px;  
  color: #333333;
  margin-bottom: 40px;
`
const Form=styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Subtitle=styled.div`
  font-size: 16px;
  color: #666666;
  margin-bottom: 4px;
`
const Input=styled.input`
  height: 56px;
  width: 100%;
  border: 1px solid rgba(102, 102, 102, 0.35);
  border-radius: 12px;
  margin-bottom: 24px;
`
const Search=styled(RowContainer)`
  width: 100%;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom: 40px;
`
const Btn=styled.button`
  width: 80%;
  height: 64px;
  background: #111111;
  opacity: 0.25;
  border-radius: 32px;
  color: white;
  font-size: 22px;
  align-self: center;
`