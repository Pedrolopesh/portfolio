import styled from "styled-components";

export const Container = styled.div`
    display: block;
    max-width: 100%;
    top: 130%;
    position: absolute;

    @media (max-width: 400px) {
        top: 150%;
    }
`

export const ContainerCardsInfo = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;
    /* top: 160%; */
    /* position: absolute; */
`

export const ContainerTitle = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;
`

export const SectionTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 40px;
    color: white;
    margin: 0px auto 120px auto;

`

export const CardContainer = styled.div`
    display: flex;
    max-width: 100%;
    width: 95%;
    /* top: 160%; */
    /* position: absolute; */


    @media screen and (max-width: 700px){
        width: 100%;
        &:first-child{
            flex-direction: column-reverse;
        }
        flex-direction: column;
    }
`

export const CardSkillsContainer = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
`


export const Card = styled.div`
    display: block;
    max-width: 100%;
    width: 45%;
    background: white;
    border-radius: 15px;
    padding: 15px 35px 15px 35px;
    left: 10%;

    @media screen and (max-width: 1000px){
        width: 85%;
    }

    @media screen and (max-width: 700px){
        width: 95%;
        margin: 20px auto 0px auto !important;
    }
`

export const CardSkills = styled.div`
    display: block;
    max-width: 100%;
    width: 85%;
    background: white;
    border-radius: 15px;
    padding: 15px;
    margin: 0px auto 0px auto;

    @media screen and (max-width: 1000px){
        width: 95%;
    }
    
    @media screen and (max-width: 700px){
        width: 95%;
    }
`

export const TitleCard = styled.h1`
    display: block;
    font-family: 'Roboto', sans-serif;
    `

export const Separate = styled.hr`
    display: inline-block;
    max-width: 100%;
    width: 40%;
    `

export const CardDescription = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
`

export const AnimationTest = styled.img`
    width: 20%;
    display: block;
    max-width: 100%;
    border-radius: 15px;
    margin: 0px auto 0px 20px;

    @media screen and (max-width: 1400px){
        width: 30%;
    }

    @media screen and (max-width: 1200px){
        width: 40%;
    }

    @media screen and (max-width: 700px){
        margin: 0px auto 0px auto !important;
        width: 80%;
    }
`
