import { Movie } from '../../types/movie';
import create from 'zustand';

// Define the state shape
type MovieState = {
    selectedMovie: Movie | null;
    setMovie: (movie: Movie) => void;
};

// Create a Zustand store
export const useMovieStore = create<MovieState>((set) => ({
    selectedMovie: null,
    setMovie: (movie: Movie) => set({ selectedMovie: movie }),
}));
