import { useEffect, useState } from "react";
import { useMoodboard } from "../../store/moodboardStore";

export default function MoodboardGrid() {
  const {
    activeBoard,
    openImage,
  } = useMoodboard();

  const [visibleCount, setVisibleCount] =
    useState(20);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight +
          window.scrollY >=
        document.body.offsetHeight - 400
      ) {
        setVisibleCount(
          (prev) => prev + 12
        );
      }
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  if (!activeBoard) return null;

  if (activeBoard.images.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          opacity: .7,
        }}
      >
        No saved inspiration yet
      </div>
    );
  }

  return (
    <div
      style={{
        columnCount: 4,
        columnGap: "20px",
        marginTop: "40px",
      }}
    >
      {activeBoard.images
        .slice(0, visibleCount)
        .map((image) => (
          <div
            key={image.id}
            style={{
              breakInside: "avoid",
              marginBottom: "20px",
            }}
          >
            <img
              src={image.src}
              onClick={() =>
                openImage(image)
              }
              style={{
                width: "100%",
                borderRadius: "24px",
                cursor: "pointer",
                transition: ".3s",
              }}
            />
          </div>
        ))}
    </div>
  );
}