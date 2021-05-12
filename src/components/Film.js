import React from "react";

const Film = (props) => {
  return (
    <React.Fragment>
      {props.movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.Poster} alt="movie cover"></img>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Film;
