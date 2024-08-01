// src/App.js
import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';

const App = () => {
  // State to hold the list of movies
  const [movies, setMovies] = useState([]);
  // State to hold the new movie input values
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });
  // State to hold the filter criteria
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  // Handler to add a new movie
  const addMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' }); // Clear input fields
  };

  // Filter movies based on title and rating
  const filteredMovies = movies.filter(movie => 
    (titleFilter === '' || movie.title.toLowerCase().includes(titleFilter.toLowerCase())) &&
    (ratingFilter === '' || movie.rating >= ratingFilter)
  );

  return (
    <div className="app">
      <h1>Movie App</h1>
      
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
      
      <Filter
        title={titleFilter}
        rating={ratingFilter}
        setTitle={setTitleFilter}
        setRating={setRatingFilter}
      />
      
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
