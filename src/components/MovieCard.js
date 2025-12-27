import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ poster, title, year, rating }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster-container">
        {!imageError ? (
          <img 
            src={poster} 
            alt={`${title} poster`}
            className="movie-poster"
            onError={handleImageError}
          />
        ) : (
          <div className="movie-poster-placeholder">
            <div className="placeholder-content">
              <span className="placeholder-icon">🎬</span>
              <p className="placeholder-title">{title}</p>
            </div>
          </div>
        )}
        <div className="movie-rating">
          <span className="rating-star">★</span>
          <span className="rating-value">{rating}</span>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
