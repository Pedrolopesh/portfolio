import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;

`

export const ContainerLeft = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;

    @media screen and (max-width: 1200px){
        width: 45%;
    }
`

export const ContainerTexts = styled.div`
    display: block;
    max-width: 100%;
    width: 85%;
    /* padding: 30px; */
    margin: 200px 0px 0px auto;
`

export const ContainerButtons = styled.div`
    display: flex;
    max-width: 100%;
    width: 85%;
    /* padding: 30px; */
    margin: 200px 0px 0px auto;
`

export const WorkButton = styled.button`
    width: 250px;
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
    background: linear-gradient(to right, #e2986a, #25067d);

    &:nth-child(2){
        background: linear-gradient(to right, #25067d, #e2986a);
    }
    flex-wrap: wrap;

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 1300px){
        margin: 25px 10px 25px 10px;
    }
`

export const BannerTitle = styled.h1`
    font-family: 'Roboto';
    color: white;
`

export const UnderScore = styled.hr`
    max-width: 100%;
    display: block;
    width: 40%;
    margin: 0px auto 0px 0px;
    height: 7px;
    border-radius: 100px;
    background: linear-gradient(to right, #e2986a, #25067d);
    border: none;

`

export const TextDescription = styled.p`
    font-family: 'Roboto';
    color: white;
`

export const ContainerRigth = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;
`

export const BgWhite = styled.img`
    display: block;
    max-width: 100%;
    width: 80%;
    margin: 0px 0px 0px auto;

    @media screen and (max-width: 1300px){
        width: 100%;
    }
`

export const ContainerAssetsAnimation = styled.div`
    display: block;
    max-width: 100%;
    /* width: 50%; */
    position: absolute;

    @media screen and (max-width: 1900px){
        width: 40%;
    }

    @media screen and (max-width: 1300px){
        width: 30%;
    }

    @media screen and (max-width: 1200px){
        width: 45%;
    }
`

export const CubeAnimation = styled.img`
    display: block;
    max-width: 100%;
    width: 20%;
    margin: 40px 335px 0px auto;

    animation: animationBarReact-responsive 5s infinite;
    
    @media screen and (max-width: 1300px){
        margin: 20px 165px 0px auto;
    }

    @media screen and (max-width: 1900px){
        width: 25%;
        margin: 40px 20px 0px auto;
    }
    
    @keyframes animationBarReact-responsive {
        0% { transform: translateY(0px); } 
        50% { transform: translateY(-16px);}
        100% { transform: translateY(0px); }
    }
`

export const ComputerAnimation = styled.img`
    display: block;
    max-width: 100%;
    width: 40%;
    margin: 60px 40px 0px auto;
    
    animation: animationBarReact-responsive 5s infinite;  
    
    
    @media screen and (max-width: 1900px){
        /* width: 55%; */
        margin: 10px 0px 0px auto;
        /* margin: 10px ​0px 0px auto; */
    }
    
    @media screen and (max-width: 1300px){
        width: 55%;
        margin: 0px 20px 0px auto;
    }

    @keyframes animationBarReact-responsive {
        0% { transform: translateY(0px); } 
        50% { transform: translateY(-16px);}
        100% { transform: translateY(0px); }
    }
`