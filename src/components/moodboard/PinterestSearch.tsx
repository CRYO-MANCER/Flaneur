import { useState } from "react";

import { searchUnsplash } from "../../services/unsplash";
import { searchPexels } from "../../services/pexels";

import { useMoodboard } from "../../store/moodboardStore";

import SearchResultsGrid from "./SearchResultsGrid";

export default function PinterestSearch() {
  const [query, setQuery] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [images, setImages] =
    useState<any[]>([]);

  const { addImage } =
    useMoodboard();

  async function handleSearch() {
    if (!query.trim())
      return;

    setLoading(true);

    const unsplash =
      await searchUnsplash(query);

    const pexels =
      await searchPexels(query);

    setImages([
      ...unsplash,
      ...pexels,
    ]);

    setLoading(false);
  }

  return (
    <div
      style={{
        marginBottom: "40px",
      }}
    >
      <h2>
        Inspiration Search
      </h2>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        <input
          value={query}
          onChange={(e) =>
            setQuery(
              e.target.value
            )
          }
          placeholder="dark academia, cafe, old money..."
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "16px",
          }}
        />

        <button
          onClick={
            handleSearch
          }
        >
          Search
        </button>
      </div>

      {loading && (
        <div
          style={{
            marginTop: "24px",
            opacity: .7,
          }}
        >
          Searching...
        </div>
      )}

      <SearchResultsGrid
        images={images}
        onSave={addImage}
      />
    </div>
  );
}