import styled from 'styled-components';

export const ComicsWrapper = styled.div`
  width: 1100px;

  margin: 0 auto;

  padding-top: 70px;
  padding-bottom: 70px;
`;
export const ComicList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  gap: 20px;
`;

export const ComicsItem = styled.li`
  width: 100%;
  height: auto;
`;

export const ComicImage = styled.img`
  max-width: 100%;
  height: 530px;
`;

export const ComicTitle = styled.h2`
  font-size: 12px;
  margin-top: 10px;

  padding-left: 10px;
  padding-bottom: 10px;
  text-align: center;
`;

// const ComicPrice = styled.h2`
//   margin-top: 10px;
//   padding-left: 10px;
//   padding-bottom: 10px;
//   font-size: 14px;
// `;
