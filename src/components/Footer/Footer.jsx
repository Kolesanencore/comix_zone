import SocialLinks from '../SocialLinks/SocialLinks';

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
