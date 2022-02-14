import React, { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { getArtistData } from "../../scripts/api-functions";
import styles from "./SearchResults.module.css";

const SearchResults = ({ term, setSelectedArtist }) => {
  const { data, error, refetch } = useQuery(
    "artistData",
    () => getArtistData(term),
    {
      enabled: !!term,
    }
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  const artistMemo = useMemo(() => {
    return data?.results ?? [];
  }, [data]);

  const handleSelectArtist = (e) => {
    const artistId = e.target.dataset.artist;
    setSelectedArtist(String(artistId));
  };
  return (
    <div data-test="search-input">
      <div>
        <h3>possible artists</h3>
        {error ? <h4>There has been a problem with your search</h4> : null}
        <div className={styles.searchResults}>
          {artistMemo &&
            artistMemo.map((artist) => (
              <div key={artist.id} className={styles.artistCard}>
                <button
                  data-test="artist-button"
                  onClick={handleSelectArtist}
                  data-artist={artist.id}
                  className={styles.artistCardButton}
                >
                  {artist.title}
                </button>
                <div className={styles.artistImageContainer}>
                  <img
                    src={artist.thumb}
                    className={styles.artistImage}
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
