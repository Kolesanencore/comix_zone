import { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CharCard from '../CharCard/CharCard';

import {
  ActiveDot,
  CustomDotsContainer,
  DotsContainer,
} from './CharSlider.styled';

import useSound from 'use-sound';
import slideSoundFile from '/click1.mp3';

import spider from '../../images/spider-card.png';
import spiderMain from '../../images/spider-card-right.png';
import red from '../../images/spider-red-ellipse.png';

import hulk from '../../images/hulk-card-left.png';
import hulkMain from '../../images/hulk-card-right.png';
import green from '../../images/hulk-green-ellipse.png';

import panther from '../../images/panther-card-left.png';
import pantherMain from '../../images/panther-card-right.png';
import violet from '../../images/panther-violet-ellipse.png';

const CharSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [playSlideSound] = useSound(slideSoundFile, { volume: 0.1 });

  const dotColors = ['#600404', '#5B7F3C', '#34387F'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      playSlideSound();
    },
    appendDots: dots => <CustomDotsContainer>{dots}</CustomDotsContainer>,
    customPaging: function (i) {
      const isActive = i === currentSlide;
      const dotColor = isActive ? dotColors[currentSlide] : '#171717CC';
      return (
        <DotsContainer>
          <ActiveDot style={{ backgroundColor: dotColor }} />
        </DotsContainer>
      );
    },
  };

  return (
    <Slider {...settings}>
      <CharCard
        charImg={spider}
        mainImg={spiderMain}
        charName="Spider Man"
        mainCircle={red}
        charDescription="With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man."
        charGradient="radial-gradient(81.15% 81.15% at 50% 18.85%, #600404 0%, #171717 100%)"
      />

      <CharCard
        charImg={hulk}
        mainImg={hulkMain}
        mainCircle={green}
        charName="Hulk"
        charDescription="Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk."
        charGradient="radial-gradient(81.15% 81.15% at 50% 18.85%, #5B7F3C 0%, #171717 100%)"
      />

      <CharCard
        charImg={panther}
        mainImg={pantherMain}
        mainCircle={violet}
        charName="Panther"
        charDescription="T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther."
        charGradient="radial-gradient(81.15% 81.15% at 50% 18.85%, #34387F 0%, #171717 100%)"
      />
    </Slider>
  );
};

export default CharSlider;
