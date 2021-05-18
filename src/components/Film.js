import React from "react";

const Film = (props) => {
  return (
    <section className="container">
      {props.movies.map((movie, index) => (
        <div key={index} className="wrap">
          <img src={movie.Poster} alt="movie cover"></img>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </section>
  );
};

export default Film;
