import React from 'react';
import { BtnSearch, InputStyled, SearchFormStyled } from './SearchBox.styled';
import { useState } from 'react';

const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputSubmit = event => setSearchQuery(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery.trim().toLowerCase());
    setSearchQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleFormSubmit}>
      <InputStyled
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleInputSubmit}
        value={searchQuery}
      />
      <BtnSearch type="submit">Search</BtnSearch>
    </SearchFormStyled>
  );
};

export default SearchBox;
