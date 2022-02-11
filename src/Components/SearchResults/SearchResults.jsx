import React from "react";

const SearchResults = ({ term }) => {
  const data = [{id: "12345", albumName: "the best album"}];
  return (
    <div>
      <table>
        <thead>
          <tr>Album Name</tr>
        </thead>
        <tbody>
          {data && data.map((it) => (
            <tr key={it.id}>
              <td>{it.albumName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
