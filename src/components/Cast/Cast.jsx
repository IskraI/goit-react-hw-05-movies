import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../service/movies-service';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams(); //динамический параметр
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchData = async () => {
      try {
        const data = await getMovieCast(movieId);
        // console.log('data', data);
        setMovieCast([...data.cast]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  // console.log('movieCast', movieCast);

  return (
    <>
      {error && <p>Sorry. There are {error} 😭</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {movieCast && (
            <ul>
              {movieCast.map(el => (
                <li key={el.id}>
                  <img
                    src={
                      el.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                        : 'https://via.placeholder.com/100x150'
                    }
                    alt={el.name}
                    width="100"
                    height="150"
                  />
                  <h4>{el.name}</h4>
                  <p>Character: {el.character}</p>
                </li>
              ))}
            </ul>
          )}
          {movieCast?.length === 0 && (
            <p>Don't have information about the cast of this movie.</p>
          )}
        </div>
      )}
    </>
  );
};

export default Cast;
