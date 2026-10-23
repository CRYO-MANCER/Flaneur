export default function PlaylistCollectionCard() {
  const playlists = [
    "🌙 Late Night Drives",
    "☕ Cafe Jazz",
    "🌧 Rainy Evenings",
    "💻 Lofi Coding",
    "🌿 Calm Mornings",
    "🎀 Soft Girl",
  ];

  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "24px",
        background: "rgba(255,255,255,.05)",
        border: "1px solid rgba(255,255,255,.08)",
        backdropFilter: "blur(20px)",
      }}
    >
      <h3>🎵 Collections</h3>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gap: "12px",
        }}
      >
        {playlists.map(
          (playlist) => (
            <div
              key={playlist}
              style={{
                padding: "14px",
                borderRadius: "14px",
                background:
                  "rgba(139,92,246,.15)",
              }}
            >
              {playlist}
            </div>
          )
        )}
      </div>
    </div>
  );
}