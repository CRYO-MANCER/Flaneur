import GlassCard from "../ui/GlassCard";
import { useWellness } from "../../store/wellnessStore";

export default function MoodCalendar() {
  const { moodHistory } =
    useWellness();

  const recent =
    moodHistory.slice(0, 28);

  function color(
    mood: string
  ) {
    switch (mood) {
      case "😊":
        return "#8b5cf6";

      case "😌":
        return "#a78bfa";

      case "😐":
        return "#c4b5fd";

      case "😔":
        return "#6d28d9";

      default:
        return "#4c1d95";
    }
  }

  return (
    <GlassCard>
      <h3>🗓 Mood Heatmap</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(7,1fr)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {recent.map(
          (entry) => (
            <div
              key={entry.id}
              style={{
                height: "26px",
                borderRadius: "8px",
                background:
                  color(entry.mood),
              }}
            />
          )
        )}
      </div>
    </GlassCard>
  );
}