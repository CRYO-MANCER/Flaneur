export async function searchUnsplash(
  query: string
) {
  try {
    const response =
      await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          query
        )}&per_page=20`,
        {
          headers: {
            Authorization: `Client-ID ${
              import.meta.env
                .VITE_UNSPLASH_KEY
            }`,
          },
        }
      );

    const data =
      await response.json();

    return (
      data.results || []
    ).map((image: any) => ({
      id: image.id,

      src:
        image.urls.regular,

      title:
        image.alt_description ||
        "Untitled",

      source:
        "unsplash",
    }));
  } catch (error) {
    console.error(
      "Unsplash error",
      error
    );

    return [];
  }
}