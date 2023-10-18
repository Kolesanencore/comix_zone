import PlatformInfo from '../PlatformInfo/PlatformInfo';

import { BackBtn, HeroTitleWrapper, HeroWrapper } from './ComixPageHero.styled';

const ComixPageHero = () => {
  return (
    <HeroWrapper>
      <HeroTitleWrapper>
        <PlatformInfo
          titleCaption="Web-based platform"
          title="Comics"
          description="Comics is a medium used to express ideas with images, often combined
          with text or other visual information."
          buttonLink="/"
          buttonText="Все комиксы"
        />
      </HeroTitleWrapper>
      <BackBtn to="/">Back Home</BackBtn>
    </HeroWrapper>
  );
};

export default ComixPageHero;
