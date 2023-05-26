import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesSearch } from '../service/movies-service';
import Loader from 'components/Loader/Loader';
import SearchBox from 'components/SearchBox/SearchBox';
import MovieList from 'components/MoviesList/MoviesList';
import { Container } from './Container.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const handleSubmit = searchQuery => {
    //  if (query === searchQuery) {
    //    toast.warning(
    //      'The same request was detected. Please change you search query.',
    //      {
    //        position: toast.POSITION.TOP_RIGHT,
    //      }
    //    );
    //    return;
    //  }
    // event.preventDefault();
    setSearchParams({ query: searchQuery });
    setQuery(searchQuery);

    setIsLoading(false);
  };

  useEffect(() => {
    if (query === '') return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { results } = await getMoviesSearch(query);
        setMovies(prevMovies => [...prevMovies, ...results]);
        // console.log('data', results);
        // if (results === 0) {
        //   setShowGallery(false);
        // }

        // if (results <= page * ImageService.perPage) {
        //   setLoadMore(true);
        // }
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <Container>
      <SearchBox value={movieName} onSubmit={handleSubmit} />

      {isLoading && <Loader />}

      {movies.length > 0 && <MovieList movies={movies} />}
    </Container>
  );
};

export default Movies;
