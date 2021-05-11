import React from "react";

const Film = (props) => {
  return (
    <React.Fragment>
      {props.movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Film;
