import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const KEY = 'cca79e12b25cdd9f67fc795a1689f5d9';

const fetchMovie = async () => {
  const url = '/3/trending/all/day?api_key=';
  const { data } = await axios.get(`${url}${KEY}`);
  return data;
};

const searchMovie = async value => {
  const url = '/3/search/movie?include_adult=false&api_key=';
  const { data } = await axios.get(`${url}${KEY}&query=${value}`);

  return data;
};

const searchById = async id => {
  const url = `/3/movie/${id}?api_key=`;
  const { data } = await axios.get(`${url}${KEY}`);

  return data;
};

const searchAboutMovie = async (id, about) => {
  const url = `/3/movie/${id}/${about}?api_key=`;

  const { data } = await axios.get(`${url}${KEY}`);

  return data;
};

export { fetchMovie, searchMovie, searchById, searchAboutMovie };
