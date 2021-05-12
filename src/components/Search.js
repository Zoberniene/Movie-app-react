import React from "react";

const Search = (props) => {
  const search = (e) => {
    e.preventDefault();
    /*props.setSearchValue("frozen");
    console.log(e.target.value);*/
    props.setSearchValue(e.target.value);
    console.log(props.searchValue);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search for..."
        value={props.value}
        /*onChange={(e) => props.setSearchValue(e.target.value)}*/
      />
      <button onClick={search}>Search</button>
    </form>
  );
};

export default Search;
