import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { searchById } from 'services/MovieApi';
import {
  Section,
  FilmWrapper,
  Title,
  OverviewRating,
  GenreList,
  LinkStyled,
} from 'components/StyledComponents/StyledComponents.styled';

const MovieDetailsPage = () => {
  const [oneFilm, setOneFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const cameFrom = location?.state?.from ?? '/';

  useEffect(() => {
    const getMovieById = async () => {
      await searchById(movieId).then(data => setOneFilm(data));
    };
    getMovieById();
  }, [movieId]);

  const { poster_path, title, overview, genres, vote_average } = oneFilm;
  return (
    <>
      <Section>
        <LinkStyled to={cameFrom}>return to movies</LinkStyled>
        <FilmWrapper>
          <img
            width="500px"
            height="750px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://pixabay.com/get/g95a2dc3dd10be26c9598275be3cf4782592288a68b0db506b9a6d0f7acb03dd8315942505e34951e67529f8cc280ba76fba5448b53138ef7211f108c2128a4e3_1280.jpg'
            }
            alt="title"
          />
          <div>
            <Title>{title}</Title>
            <OverviewRating>{vote_average}</OverviewRating>
            <OverviewRating>{overview}</OverviewRating>
            <OverviewRating> Genres: </OverviewRating>
            <GenreList>
              {genres &&
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </GenreList>
          </div>
        </FilmWrapper>
      </Section>
      <Section>
        <GenreList>
          <li>
            <LinkStyled
              state={{ from: cameFrom }}
              to={`/movies/${movieId}/cast`}
            >
              Cast
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              state={{ from: cameFrom }}
              to={`/movies/${movieId}/reviews`}
            >
              Reviews
            </LinkStyled>
          </li>
        </GenreList>
      </Section>
      <Section>
        <Outlet />
      </Section>
    </>
  );
};

export default MovieDetailsPage;
