import { getArtistData, GetReleases } from "./api-functions";

test("the artist data is correct", () => {
  return getArtistData("koloto").then((data) => {
    expect(data).toStrictEqual({
      pagination: { page: 1, pages: 1, per_page: 50, items: 3, urls: {} },
      results: [
        {
          id: 4156958,
          type: "artist",
          user_data: { in_wantlist: false, in_collection: false },
          master_id: null,
          master_url: null,
          uri: "/artist/4156958-Koloto",
          title: "Koloto",
          thumb:
            "https://i.discogs.com/bA2_hNLr9JsheyOumdjzbbcWU2WEjjELpJiKw-J4fHc/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWltYWdlcy9BLTQx/NTY5NTgtMTYwNTg2/ODMwMy04OTA2Lmpw/ZWc.jpeg",
          cover_image:
            "https://i.discogs.com/4pcoylSsePaADxolmxGXydg2dJSBReYtpPcTU5KTu7s/rs:fit/g:sm/q:90/h:400/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9BLTQx/NTY5NTgtMTYwNTg2/ODMwMy04OTA2Lmpw/ZWc.jpeg",
          resource_url: "https://api.discogs.com/artists/4156958",
        },
        {
          id: 8937958,
          type: "artist",
          user_data: { in_wantlist: false, in_collection: false },
          master_id: null,
          master_url: null,
          uri: "/artist/8937958-Kolotov-Mocktails",
          title: "Kolotov Mocktails",
          thumb: "",
          cover_image:
            "https://s.discogs.com/af39677cd83a76db0f8bb8cff4aefc7c956d184d/images/spacer.gif",
          resource_url: "https://api.discogs.com/artists/8937958",
        },
        {
          id: 6400006,
          type: "artist",
          user_data: { in_wantlist: false, in_collection: false },
          master_id: null,
          master_url: null,
          uri: "/artist/6400006-Maria-Kolotova",
          title: "Maria Kolotova",
          thumb: "",
          cover_image:
            "https://s.discogs.com/af39677cd83a76db0f8bb8cff4aefc7c956d184d/images/spacer.gif",
          resource_url: "https://api.discogs.com/artists/6400006",
        },
      ],
    });
  });
});

test("the data is peanut butter", () => {
  return getArtistData("4156958", "b1").then((data) => {
    expect(data).toStrictEqual({
      pagination: { page: 1, pages: 1, per_page: 50, items: 6, urls: {} },
      releases: [
        {
          id: 6434134,
          status: "Accepted",
          type: "release",
          format: "CD, EP, Ltd",
          label: "Abandon Building Records",
          title: "Mechanica",
          resource_url: "https://api.discogs.com/releases/6434134",
          role: "Main",
          artist: "Koloto",
          year: 2014,
          thumb:
            "https://i.discogs.com/SthZm6aw5cTwdIfYfkScYgGG44gNMt3cz_zwd7TbkBk/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTY0/MzQxMzQtMTQxOTEy/NjEyOS0yMzgwLmpw/ZWc.jpeg",
          stats: {
            community: { in_wantlist: 15, in_collection: 7 },
            user: { in_wantlist: 0, in_collection: 0 },
          },
        },
        {
          id: 8984079,
          status: "Accepted",
          type: "release",
          format: "File, MP3, 320",
          label: "Secret Songs",
          title: "Life In Clay",
          resource_url: "https://api.discogs.com/releases/8984079",
          role: "Main",
          artist: "Koloto",
          year: 2015,
          thumb:
            "https://i.discogs.com/BtqxEtnP8qZLX3SK7gr9u2mzQ49Yz-_F2NbOJWtk5fQ/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTg5/ODQwNzktMTQ3Mjc1/Mjg5MC0yOTIwLmpw/ZWc.jpeg",
          stats: {
            community: { in_wantlist: 0, in_collection: 1 },
            user: { in_wantlist: 0, in_collection: 0 },
          },
        },
        {
          id: 18722326,
          status: "Accepted",
          type: "release",
          format: "File, MP3, Single, 320",
          label: "United We Fly",
          title: "Towards? (Koloto Remix)",
          resource_url: "https://api.discogs.com/releases/18722326",
          role: "Remix",
          artist: "Theodore (9)",
          year: 2018,
          thumb:
            "https://i.discogs.com/QJEXWfF3LNTvQml4hvsj950k0Jp1xcDeuODLGOG1NTM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTE4/NzIyMzI2LTE2MjA5/OTQ4MDctMzExOS5q/cGVn.jpeg",
          stats: {
            community: { in_wantlist: 0, in_collection: 0 },
            user: { in_wantlist: 0, in_collection: 0 },
          },
        },
        {
          id: 18722326,
          status: "Accepted",
          type: "release",
          format: "File, MP3, Single, 320",
          label: "United We Fly",
          title: "Towards? (Koloto Remix)",
          resource_url: "https://api.discogs.com/releases/18722326",
          role: "Producer",
          artist: "Theodore (9)",
          year: 2018,
          thumb:
            "https://i.discogs.com/QJEXWfF3LNTvQml4hvsj950k0Jp1xcDeuODLGOG1NTM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTE4/NzIyMzI2LTE2MjA5/OTQ4MDctMzExOS5q/cGVn.jpeg",
          stats: {
            community: { in_wantlist: 0, in_collection: 0 },
            user: { in_wantlist: 0, in_collection: 0 },
          },
        },
        {
          id: 1198834,
          title: "A Thousand Tones",
          type: "master",
          main_release: 10467992,
          artist: "Various",
          role: "TrackAppearance",
          resource_url: "https://api.discogs.com/masters/1198834",
          year: 2017,
          thumb:
            "https://i.discogs.com/qu1vQ8H0Ams8lf2Ggur78kz3DAEFFVIanfC1856xEFI/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTEw/NDY3OTkyLTE0OTgw/NDg4NjMtNzIzNy5q/cGVn.jpeg",
          stats: {
            community: { in_wantlist: 13, in_collection: 6 },
            user: { in_wantlist: 0, in_collection: 0 },
          },
        },
        {
          id: 17636854,
          status: "Accepted",
          type: "release",
          format: "10xFile, MP3, 320",
          label: "Secret Songs",
          title: "Secret Songs Volume 3",
          resource_url: "https://api.discogs.com/releases/17636854",
          role: "TrackAppearance",
          artist: "Various",
          trackinfo: "Life In Clay",
          year: 2019,
          thumb:
            "https://i.discogs.com/HEikE70VhYrQAqlhR2PgG2GyW2MqSnvLpLYJOl58hjM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTE3/NjM2ODU0LTE2MTQ1/NzIzNTQtMjA2MC5q/cGVn.jpeg",
          stats: {
            community: { in_wantlist: 0, in_collection: 1 },
            user: { in_wantlist: 0, in_collection: 0 },
          },
        },
      ],
    });
  });
});
