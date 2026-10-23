import {
  useMoodboard,
} from "../../store/moodboardStore";

export default function UserImages() {
  const {
    activeBoard,
  } = useMoodboard();

  return (
    <>
      {(activeBoard?.images ?? []).map((img) => (
        <div
          key={img.id}
          style={{
            breakInside: "avoid",
            marginBottom: "24px",
          }}
        >
          <img
            src={img.src}
            alt=""
            style={{
              width: "100%",
              borderRadius: "24px",
              display: "block",
            }}
          />
        </div>
      ))}
    </>
  );
}
