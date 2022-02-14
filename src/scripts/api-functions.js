const handleErrors = (res) => {
  console.log("res", res);
  if (res.status === "404" || res.status === "500") {
    const message = res.json();
    throw message.message;
  }
  return res;
};

export const getArtistData = async (term) => {
  const url = `https://api.discogs.com/database/search?q=${term}&type=artist&token=ckriixydRMHVDiabxrsRIjfzzRdRvrcGrYYCkTRk`;
  const res = await fetch(url);
  handleErrors(res);
  return res.json();
};

export const getReleases = async (artist, sortOrder) => {
  const sortDirection = sortOrder.includes("1") ? "asc" : "desc";
  const sortType = sortOrder.includes("a") ? "title" : "year";
  const url = `https://api.discogs.com/artists/${artist.selectedArtist}/releases?sort=${sortType}&sort_order=${sortDirection}&token=ckriixydRMHVDiabxrsRIjfzzRdRvrcGrYYCkTRk`;
  const res = await fetch(url);
  handleErrors(res);
  return res.json();
};
