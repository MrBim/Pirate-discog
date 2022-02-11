import React, { useEffect, useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getArtistData } from "../../scripts/api functions";

const SearchResults = ({ term }) => {
  const query = useQuery("artistData", () => getArtistData(term), {
    enabled: !!term,
  });

  useEffect(() => {
    query.refetch();
  }, [term]);

  const queryMemo = useMemo(() => {
    return query?.data?.results ?? [];
  }, [query?.data]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Album Name</th>
          </tr>
        </thead>
        <tbody>
          {queryMemo &&
            queryMemo.map((it) => (
              <tr key={it.id}>
                <td>{it.title}</td>
                <td>
                  <img style={{ maxHeight: "100px" }} src={it.cover_image} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
