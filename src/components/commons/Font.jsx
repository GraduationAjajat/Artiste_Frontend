import styled from 'styled-components'

export const BlackText=styled.div`
    font-size: ${props=> props.size};
    color: #333333;
    font-weight: ${props=> props.weight};
    margin-top: ${props=> props.marginTop};
`
export const GrayText=styled.div`
    font-size: ${props=> props.size ? props.size : "16px"};
    color: #666666;
    font-weight: ${props=> props.weight};
    margin-top: ${props=> props.marginTop};
`
