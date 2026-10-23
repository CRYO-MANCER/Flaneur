import GlassCard from "../ui/GlassCard";
import { useWellness } from "../../store/wellnessStore";

export default function CycleCard() {
  const {
    lastPeriodDate,
    setLastPeriodDate,
    cycleLength,
    setCycleLength,
  } = useWellness();

  let currentDay = 0;
  let phase = "Unknown";
  let phaseColor = "#8b5cf6";
  let description = "";

  if (lastPeriodDate) {
    const today = new Date();

    const diff = Math.floor(
      (today.getTime() -
        new Date(lastPeriodDate).getTime()) /
        (1000 * 60 * 60 * 24)
    );

    currentDay = diff + 1;

    if (currentDay <= 5) {
      phase = "Menstrual";
      phaseColor = "#ec4899";
      description =
        "Rest, hydration and self-care.";
    } else if (currentDay <= 13) {
      phase = "Follicular";
      phaseColor = "#8b5cf6";
      description =
        "Energy and creativity increase.";
    } else if (currentDay <= 16) {
      phase = "Ovulation";
      phaseColor = "#f59e0b";
      description =
        "Peak energy and confidence.";
    } else {
      phase = "Luteal";
      phaseColor = "#10b981";
      description =
        "Slow down and recharge.";
    }
  }

  return (
    <GlassCard>
      <h3>🌸 Cycle Tracker</h3>

      <input
        type="date"
        value={lastPeriodDate}
        onChange={(e) =>
          setLastPeriodDate(
            e.target.value
          )
        }
        style={{
          width: "100%",
          marginTop: "18px",
          padding: "12px",
          borderRadius: "14px",
        }}
      />

      <input
        type="number"
        value={cycleLength}
        onChange={(e) =>
          setCycleLength(
            Number(e.target.value)
          )
        }
        style={{
          width: "100%",
          marginTop: "14px",
          padding: "12px",
          borderRadius: "14px",
        }}
      />

      {lastPeriodDate && (
        <div
          style={{
            marginTop: "24px",
          }}
        >
          <h2
            style={{
              color: phaseColor,
            }}
          >
            {phase}
          </h2>

          <div
            style={{
              marginTop: "8px",
            }}
          >
            Day {currentDay}
          </div>

          <div
            style={{
              marginTop: "20px",
              height: "8px",
              borderRadius: "999px",
              background:
                "rgba(255,255,255,.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(currentDay / cycleLength) * 100}%`,
                height: "100%",
                background: phaseColor,
                borderRadius: "999px",
              }}
            />
          </div>

          <p
            style={{
              marginTop: "18px",
              opacity: .8,
            }}
          >
            {description}
          </p>
        </div>
      )}
    </GlassCard>
  );
}