import PropTypes from 'prop-types';

import {
  TitleWrapper,
  TitleCaption,
  Title,
  TitleDescription,
} from './PlatformInfo.styled';

const PlatformInfo = ({ titleCaption, title, description }) => {
  return (
    <TitleWrapper>
      <TitleCaption>{titleCaption}</TitleCaption>
      <Title>{title}</Title>
      <TitleDescription>{description}</TitleDescription>
    </TitleWrapper>
  );
};

PlatformInfo.propTypes = {
  titleCaption: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PlatformInfo;
