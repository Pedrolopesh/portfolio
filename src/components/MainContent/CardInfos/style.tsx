import styled from "styled-components";

export const Container = styled.div`
    display: block;
    max-width: 100%;
    margin-top: 150px;
    /* top: 130%; */
    /* position: absolute; */

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
    width: 100%;
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
    background: #2d0922;
    width: 55%;
    border-radius: 15px;
    /* left: 10%; */

    @media screen and (max-width: 1000px){
        width: 85%;
    }

    @media screen and (max-width: 700px){
        width: 95%;
        margin: 20px auto 0px auto !important;
    }
`

export const ContainerHeader = styled.div`
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

export const CardSkills = styled.div`
    display: block;
    max-width: 100%;
    width: 85%;
    background: #2d0922;
    border-radius: 15px;
    margin: 0px auto 0px auto;

    @media screen and (max-width: 1000px){
        width: 95%;
    }
    
    @media screen and (max-width: 700px){
        width: 95%;
    }
`

export const TitleCard = styled.h1`
    margin: 0;
    display: block;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin: 0px 0px 0px 10px;
`

// export const Separate = styled.hr`
//     display: inline-block;
//     max-width: 100%;
//     width: 40%;
// `

export const CardDescription = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    color: white;
`

export const ComandText = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    color: #8ae234;
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
