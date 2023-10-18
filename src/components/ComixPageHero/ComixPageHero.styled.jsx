import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import heroImage from '../../images/spider-hero.png';
// import heroImage2 from '../../images/panther-hero.jpg';

export const HeroWrapper = styled.div`
  width: 1440px;
  height: 780px;

  background-image: url(${heroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  justify-content: space-between;
  align-items: end;

  padding: 278px 32px 40px 32px;
`;

export const HeroTitleWrapper = styled.div`
  padding-bottom: 312px;
`;

export const BackBtn = styled(NavLink)`
  height: 43px;
  padding: 12px 24px;

  border-radius: var(--btn-border-radius);
  background-color: var(--red);
  color: var(--text-primary);

  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: var(--box-shadow-glass);
  }
`;
