import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    position: absolute;
    /* left: 32%; */
    top: 50%;
    overflow: hidden;
    z-index: 10;
    max-width: 100%;
    width: 100%;

    @media screen and (max-width: 500px){
        flex-direction: column-reverse;
    }
`

export const ContainerMainHome = styled.div`
    max-width: 100%;
    width: 100%;

    @media screen and (max-width: 500px){
        flex-direction: column-reverse;
        display: flex;
    }
`

export const ContainerText = styled.div`
    /* display: block; */
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px auto 0px auto;
    font-size: 20px;
    max-width: 90%;
    width: 70%;

    @media screen and (max-width: 500px){
        width: 100%;
    }
`

export const Card = styled.div`
    width: 35%;
    padding: 10px;
    display: block;
    max-width: 100%;
    border-radius: 15px;
    background-color: white;
    margin: 0px auto 0px auto;

    text-align: center;

    @media screen and (max-width: 1100px){
        width: 65%;
        left: 17%;
    }

    @media screen and (max-width: 500px){
        width: 90%;
        left: 5%;
    }
`

export const WorkButton = styled.button`
    width: 70%;
    border: none;
    padding: 15px;
    display: block;
    color: white;
    transition: 1s;
    max-width: 100%;
    font-size: 20px;
    border-radius: 15px;
    margin: 25px auto 25px auto;
    box-shadow: 4px 5px 10px #19002fa6;
    background: linear-gradient(to right, #290033, #41005a);

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 500px){
        width: 95%;
    }
`

export const Hr = styled.hr`
    margin-top: 20px;
    max-width: 100%;
    width: 60%;
`

export const AnimationScroll = styled.img`
    display: block;
    max-width: 100%;
    width: 8%;
    margin: 20px auto 0px auto;

    @media screen and (max-width: 500px){
        width: 35%;
        margin-bottom: 30px;
    }

`
