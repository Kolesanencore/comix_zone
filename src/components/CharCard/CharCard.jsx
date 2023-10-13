import PropTypes from 'prop-types';

import arrow from '../../assets/arrow.png';

import {
  BlockWrapper,
  CharBtn,
  CharDscr,
  CharImg,
  CharWrapper,
  MainImg,
  MainWrapper,
  CircleImg,
  Arrow,
  DescrWrapper,
} from './CharCard.styled';

const CharCard = ({
  charImg,
  mainImg,
  charName,
  charDescription,
  mainCircle,
  charGradient,
}) => {
  const charBtnStyle = {
    background: charGradient,
  };

  return (
    <CharWrapper>
      <BlockWrapper>
        <CharImg src={charImg} alt="Char" />
      </BlockWrapper>
      <MainWrapper>
        <MainImg src={mainImg} alt="Main Char" />
        <CharBtn style={charBtnStyle}>{charName}</CharBtn>
        <CircleImg src={mainCircle} alt="circle" />
        <Arrow src={arrow} alt="arrow" />
        <DescrWrapper>
          <h3>Characters</h3>
          <CharDscr>{charDescription}</CharDscr>
        </DescrWrapper>
      </MainWrapper>
    </CharWrapper>
  );
};

CharCard.propTypes = {
  mainCircle: PropTypes.string.isRequired,
  charImg: PropTypes.string.isRequired,
  mainImg: PropTypes.string.isRequired,
  charName: PropTypes.string.isRequired,
  charDescription: PropTypes.string.isRequired,
  charGradient: PropTypes.string.isRequired,
};

export default CharCard;
