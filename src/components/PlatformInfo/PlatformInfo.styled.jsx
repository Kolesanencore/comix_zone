import styled from 'styled-components';

export const TitleWrapper = styled.div`
  width: 538px;

  gap: 16px;
  display: flex;
  flex-direction: column;

  padding-top: 150px;
  padding-bottom: 185px;

  margin-right: 134px;
`;

export const Title = styled.h1`
  font-size: 80px;
  line-height: 80px;
  letter-spacing: -1.6px;
`;

export const TitleDescription = styled.p`
  color: var(--text-primary);

  font-size: 16px;
  line-height: 18px;
`;

export const TitleBtn = styled.a`
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
  color: var(--text-primary);
  font-family: inherit;
  font-size: 18px;

  text-transform: uppercase;
`;
