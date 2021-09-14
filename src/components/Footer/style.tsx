import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    max-width: 100%;
    width: 100%;
    display: block;
    top: 325%;

    @media screen and (max-width: 700px){
        top: 490%;
    }

    @media screen and (height: 720px){
        top: 530%;
    }

    @media screen and (height: 650px){
        top: 600%;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    max-width: 100%;
    width: 30%;
    margin: 30px auto 0px auto;
    
    @media screen and (max-width: 700px){
        width: 90%;
    }
`

export const FooterTitle = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    text-align: center;
`

export const WorkButtons = styled.a`
    width: 20%;
    border: none;
    display: block;
    cursor: pointer;
    max-width: 100%;
    border-radius: 30px;
    background: linear-gradient(90deg, rgba(54,0,97,1) 0%, rgba(143,0,255,1) 100%);

    &:nth-child(1){
        margin: 0px 20px 0px auto !important;
    }

    &:nth-child(2){
        margin: 0px 20px 0px 20px !important;
    }

    &:nth-child(3){
        margin: 0px auto 0px 20px !important;
    }

    @media screen and (max-width: 700px){
        width: 90%;
    }
`

export const WorkLogo = styled.img`
    display: block;
    max-width: 100%;
    width: 100%;
    margin: 10px auto 10px auto;
    width: 45%;
`

export const HomeButton = styled.button`
    width: 13%;
    padding: 20px;
    border: none;
    display: flex;
    max-width: 100%;
    border-radius: 30px;
    align-items: center;
    margin: 100px auto 0px auto;
    cursor: pointer;
    background: linear-gradient(90deg, rgba(54,0,97,1) 0%, rgba(143,0,255,1) 100%);
    
    @media screen and (max-width: 700px) {
        margin: 40px auto 0px auto;
        width: 65%;
    }
`

export const HomeLogo = styled.img`
    display: block;
    width: 15%;
    margin: 0px 0px 0px auto;
`

export const ButtonText = styled.span`
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 20px;
    margin: 0px auto 0px 20px;
`