import styled from 'styled-components';

export const Container = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  min-height: 365vh;
  max-width: 100%;
  display: block;
  width: 100%;

  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,48,1) 48%, #2b002c 100%) no-repeat;
  background-size: 300% 300%;
  transition: 10s;
  animation: gradient 10s ease infinite;

  @keyframes gradient {
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
  }
  
  //WIDTH
  @media (max-width: 1500px){
    height: 450vh;
  }

  @media (max-width: 1100px){
    height: 480vh;
  }

  @media (max-width: 850px){
    height: 580vh;
  }

  @media (max-width: 700px){
    height: 680vh;
  }

  @media (max-width: 500px){
    height: 580vh;
  }

  @media (max-width: 450px){
    height: 620vh;
  }

  @media (max-width: 400px){
    height: 650vh;
  }

  @media (max-width: 380px){
    height: 550vh;
  }

  @media (max-width: 350px){
    height: 710vh;
  }

  @media (max-height: 675px){
    height: 500vh;
  }

  /* @media screen and (max-width: 420px){
    height: 570vh;
  }
  
  @media screen and (max-width: 375px){
    height: 630vh;
  }

  @media screen and (max-width: 340px){
    height: 710vh;
  } */

  //HEIGHT
  /* @media screen and (max-height: 600px) {
    min-height: 585vh;
  }
  
  @media screen and (max-height: 700px) {
    min-height: 505vh;
  }

  @media screen and (max-height: 800px) {
    min-height: 415vh;
  }
  
  @media screen and (max-height: 900px) {
    min-height: 365vh;
  } */
  
`

export const ContainerParticles = styled.div`
  width: 50%;
  display: block;
  max-width: 100%;
  margin-left: auto;
  
  position: fixed;
  top: 0;
  left: 60%;
  overflow: hidden;
  
  div{
    height: 100vh;
  }
  
  @media screen and (max-width: 700px){
    left: 0%;
    width: 100%;
  }
`

export const BGCode = styled.div`

`
