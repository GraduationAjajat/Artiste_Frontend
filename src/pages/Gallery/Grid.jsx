import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/commons/Container'
import { BlackText } from '../../components/commons/Font'
import { Link } from 'react-router-dom'
const Grid = () => {
    const contents=["1","2","3","4","5","6"]
  return (
    <ColContainer>
        <GridContainer>
            {contents.map((content)=>(
                <CardContainer>
                    <Link to={`content/${content}`} style={{ textDecoration: 'none' }}>
                        <Img src='../../imgs/sampleImg.png'></Img>
                        <Content>
                        <RowContainer style={{justifyContent:"space-between"}}>
                            <BlackText size="20px" weight="700">{content}</BlackText>
                            <BlackText size="15px">2022.06.29</BlackText>
                        </RowContainer>
                        <RowContainer style={{justifyContent:"space-between"}}>
                            <BlackText size="15px">toquf0797</BlackText>
                            <RowContainer>
                                <img src='../../imgs/heart.svg'></img>
                                <Num>13</Num>
                                <img src='../../imgs/comment.svg'></img>
                                <Num>7</Num>
                            </RowContainer>
                        </RowContainer>
                        </Content>
                    </Link>
                </CardContainer>
            ))}
        </GridContainer>
    </ColContainer>
  )
}

export default Grid

const GridContainer=styled(RowContainer)`
    width: 100%;
    //justify-content: space-between;
    flex-wrap: wrap;
    gap:50px 5%;
`
const CardContainer=styled(ColContainer)`
    width: 30%;
    height: 360px;
    margin-bottom: 100px;
`
const Img=styled.img`
    width: 100%;
`
const Content=styled.div`
    margin-top: 16px;
    width: 100%;
  
`
const Num=styled(BlackText)`
    font-size: 15px;
    font-weight: 500px;
    margin: 0 9px 0 6px;
`