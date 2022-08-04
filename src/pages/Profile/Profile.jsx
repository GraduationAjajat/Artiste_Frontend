import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { GrayText } from '../../components/commons/Font'
import { GrayInput } from '../../components/commons/Inputs'
import Grid from '../Gallery/Grid'
const Profile = () => {
  return (
    <ColContainer>
    <GalleryContainer>
        <TopContainer>
            <GrayText size={"32px"}>toquf0797<br/>GALLERY</GrayText>
            <GrayInput placeholder='전시회명을 검색해보세요!'></GrayInput>
        </TopContainer>
        <GridContainer>
            <Grid/>
        </GridContainer>
    </GalleryContainer>    
</ColContainer>

  )
}

export default Profile
const GalleryContainer=styled(ColContainer)`
    margin:50px 0;
    width: 80vw;
    justify-content: flex-start;
`
const TopContainer=styled(RowContainer)`
    width:100%;
    justify-content: space-between;
    margin-bottom:60px;
`
const Tags=styled(RowContainer)`
    width: 100%;
    justify-content: flex-start;
    margin: 35px 0;
    gap: 45px;
`
const RadioBtns=styled(RowContainer)`
    width: 100%;
    justify-content: flex-start;
    gap: 26px;
    margin-bottom: 35px;
`
const RadioBtn=styled.input`
    appearance: none;
    width:30px;
    height:30px;
    border: 2px solid #000000;
    vertical-align: middle;
    border-radius: 100%; 
    margin-right: 10px;
    margin-bottom: 5px;
    :checked{
        background-color: #000000;
    }
`
const Label=styled.label`
`
const GridContainer=styled.div`
    width: 100%;
`