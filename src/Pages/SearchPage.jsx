import React, { useState } from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import SearchResults from "../Components/SearchResults/SearchResults";

const SearchPage = () => {
  const [term, setTerm] = useState("");
  const handleSetTerm = (term) => {
    setTerm(term);
  };
  return (
    <div>
      SearchPage
      <SearchBar term={term} setTerm={handleSetTerm} />
      <SearchResults term={term} />
    </div>
  );
};

export default SearchPage;
