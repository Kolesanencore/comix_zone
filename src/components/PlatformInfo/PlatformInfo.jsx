import {
  TitleWrapper,
  TitleCaption,
  Title,
  TitleDescription,
  TitleBtn,
} from './PlatformInfo.styled';

const PlatformInfo = () => {
  return (
    <TitleWrapper>
      <TitleCaption>Web-based platform</TitleCaption>
      <Title>Marvelous Adventures</Title>
      <TitleDescription>
        is a web-based platform that provides an immersive experience for users
        to explore and discover a vast collection of Marvel characters and
        comics. Start exploring the Marvelous Adventures now by visiting our
        Characters and Comics sections and discover your new favorites today.
      </TitleDescription>

      <TitleBtn to="/comics">All Comics</TitleBtn>
    </TitleWrapper>
  );
};

export default PlatformInfo;
