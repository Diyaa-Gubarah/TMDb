import { useQuery, useQueryClient } from '@tanstack/react-query';

import { MovieListResponse } from './api/getMovies';
import { getMovies } from './api';

const useMoviesQuery = () => {
    const queryClient = useQueryClient();
    const { data: movies, isLoading, isError } = useQuery<unknown, Error, MovieListResponse>(['movies'], () => {
        // Use cached data if available
        const cachedData = queryClient.getQueryData<MovieListResponse>(['movies']);

        if (cachedData) {
            return cachedData;
        }

        // if not call getMovies api function
        return getMovies(queryClient);
    });

    return { movies, isLoading, isError };
};

export default useMoviesQuery;
