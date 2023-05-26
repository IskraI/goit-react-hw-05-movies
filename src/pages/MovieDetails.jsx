import React from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetail } from '../service/movies-service';
// import Loader from '../components/Loader/Loader';
import { Container } from './Container.styled';
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
  // const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  // console.log('movieId', movieId);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const data = await getMovieDetail(movieId);
        setMovieDetail(data);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  // console.log('movieDetail', movieDetail);
  const {
    title,
    // original_title,
    poster_path,
    overview,
    // genres,
    vote_average,
    release_date,
  } = movieDetail;

  // const genre = [];
  // genres.forEach(el => genre.push(el.name));
  const backLinkHref = location.state?.from ?? '/';
  // console.log('genre', genre);
  return (
    <Container>
      <MovieInfo>
        <Card>
          <ButtonBack to={backLinkHref}>Go back</ButtonBack>
          <StyledImg
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </Card>
        <Info>
          {{ title } && <h2>{title} </h2>} {release_date}
          <p>User Score {Math.round(vote_average * 10)}%</p>
          <h3> Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          {/* <p>{genre.join('   ')}</p> */}
        </Info>
      </MovieInfo>
      <h3>Additional information</h3>
      <ul>
        <li>
          <StyledNavLink to="cast">Cast</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="reviews">Reviews</StyledNavLink>
        </li>
      </ul>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
