import styled from 'styled-components';

export const SocialsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SocialsItem = styled.li``;

export const SocialsLink = styled.a`
  align-items: center;
`;

export const IconWrapper = styled.div`
  color: var(--text-primary);
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  border: 1px solid rgba(250, 250, 250, 0.15);

  width: 40px;
  height: 40px;

  transition: background-color 0.5s ease;

  &:focus,
  &:hover {
    color: #333;
    background-color: var(--text-primary);
  }
`;
