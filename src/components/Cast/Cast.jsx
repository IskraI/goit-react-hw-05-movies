import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../service/movies-service';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams(); //динамический параметр

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchData = async () => {
      try {
        const data = await getMovieCast(movieId);
        console.log('data', data);
        setMovieCast([...data.cast]);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  console.log('movieCast', movieCast);

  return (
    <div>
      {movieCast && (
        <ul>
          {movieCast.map(el => (
            <li key={el.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
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
  );
};

export default Cast;
