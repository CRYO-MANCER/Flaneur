import GlassCard from "../ui/GlassCard";

import {
  useSettings,
} from "../../store/settingsStore";

export default function MotionCard() {
  const {
    animationsEnabled,
    setAnimationsEnabled,

    particlesEnabled,
    setParticlesEnabled,
  } = useSettings();

  return (
    <GlassCard>
      <h3>Motion</h3>

      <label
        style={{
          display: "block",
          marginTop: "16px",
        }}
      >
        <input
          type="checkbox"
          checked={
            animationsEnabled
          }
          onChange={() =>
            setAnimationsEnabled(
              !animationsEnabled
            )
          }
        />

        {" "}Animations
      </label>

      <label
        style={{
          display: "block",
          marginTop: "16px",
        }}
      >
        <input
          type="checkbox"
          checked={
            particlesEnabled
          }
          onChange={() =>
            setParticlesEnabled(
              !particlesEnabled
            )
          }
        />

        {" "}Particles
      </label>
    </GlassCard>
  );
}