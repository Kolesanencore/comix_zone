import PlatformInfo from '../components/PlatformInfo/PlatformInfo';
import CharSlider from '../components/CharSlider/CharSlider';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { SectionHero } from '../components/CharSlider/CharSlider.styled';

const HomePage = () => {
  return (
    <>
      <Header />
      <SectionHero>
        <PlatformInfo />
        <CharSlider />
      </SectionHero>
      <Footer />
    </>
  );
};
export default HomePage;
