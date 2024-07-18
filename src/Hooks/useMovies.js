import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const API_KEY = "52ef927bbeb21980cd91386a29403c78";
  const BASE_URL = "https://api.themoviedb.org/3";

  // Fetch all movies
  const getAllMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ar`);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Fetch movies by page
  const getPage = async (page) => {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ar&page=${page}`);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Search for movies
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${word}&language=ar`);
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return { movies, pageCount, getPage, search };
};

export default useMovies;
