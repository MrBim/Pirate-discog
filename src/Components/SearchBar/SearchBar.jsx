import React, { useState } from "react";

const SearchBar = ({ term, setTerm }) => {
  const [inputValue, setInputValue] = useState(term);
  const handleTermUpdate = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setTerm(inputValue);
  };
  return (
    <div>
      <input value={inputValue} type="text" onChange={handleTermUpdate} />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
