import styled from 'styled-components';


export const ContainerSectionText = styled.div`
    /* max-width: 1600px; */
    width: 93%;
    margin: 0 auto;
    margin-top: 170px;

    h3 {
        font-size: 1.6rem;
        margin: 0;
    }

    h2 {
        font-size: 2.5rem;
        margin: 0;
        font-weight: 300;
    }

    button {
        display: flex;
        border: none;
        border-radius: 10px;
        align-items: center;
        padding: 10px 15px;

        border: 2px solid #FF7897;
        color: #FF7897;
        transition: 0.6s;
        background: none;


        &:hover {
            background-color: #FF7897;
            color: #fff;
        }
    }

    strong {

    }
`

export const ContainerProjectCards = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
    justify-content: space-around;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
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

    @media screen and (max-width: 900px) {
        width: 61%;
        margin: 40px auto;
        min-height: 380px;
    }

    @media screen and (max-width: 650px) {
        width: 80%;
        margin: 40px auto;
        min-height: 380px;
    }

    @media screen and (max-width: 400px) {
        width: 95%;
        margin: 40px auto;
        min-height: 380px;
    }
`