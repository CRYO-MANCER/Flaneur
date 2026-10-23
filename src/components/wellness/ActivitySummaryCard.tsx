import GlassCard from "../ui/GlassCard";
import { useWellness } from "../../store/wellnessStore";

export default function ActivitySummaryCard() {
  const {
    moodHistory,
    journalEntries,
    reflections,
    gratitudes,
  } = useWellness();

  return (
    <GlassCard>
      <h3>📊 Activity Summary</h3>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div>
          😊 Mood Logs: {moodHistory.length}
        </div>

        <div>
          📖 Journals: {journalEntries.length}
        </div>

        <div>
          💭 Reflections: {reflections.length}
        </div>

        <div>
          🙏 Gratitudes: {gratitudes.length}
        </div>
      </div>
    </GlassCard>
  );
}