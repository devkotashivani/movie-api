import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList({ handleOnRemove, movieList }) {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const filterMovie = (filterBy) => {
    console.log("Filter By", filterBy);
    // choice: all, boring, awesome
    // all
    if (filterBy === "all") {
      setDisplayList(movieList);
    } else {
      const filteredArr = movieList.filter(
        (movie) => movie.choice === filterBy
      );
      setDisplayList(filteredArr);
    }
  };
  return (
    <div>
      <hr />
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => filterMovie("all")}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => filterMovie("boring")}
        >
          Boring
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => filterMovie("awesome")}
        >
          Awesome
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        {displayList.map((movie) => (
          <MovieCard
            handleOnRemove={() => handleOnRemove(movie)}
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
