import axios from "axios";

axios.defaults.baseURL = 'https://www.themoviedb.org/3';
const API_KEY = "88e67d7edc0f696b587d6a791cca033c";

export const fetchImages = async (query, page) => {
    const response = await axios.get(`?key=${API_KEY}&q=${query}&page=${page}`);
    return response.data;
  };