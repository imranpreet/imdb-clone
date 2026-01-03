// Using TMDB API (The Movie Database) - Free and doesn't require API key for basic requests
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = '8265bd1679663a7ea12ac168da84d2e8'; // Free TMDB API key
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

// Fetch popular movies from TMDB
export const fetchPopularMovies = async (count = 12) => {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    
    if (data.results) {
      // Map TMDB data to our movie format
      const movies = data.results.slice(0, count).map(movie => ({
        id: movie.id,
        title: movie.title,
        year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
        rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
        poster: movie.poster_path ? `${TMDB_IMAGE_BASE}${movie.poster_path}` : null,
        plot: movie.overview,
        genre: movie.genre_ids,
      }));
      return movies;
    }
    return [];
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

// Fetch movie by ID from TMDB
export const fetchMovieById = async (movieId) => {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const data = await response.json();
    
    if (data.id) {
      return {
        id: data.id,
        title: data.title,
        year: data.release_date ? data.release_date.split('-')[0] : 'N/A',
        rating: data.vote_average ? data.vote_average.toFixed(1) : 'N/A',
        poster: data.poster_path ? `${TMDB_IMAGE_BASE}${data.poster_path}` : null,
        plot: data.overview,
        genre: data.genres ? data.genres.map(g => g.name).join(', ') : '',
        runtime: data.runtime,
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching movie:', error);
    return null;
  }
};

// Search movies by term from TMDB
export const searchMovies = async (searchTerm) => {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(searchTerm)}&page=1`
    );
    const data = await response.json();
    
    if (data.results) {
      const movies = data.results.slice(0, 12).map(movie => ({
        id: movie.id,
        title: movie.title,
        year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
        rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
        poster: movie.poster_path ? `${TMDB_IMAGE_BASE}${movie.poster_path}` : null,
        plot: movie.overview,
      }));
      return movies.filter(movie => movie.poster !== null);
    }
    return [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};
