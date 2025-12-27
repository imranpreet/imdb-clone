const API_KEY = 'c32d4592';
const BASE_URL = 'http://www.omdbapi.com/';

// Popular movie IMDb IDs to fetch
const POPULAR_MOVIE_IDS = [
  'tt0111161', // The Shawshank Redemption
  'tt0068646', // The Godfather
  'tt0468569', // The Dark Knight
  'tt0108052', // Schindler's List
  'tt0167260', // The Lord of the Rings: The Return of the King
  'tt0110912', // Pulp Fiction
  'tt0120737', // The Lord of the Rings: The Fellowship of the Ring
  'tt0109830', // Forrest Gump
  'tt1375666', // Inception
  'tt0137523', // Fight Club
  'tt0080684', // Star Wars: Episode V
  'tt0167261', // The Lord of the Rings: The Two Towers
  'tt0073486', // One Flew Over the Cuckoo's Nest
  'tt0099685', // Goodfellas
  'tt0133093', // The Matrix
  'tt0047478', // Seven Samurai
  'tt0076759', // Star Wars: Episode IV
  'tt0317248', // City of God
  'tt0114369', // Se7en
  'tt0102926', // The Silence of the Lambs
  'tt0038650', // It's a Wonderful Life
  'tt0120815', // Saving Private Ryan
  'tt0816692', // Interstellar
  'tt0120689', // The Green Mile
];

export const fetchMovieById = async (imdbId) => {
  try {
    const response = await fetch(`${BASE_URL}?i=${imdbId}&apikey=${API_KEY}`);
    const data = await response.json();
    
    if (data.Response === 'True') {
      return {
        id: data.imdbID,
        title: data.Title,
        year: data.Year,
        rating: data.imdbRating,
        poster: data.Poster !== 'N/A' ? data.Poster : null,
        plot: data.Plot,
        genre: data.Genre,
        director: data.Director,
        actors: data.Actors,
        runtime: data.Runtime,
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching movie:', error);
    return null;
  }
};

export const fetchPopularMovies = async (count = 12) => {
  try {
    const movieIds = POPULAR_MOVIE_IDS.slice(0, count);
    const moviePromises = movieIds.map(id => fetchMovieById(id));
    const movies = await Promise.all(moviePromises);
    
    // Filter out any null results and return valid movies
    return movies.filter(movie => movie !== null);
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const searchMovies = async (searchTerm) => {
  try {
    const response = await fetch(`${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`);
    const data = await response.json();
    
    if (data.Response === 'True') {
      // Fetch detailed info for each search result
      const detailedMovies = await Promise.all(
        data.Search.slice(0, 12).map(movie => fetchMovieById(movie.imdbID))
      );
      return detailedMovies.filter(movie => movie !== null);
    }
    return [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};
