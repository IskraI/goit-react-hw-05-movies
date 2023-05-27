import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../service/movies-service';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        // console.log('data', data);
        setReviews([...data.results]);
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
    <div>
      {error && <p>Sorry. There are {error} 😭</p>}

      {isLoading && <Loader />}
      {reviews && (
        <ul>
          {reviews.map(el => (
            <li key={el.id}>
              <h4>Author: {el.author}</h4>
              <p> {el.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews?.length === 0 && <p>Don't have reviews of this movie.</p>}
    </div>
  );
};

export default Reviews;
