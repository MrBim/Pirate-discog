export const getArtist = async (term) => {
    const url = `https://api.discogs.com/database/search?q=${term}`
    const options = {

    }
    const res = fetch(url, options);
    return await res.json();
}
