import styled from "styled-components";

export const GrayRoundBtn=styled.button`
    width: 80%;
    height: 64px;
    background: #111111;
    opacity: 0.25;
    border-radius: 32px;
    color: white;
    font-size: 22px;
    align-self: center;
`
export const BlackBtn=styled.button`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background: #111111;
    border-radius: 18px;
    border-color: #111111;
    color: white;
    font-weight: 500;
    font-size: 22px;
`