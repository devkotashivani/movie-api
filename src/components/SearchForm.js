import axios from "axios";
import React, { useState } from "react";
import MovieCard from "./MovieCard";
function SearchForm({ addMovieToList }) {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [isError, setIsError] = useState(false);
  
  // 1. Save the value of input field to state
  const handleOnChange = (e) => {
    setForm(e.target.value);
    setIsError(false);
  };

  const handleAddMovieAndClear = (movie, type) => {
    addMovieToList(movie, type);
    setForm("");
    setMovie({});
  };

  const ombdAPI = "https://www.omdbapi.com/?apikey=255d5728&t=";
  // 2. Make user of form state to Make API call when search is pressed
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(ombdAPI + form);
      if (response.data.imdbID) {
        setMovie(response.data);
      } else {
        setIsError(true);
        setMovie({});
      }
    } catch (e) {
      setIsError(true);
      setMovie({});
    }
  };

  const handleOnRemove = (e) => {
    e.preventDefault();
    setMovie({});
  };
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              value={form}
              type="text"
              className="form-control"
              onChange={handleOnChange}
            />
          </div>
          <div className="col-3 d-grid">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
      {movie.imdbID && (
        <MovieCard
          handleOnAdd={handleAddMovieAndClear}
          movie={movie}
          handleOnRemove={handleOnRemove}
        />
      )}
      {isError && (
        <div className="alert alert-warning" role="alert">
          No Movie Found
        </div>
      )}
    </div>
  );
}

export default SearchForm;
