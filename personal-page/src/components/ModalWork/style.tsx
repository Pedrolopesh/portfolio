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
    background-color: white;
    border-radius: 10px 10px 0px 0px;
`

export const WorkImage = styled.img`
    display: block;
    max-width: 100%;
    width: 90%;
    margin: 0px auto 0px auto;
`

export const UnderScoreMarker = styled.span`
    background-color: #ffffff;
    display: block;
    max-width: 100%;
    height: 10px;
    width: 160px;
    margin: 0px 10px 0px 10px;
    transition: 1s;
`

export const WorkBoxItem = styled.div`
    background-color: white;
    display: block;
    max-width: 100%;
    height: 100px;
    width: 93%;
    margin: 0px 10px 0px 20px;
    border-radius: 0px 0px 10px 10px;
`
