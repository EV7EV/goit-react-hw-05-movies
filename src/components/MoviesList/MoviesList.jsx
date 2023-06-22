import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.length > 0 &&
        movies.map(movie => {
          //   console.log(movie);
          return (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {' '}
                <p>{movie.title ? movie.title : movie.name}</p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export { MoviesList };
