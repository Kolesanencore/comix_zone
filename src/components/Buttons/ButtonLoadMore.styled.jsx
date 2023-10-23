import styled, { keyframes } from 'styled-components';

export const LoadMoreButton = styled.button`
  background: transparent;
  border-radius: 8px;
  border: none;

  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ddcfcf;
  font-size: 16px;

  text-transform: uppercase;

  transition: 0.5s;

  &:hover {
    background: #600404;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #600404, 0 0 25px #600404, 0 0 50px #600404,
      0 0 100px #600404;
    /* box-shadow: rgba(255, 107, 1, 0) 0px 2px 8px,
      rgba(255, 255, 255, 0.3) 0px 1px inset,
      rgba(255, 255, 255, 0.2) 0px 10px inset,
      rgba(255, 255, 255, 0.25) 0px 10px 20px inset,
      rgba(130, 11, 5, 0.3) 0px -15px 30px inset; */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const buttonAnimation = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

export const LoadMoreSpan1 = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #600404);
  animation: ${buttonAnimation} 1s linear infinite;
`;

const buttonAnimation2 = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`;

export const LoadMoreSpan2 = styled.span`
  position: absolute;
  display: block;
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #600404);
  animation: ${buttonAnimation2} 1s linear infinite;
  animation-delay: 0.25s;
`;

const buttonAnimation3 = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

export const LoadMoreSpan3 = styled.span`
  position: absolute;
  display: block;
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #600404);
  animation: ${buttonAnimation3} 1s linear infinite;
  animation-delay: 0.5s;
`;

const buttonAnimation4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`;

export const LoadMoreSpan4 = styled.span`
  position: absolute;
  display: block;
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #600404);
  animation: ${buttonAnimation4} 1s linear infinite;
  animation-delay: 0.75s;
`;
