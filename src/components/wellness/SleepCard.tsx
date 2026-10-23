import GlassCard from "../ui/GlassCard";

export default function SleepCard() {
  return (
    <GlassCard>
      <h3>
        🌙 Sleep
      </h3>

      <h1
        style={{
          marginTop: "20px",
        }}
      >
        7h 45m
      </h1>

      <div
        style={{
          marginTop: "14px",
          opacity: .7,
        }}
      >
        Consistent sleep improves
        mood and focus.
      </div>
    </GlassCard>
  );
}