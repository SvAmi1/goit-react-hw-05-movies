import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const options = {
  position: 'top-left',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const error1 = () =>
  toast.error('Oops, something went wrong...', options);
export const warn = () =>
  toast.warn('Sorry, you must enter something...', options);
export const empty = () =>
  toast.warn('Sorry, no movies with this query...', options);
export const info = () => toast.info('Oops! No more movies :(', options);
export const success = total =>
  toast.success(`WOW!!! We found it!`, options);