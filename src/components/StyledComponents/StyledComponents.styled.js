import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
  padding: 40px 20px;
`;

const FilmWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const Title = styled.h2`
  line-height: 40px;
  font-size: 40px;
  letter-spacing: 0.02em;
  margin-bottom: 20px;
`;

const OverviewRating = styled.p`
  line-height: 18px;
  font-size: 15px;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
`;

const GenreList = styled.ul`
  font-weight: 600;
  display: flex;
  gap: 10px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 0.03em;
  color: rgb(224 92 45);
`;

export { Section, FilmWrapper, Title, OverviewRating, GenreList, LinkStyled };
