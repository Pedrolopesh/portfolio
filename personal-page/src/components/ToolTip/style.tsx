import styled from "styled-components";

export const Container = styled.div`
    display: block;
    max-width: 100%;
    width: 30%;

    position: absolute;
    display: block;
    z-index: 12;
    left: 35%;
    top: 14%;
`

export const Card = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;
    height: 300px;
    padding: 5px;
    /* border: 1px solid blue; */
    /* background: linear-gradient(90deg, rgba(144,0,153,1) 0%, rgba(46,0,52,1) 100%); */
    background: linear-gradient(90deg ,rgb(87 0 93) 0%, rgb(30 0 37) 100%);
`

export const ContainerWorks = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;
    height: 290px;
    background-color: black;
`

export const TrianglePointer = styled.span`
    width: 30px;
    height: 25px;
    display: block;
    margin: 0px auto 0px auto;
    border-top: 40px solid #000;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
`