import PropTypes from "prop-types";

import {
  LoadMoreButton,
  LoadMoreSpan1,
  LoadMoreSpan2,
  LoadMoreSpan3,
  LoadMoreSpan4,
  Wrapper,
} from "./ButtonLoadMore.styled";

export const Button = ({ onClick }) => (
  <Wrapper>
    <LoadMoreButton onClick={onClick}>
      Load More
      <LoadMoreSpan1></LoadMoreSpan1>
      <LoadMoreSpan2></LoadMoreSpan2>
      <LoadMoreSpan3></LoadMoreSpan3>
      <LoadMoreSpan4></LoadMoreSpan4>
    </LoadMoreButton>
  </Wrapper>
);
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
