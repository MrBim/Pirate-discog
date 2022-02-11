export const getArtistData = async (term) => {
  const url = `https://api.discogs.com/database/search?q=${term}&type=release&token=ckriixydRMHVDiabxrsRIjfzzRdRvrcGrYYCkTRk`;
  const res = await fetch(url);
  return res.json();
};
