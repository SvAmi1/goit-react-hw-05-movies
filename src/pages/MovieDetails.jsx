// import { RiArrowLeftCircleFill } from 'react-icons/ri';
import { toast } from 'react-hot-toast';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { EscBtn, Info, Loading, Section,  } from 'components/SharedLayout/SharedLayout.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState(null);
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const route = `/movie/${movieId}`;
    toast.loading('Wait a minute...', { duration: 700 });

    setTimeout(async () => {
      try {
        const movieDetails = await fetchMovies(route);
        setInfo(movieDetails);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      } finally {
        toast.success('Ok! Let`s see what we have...');
      }
    }, 800);
  }, [movieId]);

  if (info === null) {
    return;
  }

  const {
    title,
    original_title,
    poster_path,
    budget,
    genres,
    homepage,
    release_date,
    vote_average,
    overview,
  } = info;
  const poster = poster_path && `http://image.tmdb.org/t/p/w342${poster_path}`;
  const release = release_date && release_date.slice(0, 4);
  const rating = vote_average && Math.round(vote_average * 10);
  const tags =
    genres &&
    genres.map(tag => (
      <li key={tag.id}>
        <p>{tag.name}</p>
      </li>
    ));

  return (
    <>
      {info && (
        <main>
          <EscBtn to={backLocationRef.current}>
            {/* <RiArrowLeftCircleFill />  */}
            Go back
          </EscBtn>
          <hr />
          <Section>
            <img src={poster} alt={original_title} width="220" height="340" />
            <Info>
              <h5>
                {title} ({release})
              </h5>
              {budget ? (
                <p>
                  The budget($): <b>{budget}</b>
                </p>
              ) : null}
              <p>
                User Score: <b>{rating}%</b>
              </p>
              <h3>Overview</h3>
              <p>{overview} </p>
              <h4>Genres</h4>
              <ul>{tags}</ul>
              {homepage && (
                <div>
                  <p>Homepage: </p>
                  <a href={homepage} target="_blank" rel="noreferrer">
                    {homepage}
                  </a>
                </div>
              )}
            </Info>
          </Section>
          <hr />
          <section>
            <h5>Additional information</h5>
            <ul>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
          </section>
          <hr />
          <Suspense fallback={<Loading>Loading...</Loading>}>
            <Outlet />
          </Suspense>
        </main>
      )}
    </>
  );
};
