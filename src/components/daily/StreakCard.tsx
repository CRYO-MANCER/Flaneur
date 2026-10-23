import {
  useDaily,
} from "../../store/dailyStore";

import GlassCard from "../ui/GlassCard";

export default function StreakCard() {
  const { streak } =
    useDaily();

  return (
    <GlassCard>
      <h3
        style={{
          marginTop: 0,
        }}
      >
        Current Streak
      </h3>

      <div
        style={{
          fontSize: "48px",
        }}
      >
        🔥
      </div>

      <h1
        style={{
          marginBottom: 0,
        }}
      >
        {streak}
      </h1>

      <div>
        days
      </div>
    </GlassCard>
  );
}