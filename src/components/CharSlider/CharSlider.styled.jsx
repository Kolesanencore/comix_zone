import styled from 'styled-components';

export const SectionHero = styled.div`
  display: flex;

  position: relative;
  padding-right: 32px;
  padding-left: 32px;
  /* top: -57px; */
`;

export const Dot = styled.div`
  width: 4px;
  height: 100px;
  background: rgba(23, 23, 23, 0.8);
  margin: 0 5px;
`;

export const ActiveDot = styled(Dot)`
  background: #600404;
`;

export const DotsContainer = styled.div`
  display: flex;
`;

export const CustomDotsContainer = styled.ul`
  width: min-content;

  position: absolute;
  top: 248px;
  left: -80px;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 100px;
`;
