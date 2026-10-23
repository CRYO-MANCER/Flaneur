export async function searchPexels(
  query: string
) {
  try {
    const response =
      await fetch(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(
          query
        )}&per_page=20`,
        {
          headers: {
            Authorization:
              import.meta.env
                .VITE_PEXELS_KEY,
          },
        }
      );

    const data =
      await response.json();

    return (
      data.photos || []
    ).map((photo: any) => ({
      id: photo.id,

      src:
        photo.src.large,

      title:
        photo.alt ||
        "Untitled",

      source:
        "pexels",
    }));
  } catch (error) {
    console.error(
      "Pexels error",
      error
    );

    return [];
  }
}