import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchForm from "./components/SearchForm";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [movieList, setMovieList] = useState([]);

  // Movie information, choice: awesome, boring
  const addMovieToList = (movie, choice) => {
    const newMovie = { ...movie, choice };
    const alreadyHasMovie =
      movieList.filter((m) => m.imdbID === movie.imdbID).length > 0;
    if (alreadyHasMovie) {
      return;
    }
    setMovieList([...movieList, newMovie]);
  };

  const removeMovieFromList = (movie) => {
    const newArr = movieList.filter((m) => m.imdbID !== movie.imdbID);
    setMovieList(newArr);
  };

  return (
    <div className="wrapper bg-dark text-warning">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-3">
            <h1>My Movie API APP</h1>
            <hr />
          </div>
        </div>
        <SearchForm addMovieToList={addMovieToList} />
        <MovieList handleOnRemove={removeMovieFromList} movieList={movieList} />
      </div>
    </div>
  );
}

export default App;
