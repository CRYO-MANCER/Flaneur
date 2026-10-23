import { useDaily } from "../../store/dailyStore";
import GlassCard from "../ui/GlassCard";

export default function FocusCard() {
  const { focus, setFocus } =
    useDaily();

  return (
    <GlassCard>
      <h3
        style={{
          marginTop: 0,
        }}
      >
        Today's Focus
      </h3>

      <input
        value={focus}
        onChange={(e) =>
          setFocus(e.target.value)
        }
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "12px",

          borderRadius: "14px",

          border:
            "1px solid rgba(255,255,255,.08)",

          background:
            "rgba(255,255,255,.04)",

          color: "inherit",

          outline: "none",
        }}
      />
    </GlassCard>
  );
}