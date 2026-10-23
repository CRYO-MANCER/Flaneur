import { useState } from "react";
import GlassCard from "../ui/GlassCard";
import { useWellness } from "../../store/wellnessStore";

export default function GratitudeCard() {
  const {
    gratitudes,
    addGratitude,
  } = useWellness();

  const [text, setText] =
    useState("");

  return (
    <GlassCard>
      <h3>🙏 Gratitude</h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "18px",
        }}
      >
        <input
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          placeholder="Something you're grateful for..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "12px",
          }}
        />

        <button
          onClick={() => {
            if (!text.trim())
              return;

            addGratitude(text);

            setText("");
          }}
        >
          Add
        </button>
      </div>

      <div
        style={{
          marginTop: "24px",
        }}
      >
        {gratitudes
          .slice(0, 2)
          .map((item) => (
            <div
              key={item.id}
              style={{
                padding: "14px",
                marginBottom: "14px",
                borderRadius: "14px",
                background:
                  "rgba(255,255,255,.05)",
              }}
            >
              {item.text}
            </div>
          ))}
      </div>
    </GlassCard>
  );
}