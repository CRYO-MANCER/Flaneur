import { useState } from "react";
import { useMoodboard } from "../../store/moodboardStore";

export default function CollectionTabs() {
  const { activeBoard } = useMoodboard();

  const [selectedCollection] =
    useState("All");

  if (!activeBoard) return null;

  const collections = [
    "All",
    ...new Set(
      activeBoard.images.map(
        (image) =>
          image.collection || "General"
      )
    ),
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        marginTop: "20px",
        marginBottom: "30px",
      }}
    >
      {collections.map((collection) => (
        <div
          key={collection}
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            background:
              selectedCollection === collection
                ? "linear-gradient(135deg,#8b5cf6,#ec4899)"
                : "rgba(255,255,255,.06)",

            cursor: "pointer",
          }}
        >
          {collection}
        </div>
      ))}
    </div>
  );
}