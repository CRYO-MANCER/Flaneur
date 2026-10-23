import {
  useMusic,
} from "../../store/musicStore";

export default function PlaylistCard() {
  const {
    songs,
    currentSong,
    selectTrack,
  } = useMusic();

  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "24px",
        background:
          "rgba(255,255,255,0.05)",
        backdropFilter:
          "blur(20px)",
        border:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h3>Playlist</h3>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {songs.map(
          (song, index) => (
            <div
              key={song.id}
              onClick={() =>
                selectTrack(index)
              }
              style={{
                cursor: "pointer",
                padding: "12px",
                borderRadius:
                  "14px",

                background:
                  currentSong.id ===
                  song.id
                    ? "rgba(139,92,246,.2)"
                    : "transparent",

                border:
                  currentSong.id ===
                  song.id
                    ? "1px solid rgba(139,92,246,.4)"
                    : "1px solid transparent",
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                }}
              >
                {song.title}
              </div>

              <div
                style={{
                  opacity: 0.6,
                  fontSize:
                    "14px",
                }}
              >
                {song.artist}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}