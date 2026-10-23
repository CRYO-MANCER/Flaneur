import GlassCard from "../ui/GlassCard";

import {
  useWellness,
} from "../../store/wellnessStore";

export default function WellnessStats() {
  const {
    moodHistory,
    journalEntries,
    reflections,
    gratitudes,
    lastPeriodDate,
    cycleLength,
  } = useWellness();

  const moodCounts =
    moodHistory.reduce(
      (acc, item) => {
        acc[item.mood] =
          (acc[item.mood] || 0) + 1;

        return acc;
      },
      {} as Record<
        string,
        number
      >
    );

  const mostUsedMood =
    Object.entries(
      moodCounts
    ).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] || "🙂";

  let currentCycleDay = "-";

  if (lastPeriodDate) {
    const today =
      new Date();

    const lastDate =
      new Date(
        lastPeriodDate
      );

    const diff =
      Math.floor(
        (
          today.getTime() -
          lastDate.getTime()
        ) /
          (
            1000 *
            60 *
            60 *
            24
          )
      );

    currentCycleDay =
      String(diff + 1);
  }

  return (
    <GlassCard>
      <h3>
        🌸 Wellness Stats
      </h3>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection:
            "column",
          gap: "12px",
        }}
      >
        <div>
          😊 Most Used Mood:
          {" "}
          {mostUsedMood}
        </div>

        <div>
          📖 Journal Entries:
          {" "}
          {
            journalEntries.length
          }
        </div>

        <div>
          💭 Reflections:
          {" "}
          {
            reflections.length
          }
        </div>

        <div>
          🙏 Gratitudes:
          {" "}
          {
            gratitudes.length
          }
        </div>

        <div>
          🌙 Cycle Day:
          {" "}
          {currentCycleDay}
        </div>

        <div>
          📅 Cycle Length:
          {" "}
          {cycleLength} days
        </div>
      </div>
    </GlassCard>
  );
}