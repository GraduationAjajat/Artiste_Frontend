import React from 'react'
import styled from 'styled-components'
import { RowContainer } from './commons/Container'
const Header = () => {
  return (
   <HeaderContainer>
       <RowContainer>
            <Logo>Artiste</Logo>
            <Btns>
                <div>ARTISTE?</div>
                <div>ART GALLERY</div>
                <div>PAINT ART</div>
                <div>MY PAGE</div>
            </Btns>
       </RowContainer>
       <LoginBtns>
         <Btn>Login</Btn>
         <Btn>Sign Up</Btn>
       </LoginBtns>
   </HeaderContainer>
  )
}

export default Header

const HeaderContainer=styled(RowContainer)`
    padding: 0 10vw;  
    height: 10vh; 
    justify-content: space-between;
    border-bottom: 1px solid rgba(102, 102, 102, 0.25);
`
const Logo=styled.div`
    font-family: 'Italiana', serif;
    font-size: 40px;
    margin-right: 60px;
`
const Btns=styled(RowContainer)`
    font-size: 16px;
    color: #666666;
    gap: 40px;
`
const LoginBtns=styled(RowContainer)`
   gap: 16px;
`
const Btn=styled.button`
    width: 98px;
    height: 40px;
    border: 1px solid #111111;
    border-radius: 8px;
    background-color: white;
`
