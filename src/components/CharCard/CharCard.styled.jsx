import styled from 'styled-components';

export const CharWrapper = styled.div`
  display: flex;
  width: fit-content;
`;

export const BlockWrapper = styled.div`
  padding-top: 200px;
`;

export const CharImg = styled.img`
  width: 352px;
  height: 540px;
`;

export const MainImg = styled.img`
  width: 352px;
  height: 540px;
`;

export const CircleImg = styled.img`
  width: 500px;
  height: 400px;

  position: absolute;
  top: 326px;
  left: -70px;

  z-index: -1;
`;

export const MainWrapper = styled.div`
  position: relative;

  margin-left: 90px;
`;

export const CharBtn = styled.button`
  position: absolute;
  bottom: 212px;
  left: 12px;

  width: 144px;
  height: 144px;

  border-radius: var(--btn-border-radius);

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: rgba(255, 107, 1, 0) 0px 2px 8px,
      rgba(255, 255, 255, 0.3) 0px 1px inset,
      rgba(255, 255, 255, 0.2) 0px 10px inset,
      rgba(255, 255, 255, 0.25) 0px 10px 20px inset,
      rgba(130, 11, 5, 0.3) 0px -15px 30px inset;
  }
`;

export const CharDscr = styled.p`
  color: var(--text-secondary);
  font-size: 12px;

  width: 195px;

  line-height: 14px;
  letter-spacing: -0.24px;
`;

export const Arrow = styled.img`
  margin-top: 32px;
`;

export const DescrWrapper = styled.div`
  display: flex;
  gap: 50px;

  margin-top: 16px;
`;
