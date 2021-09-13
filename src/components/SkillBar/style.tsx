import styled from "styled-components";

export const Container = styled.div`
    display: block;
    max-width: 100%;
    `

export const ImageSkill = styled.img`
    display: block;
    max-width: 100%;
    width: 55px;
    margin-left: auto;

`

export const SkillBarShape = styled.div`
    display: flex;
    max-width: 100%;
    min-height: 10px;
    width: 85%;
    border-radius: 90px;
    box-shadow: 4px 4px 7px 3px rgba(0, 0, 0, 0.110);
    background-color: rgb(236, 236, 236);
    margin: 15px auto 15px auto;
`

export const BarSkill = styled.div`
    display: block;
    padding: 0px 2px 0px 0px;
    max-width: 100%;
    min-height: 50px;
    width: 15vw;
    border-radius: 90px;
    background: linear-gradient(90deg, rgba(213,178,0,1) 0%, rgba(247,223,30,1) 90%);

`

export const BGSkill = styled.div`
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-align: end;
    margin-top: 5px;
    margin-bottom: 3px;
    margin-right: 19px;
    font-size: 40px;
`

export const TextSkill = styled.span`
    display: flex;
    font-size: 20px;
    color: #b3b3b3;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0px 15px 0px auto;
`
