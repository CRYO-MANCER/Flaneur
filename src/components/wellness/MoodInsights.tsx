import GlassCard from "../ui/GlassCard";

export default function MoodInsights() {
  return (
    <GlassCard>
      <h3>📈 Weekly Insights</h3>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div>
          😊 Mood improving
        </div>

        <div>
          ✍ Journaling active
        </div>

        <div>
          🌿 Stress stable
        </div>

        <div>
          💧 Hydration consistent
        </div>
      </div>
    </GlassCard>
  );
}