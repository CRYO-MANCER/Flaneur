import { useRef } from "react";

import {
  useMoodboard,
} from "../../store/moodboardStore";

export default function ImageUploader() {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const {
    addImage,
  } = useMoodboard();

  function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      e.target.files?.[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = () => {
      addImage(
        reader.result as string
      );
    };

    reader.readAsDataURL(file);
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleUpload}
      />

      <div
        onClick={() =>
          inputRef.current?.click()
        }
        style={{
          cursor: "pointer",
          minHeight: "220px",
          border:
            "2px dashed rgba(255,255,255,.08)",
          borderRadius: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            fontSize: "42px",
          }}
        >
          🖼️
        </div>

        <div>
          Drop Images Here
        </div>

        <div
          style={{
            opacity: 0.6,
          }}
        >
          or click to upload
        </div>
      </div>
    </>
  );
}