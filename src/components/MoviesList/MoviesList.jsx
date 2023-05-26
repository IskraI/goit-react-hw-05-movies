import React from 'react';
// import PropTypes from 'prop-types';
import { List, ItemLink, Li } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(el => (
        <Li key={el.id}>
          <ItemLink to={`/movies/${el.id}`}> {el.title}</ItemLink>
        </Li>
      ))}
    </List>
  );
};

export default MoviesList;
