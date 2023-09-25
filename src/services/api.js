import axios from "axios";

axios.defaults.baseURL = 'https://www.themoviedb.org/3';
const API_KEY = "88e67d7edc0f696b587d6a791cca033c";

export const fetchMovies = async (route, info) => {
    const response = await axios.get(`${route}?api_key=${API_KEY}${info ?? ''}`);
    return response.data;
  };