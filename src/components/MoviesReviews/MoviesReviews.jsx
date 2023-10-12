import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/api';
// import { ToastContainer } from 'react-toastify';
// import { success, error1 } from '../../services/toasts';
import { toast } from 'react-hot-toast';

export const MoviesReviews = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const route = `/movie/${movieId}/reviews`;
    // const [isLoading, setIsLoading] = useState(false);
    toast.loading('Wait a second...', { duration: 400 });

    setTimeout(async () => {
      try {
        const { results } = await fetchMovies(route);
        if (results?.length === 0) {
        // error1();
        toast('Sorry, we have no reviews...');
        return;
        }
        setDetails([...results]);
        // success();
        toast.success('Here you are!');
      } catch (error) {
        console.warn(error);
        // error1();
        toast.error('Oops! Something went wrong...');
      }
    }, 400);
  }, [movieId]);

  return (
    <section>
      {details === null ? (
        <b>
          Sorry, we don't have any reviews for this movie...
          </b>
      ) : (
        <ul style={{ listStyle: 'none' }}>
          {details?.map(item => (
            <li key={item.id}>
              <p>
                Author: <b>{item.author} </b>
              </p>
              <span style={{ textDecoration: 'underline' }}>
                {item.created_at.slice(0, 10)}
              </span>
              <p>{item.content}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
      {/* <ToastContainer/> */}
    </section>
  );
};
