import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: var(--box-shadow-glass);
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px 32px 32px 32px;
`;

export const FooterTitle = styled.h3`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -1.6px;
`;

export const SocialNav = styled.div`
  display: flex;
`;

export const PrivacyWrapper = styled.div`
  text-align: center;

  background-color: #34387f;
  box-shadow: inherit;
`;

export const PrivacyText = styled.p`
  padding-top: 18px;
  padding-bottom: 18px;

  color: var(--text-secondary);

  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.28px;
`;
