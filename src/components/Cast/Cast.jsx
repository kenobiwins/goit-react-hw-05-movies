import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieAndInfoById } from 'services/API';
import {
  BASE_POSTER_URL,
  FAKE_ACTOR_PHOTO,
  NOT_FOUND_IMAGE,
} from 'constants/BaseURLs';
import { Box } from 'BaseStyles/Box';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieAndInfoById(movieId, '/credits').then(({ cast }) => {
      setCast(
        cast.map(({ profile_path, name, original_name, character }) => {
          return { profile_path, name, original_name, character };
        })
      );
    });
  }, [movieId]);

  return (
    <Box
      as="ul"
      display="grid"
      gridGap="8px"
      gridTemplateColumns="repeat(5,1fr)"
    >
      {cast && cast.length > 0 ? (
        cast.map(({ profile_path, name, original_name, character }) => {
          return (
            <li key={name}>
              <img
                src={
                  profile_path === null || undefined
                    ? FAKE_ACTOR_PHOTO
                    : BASE_POSTER_URL + profile_path
                }
                alt={name}
              />
              <h3>{name || original_name}</h3>
              <p>Character: {character}</p>
            </li>
          );
        })
      ) : (
        <div>
          <p>We don't have any cast for this movie.</p>
          <img src={NOT_FOUND_IMAGE} alt="what?" />
        </div>
      )}
    </Box>
  );
};
