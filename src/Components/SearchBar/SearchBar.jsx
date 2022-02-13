import React, { useState } from "react";
import styles from './SearchBar.module.css';

const SearchBar = ({ term, setTerm }) => {
  const [inputValue, setInputValue] = useState(term);
  const handleTermUpdate = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setTerm(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTerm(inputValue);
    }
  };
  return (
    <div>
      <input
      className={styles.searchInput}
        value={inputValue}
        type="text"
        onChange={handleTermUpdate}
        onKeyPress={handleKeyPress}
      />
      <button className={styles.searchButton} onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
