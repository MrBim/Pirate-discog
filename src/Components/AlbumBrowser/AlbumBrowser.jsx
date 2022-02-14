import _ from "lodash";
import React, { useMemo, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getReleases } from "../../scripts/api-functions";
import styles from "./AlbumBrowser.module.css";

const AlbumBrowser = (artistId) => {
  const [sortOrder, setSortOrder] = useState("b1");
  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const { data, error, refetch } = useQuery("releases", () => getReleases(artistId, sortOrder), {
    enabled: !!artistId,
  });
  const releases = useMemo(() => {
    const queryData = data?.releases ?? [];
    const sortDirection = sortOrder.includes("1") ? "asc" : "desc";
    const sortKey = sortOrder.includes("a") ? "title" : "year";
    return _.orderBy(queryData, sortKey, sortDirection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOrder]);
  if(error) return <h4>There has been a problem with your search</h4>;
  return (
    <div data-test="release-results-container">
      <label htmlFor="sort-order" className={styles.selectLabel}>
        Sort By:
      </label>
      <select onChange={handleSortOrder} value={sortOrder} id="sort-order">
        <option value={"b2"}>Year (newest first)</option>
        <option value={"b1"}>Year (oldest first)</option>
        <option value={"a1"}>Name A-Z</option>
        <option value={"a2"}>Name Z-A</option>
      </select>
      <div className={styles.releaseCardContainer}>
        {!!releases &&
          releases.map((it) => (
            <div
              key={`${it.id}${it.title}${it.year}${it.role}`}
              className={styles.releaseCard}
              data-test="release-result"
            >
              <div>{it.title}</div>
              <div>{it.year}</div>
              <div>
                <img
                  className={styles.releaseCardImage}
                  src={it.thumb}
                  alt={`${it.title} album cover`}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AlbumBrowser;
