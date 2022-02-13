import _ from "lodash";
import React, { useMemo, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getReleases } from "../../scripts/api-functions";
// import { sortResults } from "../../scripts/data-functions";

const AlbumBrowser = (artistId) => {
  const [sortOrder, setSortOrder] = useState("b1");
  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

  const query = useQuery("releases", () => getReleases(artistId, sortOrder), {
    enabled: !!artistId,
  });
  const releases = useMemo(() => {
    const queryData = query?.data?.releases ?? [];
    const sortDirection = sortOrder.includes("1") ? "asc" : "desc";
    const sortKey = sortOrder.includes("a") ? "title" : "year";
    return _.orderBy(queryData, sortKey, sortDirection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query?.data]);

  useEffect(() => {
    query.refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOrder]);
  return (
    <div>
      <label htmlFor="sort-order" style={{margin: "4px 4px 4px 104px"}}>Sort By:</label>
      <select onChange={handleSortOrder} value={sortOrder} id="sort-order">
        <option value={"b1"}>Year (newest first)</option>
        <option value={"b2"}>Year (oldest first)</option>
        <option value={"a1"}>Name A-Z</option>
        <option value={"a2"}>Name Z-A</option>
      </select>
      <div style={{ margin: "4px 100px" }}>
        {!!releases &&
          releases.map((it) => (
            <div
              key={`${it.id}${it.title}${it.year}${it.role}`}
              style={{
                border: "1px solid black",
                margin: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100px",
                width: "100%",
              }}
            >
              <div>{it.title}</div>
              <div>{it.year}</div>
              <div>
                <img
                  style={{
                    maxHeight: "99px",
                    position: "relative",
                    top: "2px",
                  }}
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
