import { toast } from 'react-hot-toast';
import { MdYoutubeSearchedFor } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { Form, Input, Search } from 'components/SearchMovie/SearchMovie.styled';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const currentSearch = searchQuery.get('search') ?? '';

  const onSubmitSearch = e => {
    e.preventDefault();
    const newSearch = e.target.elements.search.value;

    if (newSearch === '') {
      toast.error('You must enter some text...');
      return;
    }
    setSearchQuery({ search: newSearch });
  };

  useEffect(() => {
    if (currentSearch === '') {
      return;
    }

    toast.loading('Wait a second...', { duration: 800 });
    const info = `&query=${currentSearch}`;
    const route = '/search/movie';

    setTimeout(async () => {
      try {
        const { results } = await fetchMovies(route, info);
        if (results.length === 0) {
          toast('Sorry,no movies with this query');
          return;
        }
        toast.success(`WOW! You've got ${results.length} movies!`);
        setMovies([...results]);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      }
    }, 800);
  }, [currentSearch]);

  return (
    <main>
      {currentSearch === '' ? (
        <h2>Ok! Let's find some movie...</h2>
      ) : (
        <div style={{ height: '70px' }}></div>
      )}
      <Form onSubmit={onSubmitSearch}>
        <Input
          type="text"
          name="search"
          defaultValue={currentSearch}
          autoFocus
          placeholder="Search movies"
        />
        <Search type="submit">
        <MdYoutubeSearchedFor/>
        </Search>
      </Form>
      <hr />
      {movies !== [] && (
        <section>
          <ul>
            <SearchMovie movies={movies} />
          </ul>
        </section>
      )}
    </main>
  );
};

