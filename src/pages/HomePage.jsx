import { useEffect, useState } from 'react';

import { fetchMovie } from 'services/MovieApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      await fetchMovie().then(data => setMovies(data.results));
    };
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
