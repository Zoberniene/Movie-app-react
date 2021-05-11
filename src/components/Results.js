import React from "react";
import Search from "./Search";
import { useState, useEffect } from "react";
import Film from "./Film";
import Heading from "./Heading";

const Results = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getData = async (searchValue) => {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=998c67a1`
      );
      const response = await res.json();
      console.log(response);

      if (response.Search) {
        setMovies(response.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    /*to make sure the API call only happens when the app loads for the first time*/
    getData(searchValue); /*whenever the searchValue changes*/
  }, [searchValue]);

  return (
    <React.Fragment>
      <Heading heading="Movies" />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Film movies={movies} />
    </React.Fragment>
  );
};

export default Results;
