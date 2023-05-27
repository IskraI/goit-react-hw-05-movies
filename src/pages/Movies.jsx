import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesSearch } from '../service/movies-service';
import Loader from 'components/Loader/Loader';
import SearchBox from 'components/SearchBox/SearchBox';
import MovieList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showMovies, setShowMovies] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  // console.log('movieName', movieName);
  // console.log('query', query);

  const location = useLocation();
  // console.log('location search', location);
  if (query === '') {
    if (movieName !== '') {
      setQuery(movieName);
    }
  }
  const handleSubmit = searchQuery => {
    if (searchQuery === '') {
      alert('Please input query');
      return;
    }
    setSearchParams({ query: searchQuery });
    setError(null);
    setIsLoading(false);
    setShowMovies(true);
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { results } = await getMoviesSearch(movieName);
        setMovies(results);
        if (results.length === 0) {
          setShowMovies(false);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieName]);

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      {!showMovies && <p>Sorry. There are no images ... 😭</p>}
      {error && <p>Sorry. There are {error} 😭</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <MovieList movies={movies} state={{ from: location }} />
      )}
    </>
  );
};

export default Movies;
