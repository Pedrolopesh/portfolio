import styled from "styled-components";

    
export const Container = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;
    position: fixed;
    z-index: 100;

    .show-dropdown{
        /* background-color: red !important; */
        animation: animationShow-dropDown 1s ease;    

        @keyframes animationShow-dropDown {
            0% { transform: translateX(-150%); } 100% { transform: translateX(0%); }
        }

    }

    .hide-dropdown{
        /* background-color: black; */
        transform: translateX( -150% );
        animation: animationHide-dropDown 1s ease;    

        @keyframes animationHide-dropDown {
            0% { transform: translateX(0%); } 100% { transform: translateX( -150% ); }
        }
    }
`
    
export const DropDownContainer = styled.div`
    background-color: #f3f3f3;
    border-radius: 5px;
    margin-left: 20px;
    display: block;
    max-width: 100%;
    width: 10%;

    @media screen and (max-width: 800px){
        width: 30%;
    }

`
    
export const ButtonChangeLang = styled.button`
    font-family: 'Roboto', sans-serif;
    display: block;
    color: #ffffff;
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
    transition: 0.5s;
    border: none;
    border-radius: 5px;
    margin: 10px 0px 2px 10px;
    border: 1px solid white;
    background: linear-gradient(to right,#e2986a,#25067d);
    /* &:hover {
        background-color: #bfbfbf;
        transform: translate(10px, -5px);
        border-radius: 5px;
    } */
`

export const DropDownOption = styled.span`
    font-family: 'Roboto', sans-serif;
    display: block;
    color: black;
    padding: 5px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.5s;
    
    &:hover {
        background-color: #bfbfbf;
        transform: translate(10px, -5px);
        border-radius: 5px;
    }

`