import React, { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { getArtistData } from "../../scripts/api-functions";
import styles from './SearchResults.module.css';

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
        <div className={styles.searchResults}>
          {artistMemo &&
            artistMemo.map((artist) => (
              <div
                key={artist.id}
               className={styles.artistCard}
              >
                <button onClick={handleSelectArtist} data-artist={artist.id} className={styles.artistCardButton}>
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
