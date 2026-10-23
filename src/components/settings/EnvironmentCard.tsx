import GlassCard from "../ui/GlassCard";

import useEnvironment from "../../environments/useEnvironment";

export default function EnvironmentCard() {
  const {
    environment,
    setEnvironment,
  } = useEnvironment();

  const environments = [
    "night-city",
    "rain-room",
    "forest",
    "beach",
    "midnight-cafe",
  ];

  return (
    <GlassCard>
      <h3>Environment</h3>

      <div
        style={{
          display: "flex",
          flexDirection:
            "column",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        {environments.map(
          (env) => (
            <label key={env}>
              <input
                type="radio"
                checked={
                  environment ===
                  env
                }
                onChange={() =>
                  setEnvironment(
                    env as any
                  )
                }
              />

              {" "}
              {env}
            </label>
          )
        )}
      </div>
    </GlassCard>
  );
}