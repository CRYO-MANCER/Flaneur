import { useState } from "react";

export default function AIMoodboardCard() {
  const [prompt, setPrompt] =
    useState("");

  return (
    <div
      style={{
        marginTop: "40px",
        padding: "30px",
        borderRadius: "30px",
        background:
          "rgba(255,255,255,.04)",
        border:
          "1px solid rgba(255,255,255,.08)",
      }}
    >
      <h2>
        ✨ AI Moodboard
      </h2>

      <p
        style={{
          opacity: .7,
          marginTop: "8px",
        }}
      >
        Describe an aesthetic and
        Flâneur will build a board.
      </p>

      <input
        value={prompt}
        onChange={(e) =>
          setPrompt(
            e.target.value
          )
        }
        placeholder="cozy rainy japanese café"
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "16px",
          borderRadius: "18px",
        }}
      />

      <button
        style={{
          marginTop: "20px",
        }}
      >
        Generate Moodboard
      </button>
    </div>
  );
}