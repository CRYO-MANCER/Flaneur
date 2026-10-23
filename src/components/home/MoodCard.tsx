import GlassCard from "../ui/GlassCard";

import {
  useWellness,
} from "../../store/wellnessStore";

export default function MoodCard() {
  const {
    mood,
  } = useWellness();

  return (
    <GlassCard>
      <h3>
        Current Mood
      </h3>

      <div
        style={{
          fontSize: "48px",
          marginTop: "16px",
        }}
      >
        {mood}
      </div>

      <div
        style={{
          opacity: 0.7,
          marginTop: "10px",
        }}
      >
        Your current vibe
      </div>
    </GlassCard>
  );
}