import React from "react";

const Search = (props) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search for..."
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default Search;
