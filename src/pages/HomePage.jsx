import PlatformInfo from '../components/PlatformInfo/PlatformInfo';
import CharSlider from '../components/CharSlider/CharSlider';

import { SectionHero } from '../components/CharSlider/CharSlider.styled';
import {
  InfoWrapper,
  TitleBtn,
} from '../components/PlatformInfo/PlatformInfo.styled';
import ComicSlider from '../components/ComicSlider/ComicSlider';

const HomePage = () => {
  return (
    <>
      <SectionHero>
        <InfoWrapper>
          <PlatformInfo
            titleCaption="Web-based platform"
            title="Marvelous Adventures"
            description="is a web-based platform that provides an immersive experience for users
              to explore and discover a vast collection of Marvel characters and
              comics. Start exploring the Marvelous Adventures now by visiting our
              Characters and Comics sections and discover your new favorites today."
          />
          <TitleBtn to="/comics">All Comics</TitleBtn>
        </InfoWrapper>
        <CharSlider />
      </SectionHero>
      <ComicSlider />
    </>
  );
};

export default HomePage;
