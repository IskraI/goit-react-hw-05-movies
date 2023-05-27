import React from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetail } from '../service/movies-service';
import { Suspense } from 'react';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import {
  StyledImg,
  MovieInfo,
  Info,
  Card,
  StyledNavLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});

  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const staticLocation = location.state?.from ?? '/';
  // console.log('location element', location);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchData = async () => {
      try {
        const data = await getMovieDetail(movieId);
        setMovieDetail(data);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };
    fetchData();
  }, [movieId]);

  const {
    title,
    original_title,
    poster_path,
    overview,
    genres,
    vote_average,
    release_date,
  } = movieDetail;

  const genre = [];
  genres && genres.forEach(el => genre.push(el.name));
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://via.placeholder.com/200x300';

  return (
    <>
      {error && <p>Sorry {error}</p>}

      <MovieInfo>
        <Card>
          <ButtonBack to={staticLocation}>Go back</ButtonBack>
          <StyledImg src={poster} alt={title} />
        </Card>
        <Info>
          {{ title } && (
            <h2>
              {title ?? original_title}
              {release_date && `(${release_date.slice(0, 4)})`}
            </h2>
          )}
          <p>User Score {Math.round(vote_average * 10)}%</p>
          <h3> Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          {genre.length !== 0 ? <p>{genre.join(' / ')}</p> : <p>undefine</p>}
        </Info>
      </MovieInfo>
      <h3>Additional information</h3>
      <ul>
        <li>
          <StyledNavLink to="cast" state={{ from: staticLocation }}>
            Cast
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="reviews" state={{ from: staticLocation }}>
            Reviews
          </StyledNavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
