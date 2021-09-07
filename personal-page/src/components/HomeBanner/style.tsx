import styled from 'styled-components';

export const Container = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  min-height: 100vh;
  max-width: 100%;
  display: block;
  width: 100%;

  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,48,1) 48%, rgba(64,0,66,1) 100%) no-repeat;
  background-size: 300% 300%;
  transition: 10s;
  animation: gradient 10s ease infinite;

  @keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  
  50% {
    background-position: 100% 50%;
  }
  
  100% {
    background-position: 0% 50%;
  }
}
  /* background: linear-gradient(90deg, rgba(0,0,0,1) 0%,#000446 100%); */
`
export const ContainerLetters = styled.div`
  margin-top: 100px;
  display: block;
`
export const TitleBaner = styled.span`
  color: white;
  display: block;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`
export const BGCode = styled.div`

`
export const SelfImage = styled.img`
    top: 0;
    width: 25%;
    display: block;
    max-width: 100%;
    overflow: hidden;
    position: absolute;
    animation-duration: 2s;
    transform: translate(280%, 10%);
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-name: slide-animation-photo;
    border-radius: 100%;

  @keyframes slide-animation-photo {
    0% {
      transform: translate(280%, -100%);
      /* border-radius: 0; */
      opacity: 0;
    }
    
    40% {
      transform: translate(280%, -10%);
    }

    100% {
      /* transform: translate(240%, 0%); */
      /* border-radius: 100%; */
      opacity: 1;
    }
  }
`