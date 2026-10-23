export default function RecommendationCard() {
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
      <h3>✨ Recommended For You</h3>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div>🌙 Apocalypse</div>

        <div>☁️ Space Song</div>

        <div>🌌 Sunsetz</div>

        <div>✨ K.</div>

        <div>🌿 Myth</div>
      </div>
    </div>
  );
}