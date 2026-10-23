const CLIENT_ID =
  import.meta.env
    .VITE_SPOTIFY_CLIENT_ID;

const CLIENT_SECRET =
  import.meta.env
    .VITE_SPOTIFY_CLIENT_SECRET;

export async function searchSpotify(
  query: string
) {
  if (!query) return [];

  const tokenResponse =
    await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",

        headers: {
          Authorization:
            "Basic " +
            btoa(
              `${CLIENT_ID}:${CLIENT_SECRET}`
            ),

          "Content-Type":
            "application/x-www-form-urlencoded",
        },

        body:
          "grant_type=client_credentials",
      }
    );

  const tokenData =
    await tokenResponse.json();

  const accessToken =
    tokenData.access_token;

  const response =
    await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`,
      {
        headers: {
          Authorization:
            `Bearer ${accessToken}`,
        },
      }
    );

  const data =
    await response.json();

  return (
    data?.tracks?.items || []
  );
}