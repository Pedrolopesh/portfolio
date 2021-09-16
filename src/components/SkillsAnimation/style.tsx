import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    max-width: 100%;
    margin: 25px 0px 25px 0px;

    @media screen and (max-width: 700px){
        flex-direction: column;
    }
`


export const LeftContainer = styled.div`
    display: block;
    max-width: 100%;
    width: 50%;

    @media screen and (max-width: 700px){
        width: 100%;
    }
`

export const RigthContainer = styled.div`
    display: block;
    max-width: 100%;
    width: 50%;
    
    @media screen and (max-width: 700px){
        width: 100%;
    }
`