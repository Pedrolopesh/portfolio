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
`

export const CardContainer = styled.div`
    background-color: black;
    border-radius: 10px;
    max-width: 100%;
    width: 100%;
    height: 440px;
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
    display: flex;
    max-width: 100%;
    width: 160px;
    height: 160px;
    margin: 0px 10px 0px 10px;
    align-items: center;
    /* background-image: linear-gradient(to right, #2d002d , #47006b); */
    border-radius: 10px 10px 0px 0px;

    &:hover {
        cursor: pointer;
    }
`

export const WorkImage = styled.img`
    display: block;
    max-width: 100%;
    width: 90%;
    margin: 0px auto 0px auto;
`

export const UnderScoreMarker = styled.span`
    /* background-image: linear-gradient(to right, #2d002d , #47006b); */
    display: block;
    max-width: 100%;
    height: 10px;
    width: 160px;
    margin: 0px 10px 0px 10px;
    transition: 1s;
`

export const WorkBoxItem = styled.div`
    background-image: linear-gradient(to right, #2d002d , #47006b);
    display: block;
    max-width: 100%;
    transition: 1s;
    width: 93%;
    margin: 0px 10px 0px 20px;
    border-radius: 0px 0px 10px 10px;
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
    background: purple;
    max-width: 100%;
    color: white;
    padding: 13px;
    border: none;
    width: 30%;
    align-items: center;
    display: flex;
    text-align: center;
    margin: 20px auto 0px auto;
`

export const ButtonText = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    max-width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: 10px;
`
