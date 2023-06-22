import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { searchAboutMovie } from 'services/MovieApi';
import { CastList, Name } from './Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getActores = async () => {
      await searchAboutMovie(movieId, 'credits')
        .then(data => setCasts(data.cast))
        .catch(error => console.log(error.message));
    };
    getActores();
  }, [movieId]);

  return (
    <CastList>
      {casts &&
        casts.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              width="300px"
              height="450px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : 'https://pixabay.com/get/g95a2dc3dd10be26c9598275be3cf4782592288a68b0db506b9a6d0f7acb03dd8315942505e34951e67529f8cc280ba76fba5448b53138ef7211f108c2128a4e3_1280.jpg'
              }
              alt={name}
            />
            <Name>{character}</Name>
            <Name>{name}</Name>
          </li>
        ))}
    </CastList>
  );
};

export default Cast;
