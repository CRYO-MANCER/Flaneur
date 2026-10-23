import {
  useHabits,
} from "../../store/habitsStore";

import GlassCard from "../ui/GlassCard";

export default function CompletionCard() {
  const { habits } =
    useHabits();

  const completed =
    habits.filter(
      (h) => h.completed
    ).length;

  const percentage =
  habits.length === 0
    ? 0
    : Math.round(
        (completed /
          habits.length) *
          100
      );

  return (
    <GlassCard>
      <h3
        style={{
          marginTop: 0,
        }}
      >
        Completion
      </h3>

      <div
        style={{
          fontSize: "52px",
          fontWeight: 700,
        }}
      >
        {percentage}%
      </div>

      <div
        style={{
          height: "10px",
          marginTop: "18px",

          borderRadius:
            "999px",

          background:
            "rgba(255,255,255,.06)",

          overflow:
            "hidden",
        }}
      >
        <div
          style={{
            width:
              `${percentage}%`,

            height: "100%",

            background:
              "linear-gradient(90deg,#8b5cf6,#ec4899)",
          }}
        />
      </div>
    </GlassCard>
  );
}