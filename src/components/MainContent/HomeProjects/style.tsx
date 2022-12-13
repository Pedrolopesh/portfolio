import styled from 'styled-components';


export const ContainerProjectCards = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
    justify-content: space-around;
`

export const CardItemProjects = styled.div`
    /* display: flex;
    max-width: 100%;
    width: 100%; */

    overflow: hidden;
    width: 25%;
    min-height: 480px;
    display: flex;
    margin: 40px;
    align-items: center;
`

export const CardImage = styled.img`
    /* display: flex;
    width: 500px;
    margin: 10px 50px; */

    
    transition: all 0.3s;
    box-sizing: border-box;
    max-width: 100%;

    &:hover {
        transform: scale(1.1);
    }

`