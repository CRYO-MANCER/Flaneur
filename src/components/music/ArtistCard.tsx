export default function ArtistCard() {
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
      <h3>🎤 Featured Artist</h3>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <h2>Hans Zimmer</h2>

        <div
          style={{
            opacity: .7,
            marginTop: "8px",
          }}
        >
          Soundtrack • 5.2M Followers
        </div>

        <div
          style={{
            marginTop: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div>• Time</div>
          <div>• Cornfield Chase</div>
          <div>• Interstellar</div>
          <div>• Mountains</div>
        </div>
      </div>
    </div>
  );
}