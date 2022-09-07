import React from 'react'
import styled from 'styled-components'
import { RowContainer } from '../../components/commons/Container'
const Content2D = ({artList}) => {
  console.log(artList);
  return (
    <Container>
      <RowScrollContainer>
        {
          artList.map((art)=>(
            <Img src={art.artImage}></Img>
          ))
        }
        
      </RowScrollContainer>
    </Container>
  )
}

export default Content2D

const Container=styled.div`
  width:100%;
`
const RowScrollContainer=styled(RowContainer)`
  height: 400px;
  width: 100%;
  white-space: nowrap;
  gap: 5%;
  overflow-x: auto;
`
const Img=styled.img`
  width: 330px;
  height: 350px;
`