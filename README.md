# IMDb Clone - Movie Card Component

A React-based IMDb clone application featuring a reusable MovieCard component with real movie data from the OMDB API.

## ✨ Features

- **Reusable MovieCard Component**: Displays movie poster, title, release year, and rating
- **Real Movie Data**: Fetches popular movies from OMDB API
- **Beautiful UI**: Dark theme with IMDb-style yellow branding
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Loading States**: Animated spinner while fetching data
- **Error Handling**: Graceful error messages and image fallbacks
- **Hover Effects**: Interactive card animations

## 🎬 MovieCard Component

The MovieCard component accepts the following props:

- `poster` - URL to the movie poster image
- `title` - Movie title
- `year` - Release year
- `rating` - IMDb rating

### Usage Example

```javascript
<MovieCard
  poster="https://example.com/poster.jpg"
  title="The Shawshank Redemption"
  year="1994"
  rating="9.3"
/>
```

## 🔧 Technologies Used

- React 19.2.0
- OMDB API (API Key: c32d4592)
- CSS3 with Grid Layout
- React Hooks (useState, useEffect)

## 📁 Project Structure

```
src/
├── components/
│   ├── MovieCard.js      # Reusable movie card component
│   └── MovieCard.css     # Component styles
├── services/
│   └── omdbApi.js        # API service for OMDB
├── data/
│   └── sampleMovies.js   # Static sample data (backup)
├── App.js                # Main application component
├── App.css               # Application styles
└── index.js              # Application entry point
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 🎨 Styling Features

- Dark gradient background (#0f0f0f to #1a1a1a)
- Golden yellow accent color (#f5c518) matching IMDb branding
- Card hover effects with elevation
- Responsive grid layout (auto-fill with min 250px columns)
- Rating badge with star icon
- Image fallback placeholder with movie emoji
- Smooth transitions and animations

## 🔌 API Integration

The app uses OMDB API to fetch real movie data:

- **Base URL**: `http://www.omdbapi.com/`
- **API Key**: `c32d4592`

### Available API Functions

```javascript
import { fetchMovieById, fetchPopularMovies, searchMovies } from './services/omdbApi';

// Fetch a single movie
const movie = await fetchMovieById('tt0111161');

// Fetch popular movies (default 12)
const movies = await fetchPopularMovies(12);

// Search movies by title
const results = await searchMovies('matrix');
```

## 📱 Responsive Breakpoints

- **Desktop**: Default grid layout
- **Tablet** (≤768px): Adjusted spacing and font sizes
- **Mobile** (≤480px): Single column layout

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
