import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import MovieDetails from '../../pages/MovieDetails';
import Movies from '../../pages/Movies';
import Layout from 'components/Layout/Layout';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<MovieDetails />} />
    </Routes>
  );
};
