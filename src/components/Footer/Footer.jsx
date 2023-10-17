import SocialLinks from '../SocialLinks/SocialLinks';

import Logo from '../Logo/Logo';

import {
  FooterTitle,
  FooterWrapper,
  NavContainer,
  PrivacyText,
  PrivacyWrapper,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <NavContainer>
        <Logo />
        <FooterTitle>Comics</FooterTitle>
        <SocialLinks />
      </NavContainer>
      <PrivacyWrapper>
        <PrivacyText>Privacy Policy Public Offering Agreement</PrivacyText>
      </PrivacyWrapper>
    </FooterWrapper>
  );
};

export default Footer;
