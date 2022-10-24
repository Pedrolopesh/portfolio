import styled from "styled-components";

export const Card = styled.div`
    display: block;
    background: none;
    border: 3px solid #ff7897;
    border-radius: 10px;
    max-width: 95%;
    width: 28%;
    padding: 30px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    h3 {
        color:#ff7897;
    }

    p {
        color:#2C2C2C;
    }

    &:hover {
        background-color: #ff7897;

        h3 {
            color:#ffffff;
        }

        p {
            color:#e0e0e0;
        }

        svg {
            color:#ffffff !important;
        }
    }
`