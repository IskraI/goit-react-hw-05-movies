import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '2005be877b41dd3a0b1c9df70b469ec4',
};

export const getMoviesDay = async () => {
  const { data } = await axios.get(`trending/movie/day`);

  return data;
};

export const getMoviesSearch = async searchQuery => {
  const { data } = await axios.get(`search/movie?query=${searchQuery}`);

  return data;
};

export const getMovieDetail = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`);

  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`);

  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);

  return data;
};
