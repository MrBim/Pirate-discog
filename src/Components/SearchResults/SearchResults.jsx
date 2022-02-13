import React, { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { getArtistData } from "../../scripts/api-functions";

const SearchResults = ({ term, setSelectedArtist }) => {
  const query = useQuery("artistData", () => getArtistData(term), {
    enabled: !!term,
  });

  useEffect(() => {
    query.refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  const artistMemo = useMemo(() => {
    return query?.data?.results ?? [];
  }, [query?.data]);

  const handleSelectArtist = (e) => {
    const artistId = e.target.dataset.artist;
    setSelectedArtist(String(artistId));
  };
  return (
    <div>
      <div>
        <h3>possible artists</h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {artistMemo &&
            artistMemo.map((artist) => (
              <div
                key={artist.id}
                style={{
                  border: "1px solid black",
                  margin: "0.4%",
                  display: "flex",
                  maxWidth: "300px",
                  justifyContent: "space-between",
                  height: "50px",
                  width: "24.2%",
                }}
              >
                <button onClick={handleSelectArtist} data-artist={artist.id} style={{minWidth: "50%"}}>
                  {artist.title}
                </button>
                <div>
                  <img
                    src={artist.thumb}
                    style={{ maxHeight: "50px" }}
                    alt={`${artist.title}`}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
