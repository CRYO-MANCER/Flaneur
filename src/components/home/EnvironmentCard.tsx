import GlassCard from "../ui/GlassCard";

import useEnvironment from "../../environments/useEnvironment";

import {
  environments,
} from "../../environments/environmentConfig";

export default function EnvironmentCard() {
  const {
    environment,
  } = useEnvironment();

  const env =
    environments[
      environment
    ];

  return (
    <GlassCard>
      <h3>
        Environment
      </h3>

      <div
        style={{
          fontSize: "28px",
          marginTop: "16px",
          fontWeight: 600,
        }}
      >
        {env.name}
      </div>

      <div
        style={{
          opacity: 0.7,
          marginTop: "10px",
        }}
      >
        Current atmosphere
      </div>
    </GlassCard>
  );
}