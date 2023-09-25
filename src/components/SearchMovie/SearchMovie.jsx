// import { MdYoutubeSearchedFor } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { MoviesListLink } from './SearchMovie.styled';

export const SearchMovie = ({ movies }) => {
  const location = useLocation();

    return (
      <div>
         {movies.map(film => (
        <li key={film.id}>
          <MoviesListLink to={`/movies/${film.id}`} state={{ from: location }}>
            <img
              src={
                film.poster_path &&
                `https://image.tmdb.org/t/p/w92${film.poster_path}`
              }
              alt={film.original_title}
              width="120"
              
            />
            {film.title}
          </MoviesListLink>
        </li>
      ))}
      </div>
    );
  };