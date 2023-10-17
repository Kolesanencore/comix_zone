import PlatformInfo from '../components/PlatformInfo/PlatformInfo';
import CharSlider from '../components/CharSlider/CharSlider';

import { SectionHero } from '../components/CharSlider/CharSlider.styled';

const HomePage = () => {
  return (
    <>
      <SectionHero>
        <PlatformInfo />
        <CharSlider />
      </SectionHero>
    </>
  );
};
export default HomePage;
