import React from "react";

const SearchForm = ({ setSearchTerm }) => {
  const searchValue = React.useRef("");

  function searchMovies() {
    setSearchTerm(searchValue.current.value);
  }

  return (
    <header>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        ref={searchValue}
        onChange={searchMovies}
      />
    </header>
  );
};

export default SearchForm;