import {
  useMoodboard,
} from "../../store/moodboardStore";

export default function ImageModal() {
  const {
    selectedImage,
    closeImage,
    deleteImage,
  } = useMoodboard();

  if (!selectedImage)
    return null;

  return (
    <div
      onClick={closeImage}
      style={{
        position: "fixed",
        inset: 0,

        background:
          "rgba(0,0,0,.88)",

        backdropFilter:
          "blur(12px)",

        zIndex: 9999,

        display: "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        padding: "40px",
      }}
    >
      <div
        onClick={(e) =>
          e.stopPropagation()
        }
        style={{
          maxWidth: "95vw",
        }}
      >
        <img
          src={selectedImage.src}
          alt=""
          style={{
            maxWidth: "100%",
            maxHeight: "75vh",

            borderRadius: "24px",

            boxShadow:
              "0 20px 80px rgba(0,0,0,.5)",
          }}
        />

        <div
          style={{
            display: "flex",

            justifyContent:
              "center",

            gap: "16px",

            marginTop: "24px",
          }}
        >
          <button
            onClick={() =>
              deleteImage(
                selectedImage.id
              )
            }
            style={{
              padding:
                "12px 20px",

              borderRadius:
                "12px",

              border: "none",

              cursor:
                "pointer",

              background:
                "#ef4444",

              color:
                "white",
            }}
          >
            Delete Image
          </button>

          <button
            onClick={closeImage}
            style={{
              padding:
                "12px 20px",

              borderRadius:
                "12px",

              border: "none",

              cursor:
                "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}