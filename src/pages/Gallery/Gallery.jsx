import React, {useState}from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { RowContainer,ColContainer } from '../../components/commons/Container'
import { GrayText } from '../../components/commons/Font'
import { GrayInput } from '../../components/commons/Inputs'
import Grid from './Grid'

const Gallery = () => {
    const radios=['최신순', '조회순', '좋아요순'];

    const [sort, setSort]=useState('최신순');
    const ClickRadio=(e)=>{
        console.log(e.target.value);
        setSort(e.target.value);
    }
    
    const token=localStorage.getItem("token");
    useEffect(()=>{
        axios.get('/api/v1/exhibition',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(res.data);
        })
        
    },[])

  return (
    <ColContainer>
        <GalleryContainer>
            <TopContainer>
                <GrayText size={"32px"}>ART<br/>GALLERY</GrayText>
                <GrayInput placeholder='전시회명을 검색해보세요!'></GrayInput>
            </TopContainer>
            <Tags>
                <div>#풍경</div>
                <div>#풍경</div>
                <div>#풍경</div>
                <div>#풍경</div>
                <div>#풍경</div>
            </Tags>
            <RadioBtns>
                {radios.map((radio)=>(
                    <Label>
                        <RadioBtn
                            type="radio"
                            value={radio}
                            checked={sort===radio}
                            onChange={ClickRadio}
                        ></RadioBtn>
                        {radio}
                    </Label>
                ))}        
            </RadioBtns>
            <GridContainer>
                <Grid/>
            </GridContainer>
        </GalleryContainer>    
    </ColContainer>
  
  )
}

export default Gallery
const GalleryContainer=styled(ColContainer)`
    margin:30px 0;
    width: 80vw;
    justify-content: flex-start;
`
const TopContainer=styled(RowContainer)`
    width:100%;
    justify-content: space-between;
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