import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../../services/api';
// import { Loader } from '../Loader/Loader';
// import { ToastContainer } from 'react-toastify';
// import { success, error1 } from '../../services/toasts';
import { toast } from 'react-hot-toast';

export const MoviesCast = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const route = `/movie/${movieId}/credits`;
  //  setIsLoading(true);
  toast.loading('Wait a second...', { duration: 400 });

    setTimeout(async () => {
      try {
        const { cast } = await fetchMovies(route);
        setDetails([...cast]);
      } catch (error) {
        console.warn(error);
        toast.error('Oops! Something went wrong...');
      } finally {
        toast.success('You`ve got it!');
      }
        // success();
        // setIsLoading(false);
    }, 400);
  }, [movieId]);

  return (
    <section>
      <ul>
        {details !== [] &&
          details.map(info => (
            <li key={info.credit_id}>
              <img src={
                  info.profile_path &&
                  `http://image.tmdb.org/t/p/w185${info.profile_path}`
                }
                alt={info.original_name}
              />
              <h3>{info.name} </h3>
              <p>
                Character: <b>{info.character} </b>
              </p>
              <hr />
            </li>
          ))}
      </ul>
      {/* <ToastContainer/> */}
    </section>
  );
};
