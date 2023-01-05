import { useState, useEffect } from 'react';
import { getMovieBySearch } from 'services/API';
import { useSearchParams } from 'react-router-dom';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { Box } from 'BaseStyles/Box';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query === null) {
      return;
    }

    getMovieBySearch({ query }).then(({ results }) => {
      return setMovies(results);
    });
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams(query !== '' ? { query } : {});
    setQuery('');
  };

  const handleInput = value => {
    setQuery(value);
  };

  return (
    <main>
      <section>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchQuery"
            onChange={e => handleInput(e.target.value)}
            value={query}
          />
          <button type="submit">Search</button>
        </form>

        <Box as="ul" display="grid" gridGap="6px" mt="6px">
          {movies.length > 0 && <MovieGallery movies={movies} />}
        </Box>
      </section>
    </main>
  );
};
