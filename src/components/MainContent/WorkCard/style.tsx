import styled from 'styled-components';

export const Items = styled.div`
    position: relative;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    transition: all 0.2s;
    transform: scale(0.98);
    will-change: transform;
    user-select: none;
    cursor: pointer;
`

export const Card = styled.div`
    /* display: block; */
    max-width: 100%;
    background: #2d0922;
    width: 20%;
    border-radius: 15px;
    
    @media screen and (max-width: 700px) {
        width: 100%;
    }

`

export const CardHeader = styled.div`
    display: flex;
    color: white;
    align-items: center;
    background-color: #2E2E2E;
    border-radius: 10px 10px 0px 0px;
    padding: 10px;

    svg {
        font-size: 30px;
    }
`

export const ContainerBody = styled.div`
    display: block;
    border-radius: 10px;
    padding: 15px;
`

export const TitleCard = styled.h1`
    margin: 0;
    display: block;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin: 0px 0px 0px 10px;
`

export const WorkImage = styled.img`
    display: block;
    max-width: 100%;
    width: 40%;
    margin: 20px auto 20px auto;
`

export const CardDescription = styled.div`
    /* font-family: Arial, Helvetica, sans-serif; */
    /* text-align: justify; */
    display: block;
    max-width: 100%;
    width: 100%;
    color: white;
`

export const ComandText = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    color: #8ae234;
`

export const TextCard = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    white-space: normal;
`

export const ButtonWork = styled.a`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    border-radius: 5px;
    max-width: 100%;
    color: white;
    padding: 13px;
    border: none;
    width: 40%;
    align-items: center;
    display: flex;
    text-align: center;
    margin: 35px auto 0px auto;
    margin-bottom: 30px;
    box-shadow: 7px 6px 15px rgb(0 0 0 / 68%) !important;
    background-image: linear-gradient(to right,#8c008c ,#4d0273);
    /* background: purple; */
    transition: 1s;
    cursor: pointer;

    @media screen and (max-width: 700px){
        width: 60%;
    }

    &:hover {
        transform: scale(1.1); 
    }
`

export const ButtonText = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    max-width: 100%;
    text-align: center;
    margin-left: 10px;
    margin-right: auto;
`