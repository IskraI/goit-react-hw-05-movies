import React from 'react';
import Loader from '../components/Loader/Loader';
import MovieList from '../components/MoviesList/MoviesList';
import TitleHome from '../components/Title/Title';
import { getMoviesDay } from '../service/movies-service';
import { useState, useEffect } from 'react';
import { Container } from './Container.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { results } = await getMoviesDay();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // console.log('movies', movies);

  return (
    <Container>
      <TitleHome />
      {error && <p>Sorry {error}</p>}
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </Container>
  );
};

export default Home;
