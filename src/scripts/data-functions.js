export const sortResults = (results, sortBy) => {
    console.log('sortBy', sortBy)
  if (results.length < 1) return;
  if (sortBy === "a1")
    return results.sort((a, b) => (a.title > b.title ? 1 : -1));
  if (sortBy === "a2")
    return results.sort((a, b) => (b.title > a.title ? -1 : 1));
  if (sortBy === "b1")
    return results.sort((a, b) => (a.year > b.year ? -1 : 1));
  if (sortBy === "b2")
    return results.sort((a, b) => (b.year < a.year ? 1 : -1));
  return results;
};
