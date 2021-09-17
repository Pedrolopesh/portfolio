import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;
`

export const ContainerButtons = styled.div`
    display: flex;
    max-width: 100%;
    width: 50%;
    margin: 200px 0px 0px 110px;
`


export const WorkButton = styled.button`
    width: 250px;
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
    
export const ContainerWorksSection = styled.div`
    /* width: 250px; */
    display: block;
    max-width: 100%;
    width: 100%;
`

