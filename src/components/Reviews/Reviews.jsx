import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieAndInfoById } from 'services/API';
import { NOT_FOUND_IMAGE } from 'constants/BaseURLs';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieAndInfoById(movieId, '/reviews').then(({ results }) => {
      return setReviews(
        results.map(({ id, author, content }) => {
          return { id, author, content };
        })
      );
    });
  }, [movieId]);

  return (
    <ul>
      {reviews && reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content} </p>
            </li>
          );
        })
      ) : (
        <div>
          <p>We don't have any reviews for this movie.</p>
          <img src={NOT_FOUND_IMAGE} alt="what?" />
        </div>
      )}
    </ul>
  );
};
