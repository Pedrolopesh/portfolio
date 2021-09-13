import styled from 'styled-components';

export const Container = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  min-height: 450vh;
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
  
  
  @media screen and (max-width: 700px){
    height: 500vh;
  }
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
