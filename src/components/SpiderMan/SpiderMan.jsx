import styled, { keyframes } from "styled-components";

const animar = keyframes`
  from {
    transform: translateY(-100px);
  }

  to {
    transform: translateY(0px);
  }
`;

const sombra = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.6);
    opacity: 0.2;
  }
`;

const Container = styled.div`
  margin-top: 30px;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  top: 367px;
  right: -38px;
  position: relative;
  display: flex;
`;

const SpidermanImage = styled.img`
  max-width: 100%;
  width: 80px;
  vertical-align: top;
  margin-top: -60px;
  animation-name: ${animar};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  -webkit-box-reflect: below 11px
    linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));
`;

const Shadow = styled.div`
  width: 200px;
  height: 20px;
  margin: 20px 0;
  margin-left: 20px;
  /* back20(0, 0, 0, 0.2); */
  border-radius: 50%;
  animation: ${sombra} 2s alternate infinite;
`;

const SpidermanContainer = () => {
  return (
    <Container>
      <SpidermanImage
        src="https://i.ibb.co/XDFkXMx/spiderman-colgado.png"
        alt="Spider Man"
      />
      <Shadow />
    </Container>
  );
};

export default SpidermanContainer;
