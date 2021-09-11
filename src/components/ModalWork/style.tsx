import styled from "styled-components";

export const BGModalWork = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100vh;
    padding: 5px;
    background-color: #000000a0;
    position: absolute;
    z-index: 12;
`

export const Container = styled.div`
    display: block;
    max-width: 100%;
    width: 30%;
    background-color: #ffffff;
    display: block;
    padding: 10px;
    border-radius: 10px;
    top: 15%;
    left: 35%;
    position: absolute;

    @media screen and (max-width: 1300px){
        width: 45%;
        left: 30%;
    }
    
    @media screen and (max-width: 700px){
        width: 95%;
        left: 3%;
    }
`

export const CloseContainer = styled.div`
    width: 5%;
    padding: 5px;
    display: block;
    color: white;
    display: block;
    max-width: 100%;
    margin-left: auto;
    text-align: center;
    border-radius: 6px;
    margin: 0px 0px 10px auto;
    background-color: #000000;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;

    /* @media screen and (max-width: 700px){
        width: 8%;
    } */
    
    @media screen and (max-width: 700px){
        width: 8%;
    }
`

export const CardContainer = styled.div`
    /* background-color: black; */
    border-radius: 10px;
    max-width: 100%;
    width: 100%;
`
export const ContainerSlickWorks = styled.div`
    display: grid;
    padding: 10px 0px 0px 10px;
    overflow: hidden;
    max-width: 100%;
    width: 96.6%;
    /* position: absolute; */

    /* overflow: auto;
    overflow-x: hidden;
    overflow-y: hidden; */
`

export const ContainerWorkItem = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
    transition: 1s;
    /* transform: translateX(10px); */
    `

export const WorkItem = styled.div`
    background: #360043;
    display: flex;
    max-width: 100%;
    width: 160px;
    height: 160px;
    margin: 0px 10px 0px 10px;
    align-items: center;
    background: #360043;
    /* background-image: linear-gradient(to right, #2d002d , #47006b); */
    border-radius: 10px;

    &:hover {
        cursor: pointer;
    }
`

export const WorkImage = styled.img`
    display: block;
    max-width: 100%;
    width: 90%;
    margin: 0px auto 0px auto;

    @media screen and (max-width: 700px){
        width: 80%;
    }
`

export const UnderScoreMarker = styled.span`
    /* background-image: linear-gradient(to right, #2d002d , #47006b); */
    display: block;
    max-width: 100%;
    /* height: 10px; */
    /* width: 160px; */
    margin-left: 85px;
    margin-top: 5px;
    margin-bottom: 5px;
    transition: 1s;
    /* background: #360043; */

    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #360043;
`

export const WorkBoxItem = styled.div`
    /* background-image: linear-gradient(to right, #2d002d , #47006b);
    */
    background: #360043;
    display: block;
    max-width: 100%;
    transition: 1s;
    width: 93%;
    margin: 0px 10px 0px 20px;
    border-radius: 10px;
    box-shadow: 7px 6px 15px rgb(0 0 0 / 68%) !important;
    
    
    @media screen and (max-width: 700px){
        margin: 0px 10px 0px 7px;
        width: 95%;
    }
`

export const ContainerDescription = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;
    padding: 10px;
`

export const Title = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    font-weight: 600;
    margin-top: 30px;
    display: block;
    color: white;
    
    `
export const DescriptionText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: white;

`

export const ButtonWork = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    border-radius: 5px;
    max-width: 100%;
    color: white;
    padding: 13px;
    border: none;
    width: 30%;
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
    margin-left: auto;
    margin-right: 10px;
`
