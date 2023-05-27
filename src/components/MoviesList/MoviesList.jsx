import React from 'react';
// import PropTypes from 'prop-types';
import { List, ItemLink, Li } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  // console.log('Location', location);
  return (
    <List>
      {movies.map(({ title, id, name }) => (
        <Li key={id}>
          <ItemLink to={`/movies/${id}`} state={{ from: location }}>
            {title ?? name}
          </ItemLink>
        </Li>
      ))}
    </List>
  );
};

export default MoviesList;
