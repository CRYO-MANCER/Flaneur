import {
  useRef,
} from "react";

import { motion } from "framer-motion";

import {
  useMoodboard,
} from "../../store/moodboardStore";

export default function UploadZone() {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const {
    addImage,
  } = useMoodboard();

  function processFile(
    file: File
  ) {
    const reader =
      new FileReader();

    reader.onload = () => {
      addImage(
        reader.result as string
      );
    };

    reader.readAsDataURL(file);
  }

  function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      e.target.files?.[0];

    if (!file) return;

    processFile(file);
  }

  function handleDrop(
    e: React.DragEvent<HTMLDivElement>
  ) {
    e.preventDefault();

    const file =
      e.dataTransfer.files?.[0];

    if (!file) return;

    processFile(file);
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

      <motion.div
        whileHover={{
          scale: 1.01,
        }}
        onClick={() =>
          inputRef.current?.click()
        }
        onDragOver={(e) =>
          e.preventDefault()
        }
        onDrop={handleDrop}
        style={{
          border:
            "2px dashed rgba(255,255,255,0.15)",

          borderRadius: "24px",

          padding: "48px",

          textAlign: "center",

          marginBottom: "40px",

          background:
            "rgba(255,255,255,0.03)",

          cursor: "pointer",
        }}
      >
        <div
          style={{
            fontSize: "42px",
            marginBottom: "16px",
          }}
        >
          🖼️
        </div>

        <h2>
          Drop Images Here
        </h2>

        <p
          style={{
            opacity: 0.7,
            marginTop: "8px",
          }}
        >
          or click to upload
        </p>
      </motion.div>
    </>
  );
}