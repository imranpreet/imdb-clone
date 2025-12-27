import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import { fetchPopularMovies } from './services/omdbApi';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const popularMovies = await fetchPopularMovies(12);
        setMovies(popularMovies);
        setError(null);
      } catch (err) {
        setError('Failed to load movies. Please try again later.');
        console.error('Error loading movies:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <h1>IMDb Clone</h1>
        <p className="tagline">Popular Movies</p>
      </header>
      <main className="movies-container">
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading movies...</p>
          </div>
        )}
        
        {error && (
          <div className="error-container">
            <p className="error-text">{error}</p>
          </div>
        )}
        
        {!loading && !error && movies.length > 0 && (
          <>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
              />
            ))}
          </>
        )}
        
        {!loading && !error && movies.length === 0 && (
          <div className="no-movies">
            <p>No movies found.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
