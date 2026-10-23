import GlassCard from "../ui/GlassCard";
import { useDaily } from "../../store/dailyStore";

export default function HydrationCard() {
  const {
    water,
    addWater,
    removeWater,
  } = useDaily();

  const percent =
    (water / 8) * 100;

  return (
    <GlassCard>
      <h3>
        💧 Hydration
      </h3>

      <div
        style={{
          marginTop: "24px",
        }}
      >
        <h1>{water}/8</h1>

        <div
          style={{
            height: "14px",
            background:
              "rgba(255,255,255,.08)",
            borderRadius: "999px",
            overflow: "hidden",
            marginTop: "14px",
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              background:
                "linear-gradient(90deg,#60a5fa,#06b6d4)",
              transition:
                ".3s",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "20px",
          }}
        >
          <button
            onClick={removeWater}
          >
            -
          </button>

          <button
            onClick={addWater}
          >
            +
          </button>
        </div>
      </div>
    </GlassCard>
  );
}