import { BiLogoFacebook } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

import {
  SocialsList,
  SocialsItem,
  SocialsLink,
  IconWrapper,
} from './SocialLinks.styled';

const SocialLinks = () => {
  return (
    <SocialsList>
      <SocialsItem>
        <SocialsLink
          href="https://github.com/Kolesanencore"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper>
            <AiFillGithub />
          </IconWrapper>
        </SocialsLink>
      </SocialsItem>

      <SocialsItem>
        <SocialsLink
          href="https://facebook.com/"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper>
            <BiLogoFacebook />
          </IconWrapper>
        </SocialsLink>
      </SocialsItem>

      <SocialsItem>
        <SocialsLink
          href="https://instagram.com/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper>
            <BsInstagram />
          </IconWrapper>
        </SocialsLink>
      </SocialsItem>

      <SocialsItem>
        <SocialsLink
          href="https://twitter.com/"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper>
            <FiTwitter />
          </IconWrapper>
        </SocialsLink>
      </SocialsItem>
    </SocialsList>
  );
};

export default SocialLinks;
