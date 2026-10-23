import GlassCard from "../ui/GlassCard";

import useTheme from "../../themes/useTheme";

export default function ThemeCard() {
  const {
    mode,
  } = useTheme();

  return (
    <GlassCard>
      <h3>Theme</h3>

      <div
        style={{
          marginTop: "16px",
        }}
      >
        Current Theme:
      </div>

      <h2
        style={{
          marginTop: "8px",
        }}
      >
        {mode === "night"
          ? "🌙 Night"
          : mode}
      </h2>

      <div
        style={{
          marginTop: "16px",
          opacity: 0.7,
        }}
      >
        Theme currently follows
        Indian time automatically.
      </div>
    </GlassCard>
  );
}
