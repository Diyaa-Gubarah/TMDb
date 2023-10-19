import {
  API_KEY,
  BASE_URL,
  DEBUG
} from '@env';

import { Movie } from '../../types/movie';
import { QueryClient } from '@tanstack/react-query';

// Now you can use these variables in your code
console.log(API_KEY);
console.log(BASE_URL);
console.log(`DEBUG ${DEBUG}`);

// const API_KEY = 'ad6346552fdd528244db9469d37852d7';

// const BASE_URL = 'https://api.themoviedb.org/3';

const ENDPOINTS = {
  popularMovies: '/movie/popular',
};


export type MovieListResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

// Fetch popular movies from TMDb API.
const getMovies = async (queryClient: QueryClient) => {
  const response = await fetch(
    `${BASE_URL}${ENDPOINTS.popularMovies}?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {

    throw new Error('Network response was not ok');
  }

  const data: MovieListResponse = await response.json();

  // Set the retrieved data into the cache with specific query parameters
  queryClient.setQueryData(['movies'], data);
  return data
};

export default getMovies;
