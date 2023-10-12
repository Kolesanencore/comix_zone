import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  width: 1%;
  background: transparent;
  border-radius: 30px;

  padding: 10px 20px;
  margin-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.8s;
  box-shadow: 4px 4px 6px 0 rgb(255 255 255 / 30%),
    -4px -4px 6px 0 rgb(116 125 136 / 20%),
    inset -4px -4px 6px 0 rgb(255 255 255 / 20%),
    inset 4px 4px 6px 0 rgb(0 0 0 / 20%);

  &:hover,
  &:focus {
    width: 180px;
  }
`;

export const SearchInputField = styled.input`
  width: 0px;

  color: var(--text-secondary);
  flex-grow: 1;
  font-size: 16px;

  background: transparent;
  border: none;
  outline: none;

  transition: 0.8s;
`;

export const SearchButton = styled.button`
  color: var(--text-secondary);
  background-color: transparent;
`;

export const ComicsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  gap: 20px;
`;
