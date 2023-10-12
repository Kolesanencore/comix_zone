import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 1440px;
  z-index: 100;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;

  padding: 24px 32px 24px 32px;
  margin: 0px auto;
`;

export const Container = styled.div`
  max-width: 1440px;
  /* padding: 0 32px; */
  margin: 0px auto;
`;

/* backdrop-filter: ${(props) => (props.isScrolled ? "blur(20px)" : "none")};

  transform: translateY(${(props) => (props.isScrolled ? "100" : "0")});
  transition: transform 0.3s ease;

  box-shadow: ${(props) =>
    props.isScrolled
      ? "0 2px 8px rgba(246, 0, 0, 0.5), inset 0 1px rgba(255, 255, 255, 0.3), inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(255, 255, 255, 0.25), inset 0 -15px 30px rgba(255, 107, 1, 0.092)"
      : "none"};

  transition: backdrop-filter 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease; */
