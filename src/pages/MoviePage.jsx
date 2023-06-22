import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Form } from 'components/Form/Form';
import { searchMovie } from 'services/MovieApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }

    const searchFilm = async () => {
      try {
        const data = await searchMovie(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchFilm();
  }, [searchParams]);

  // метод який забирає значення з форми
  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviePage;
