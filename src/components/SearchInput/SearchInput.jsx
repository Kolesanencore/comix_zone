import { useState } from 'react';

import { FaSearch } from 'react-icons/fa';

import {
  SearchButton,
  SearchInputField,
  SearchInputWrapper,
} from './SearchInput.styled';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    ///
  };

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <SearchInputWrapper>
        <SearchInputField
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChange}
        />
        <SearchButton onClick={handleSearch}>
          <FaSearch />
        </SearchButton>
      </SearchInputWrapper>
    </>
  );
};

export default SearchInput;
