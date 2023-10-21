import PropTypes from 'prop-types';

import { ComicImage, ComicTitle, ComicsItem } from './ComicList.styled';

const ComicItem = ({ comic }) => {
  return (
    <ComicsItem key={comic.id}>
      <ComicTitle>{comic.title}</ComicTitle>
      <ComicImage
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />
      {/* <ComicPrice>Price: ${comic.prices[0].price}</ComicPrice> */}
    </ComicsItem>
  );
};

ComicItem.propTypes = {
  comic: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    // prices: PropTypes.number.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ComicItem;
