import { Toaster } from 'react-hot-toast';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));
const MoviesCast = lazy(() => import('./MoviesCast/MoviesCast'));
const MoviesReviews = lazy(() => import('./MoviesReviews/MoviesReviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MoviesCast />} />
            <Route path="reviews" element={<MoviesReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
     </>
  );
};
