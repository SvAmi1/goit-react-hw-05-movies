import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../../services/api';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const route = '/trending/movie/day';
    toast.loading('Wait a second...', { duration: 800 });

    setTimeout(async () => {
      try {
        const { results } = await fetchMovies(route);
        setMovies([...results]);
      } catch (error) {
        console.log(error);
      } finally {
        toast.success('So, what trending today...?');
      }
    }, 800);
  }, []);

  return (
    <main>
      <h2>Trending this week...</h2>

      <ul>
        <SearchMovie movies={movies} />
      </ul>
    </main>
  );
};
