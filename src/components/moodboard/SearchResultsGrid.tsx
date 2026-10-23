interface SearchImage {
  id: string;
  src: string;
  title: string;
  source: string;
}

export default function SearchResultsGrid({
  images,
  onSave,
}: {
  images: SearchImage[];

  onSave: (
    src: string
  ) => void;
}) {
  if (
    images.length === 0
  ) {
    return null;
  }

  return (
    <div
      style={{
        columnCount: 4,

        columnGap: "20px",

        marginTop: "30px",
      }}
    >
      {images.map(
        (image) => (
          <div
            key={`${image.source}-${image.id}`}
            style={{
              breakInside:
                "avoid",

              marginBottom:
                "20px",

              borderRadius:
                "24px",

              overflow:
                "hidden",

              background:
                "rgba(255,255,255,.05)",

              border:
                "1px solid rgba(255,255,255,.08)",
            }}
          >
            <img
              src={
                image.src
              }
              alt=""
              style={{
                width: "100%",

                display:
                  "block",
              }}
            />

            <div
              style={{
                padding:
                  "16px",
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                }}
              >
                {
                  image.title
                }
              </div>

              <div
                style={{
                  opacity:
                    .6,

                  fontSize:
                    "13px",

                  marginTop:
                    "6px",
                }}
              >
                {
                  image.source
                }
              </div>

              <button
                onClick={() =>
                  onSave(
                    image.src
                  )
                }
                style={{
                  marginTop:
                    "14px",
                }}
              >
                Save To Board
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}