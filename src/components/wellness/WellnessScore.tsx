import GlassCard from "../ui/GlassCard";

import {
  useWellness,
} from "../../store/wellnessStore";

export default function WellnessScore() {
  const {
    moodHistory,
    journalEntries,
    gratitudes,
    reflections,
  } = useWellness();

  let score = 40;

  score += Math.min(
    moodHistory.length * 2,
    20
  );

  score += Math.min(
    journalEntries.length,
    15
  );

  score += Math.min(
    gratitudes.length * 2,
    15
  );

  score += Math.min(
    reflections.length * 2,
    10
  );

  if (score > 100)
    score = 100;

  return (
    <GlassCard>
      <h3>🌿 Wellness Score</h3>

      <h1
        style={{
          fontSize: "64px",
          marginTop: "24px",
        }}
      >
        {score}
      </h1>

      <div
        style={{
          opacity: .7,
          marginTop: "10px",
        }}
      >
        Overall balance
      </div>
    </GlassCard>
  );
}