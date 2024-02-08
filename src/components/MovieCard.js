import React from "react";

function MovieCard({ movie, handleOnRemove, handleOnAdd }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
        <img src={movie.Poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">
            <div>Rate: {movie.imdbRating}</div>
            <div>Awards: {movie.Awards}</div>
            {movie.choice && <div>Choice: {movie.choice}</div>}
          </p>
          {handleOnAdd && (
            <div className="d-flex justify-content-between mb-1">
              <button
                className="btn btn-success"
                onClick={() => handleOnAdd(movie, "awesome")}
              >
                Awesome
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleOnAdd(movie, "boring")}
              >
                Boring
              </button>
            </div>
          )}
          <div className="d-grid">
            <button className="btn btn-danger" onClick={handleOnRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
