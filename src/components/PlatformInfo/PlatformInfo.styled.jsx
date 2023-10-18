import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const InfoWrapper = styled.div`
  flex-direction: column;
  display: flex;
  gap: 20px;

  margin-right: 158px;

  padding: 210px 0 0px 0;
`;

export const TitleWrapper = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 80px;
  line-height: 80px;
  letter-spacing: -1.6px;
`;

export const TitleDescription = styled.p`
  /* width: 464px; */

  color: var(--text-primary);

  font-size: 16px;
  line-height: 18px;
`;

export const TitleBtn = styled(NavLink)`
  width: fit-content;

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

export const TitleCaption = styled.h2`
  color: var(--text-secondary);
  font-family: inherit;
  font-size: 18px;

  text-transform: uppercase;
`;
