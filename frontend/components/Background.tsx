import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent url('https://i.imgur.com/MuUF8OL.png') repeat 0 0;
  background-repeat: repeat;
  animation: bg-animation 0.3s infinite;
  opacity: 0.8;
  visibility: visible;

  @keyframes bg-animation {
    0% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -5%);
    }
    20% {
      transform: translate(-10%, 5%);
    }
    30% {
      transform: translate(5%, -10%);
    }
    40% {
      transform: translate(-5%, 15%);
    }
    50% {
      transform: translate(-10%, 5%);
    }
    60% {
      transform: translate(15%, 0);
    }
    70% {
      transform: translate(0, 10%);
    }
    80% {
      transform: translate(-15%, 20%);
    }
    90% {
      transform: translate(10%, 5%);
    }
    100% {
      transform: translate(5%, 0);
    }
  }
`;

const BackgroundSketch = (props: any) => {
  return <Background />;
};

export default BackgroundSketch;
