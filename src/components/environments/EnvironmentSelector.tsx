import useEnvironment from "../../environments/useEnvironment";
import EnvironmentCard from "./EnvironmentCard";

export default function EnvironmentSelector() {
  const {
    environment,
    setEnvironment,
  } = useEnvironment();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
      }}
    >
      <EnvironmentCard
        icon="🌃"
        title="Night City"
        description="Neon lights and late-night creativity."
        selected={environment === "night-city"}
        value="night-city"
        onSelect={setEnvironment}
      />

      <EnvironmentCard
        icon="🌧️"
        title="Rain Room"
        description="Rainy windows and quiet thoughts."
        selected={environment === "rain-room"}
        value="rain-room"
        onSelect={setEnvironment}
      />

      <EnvironmentCard
        icon="🌲"
        title="Forest"
        description="Nature, fireflies and calm focus."
        selected={environment === "forest"}
        value="forest"
        onSelect={setEnvironment}
      />

      <EnvironmentCard
        icon="🌊"
        title="Beach"
        description="Warm sunsets and ocean air."
        selected={environment === "beach"}
        value="beach"
        onSelect={setEnvironment}
      />

      <EnvironmentCard
        icon="☕"
        title="Midnight Café"
        description="Coffee, warmth and deep work."
        selected={environment === "midnight-cafe"}
        value="midnight-cafe"
        onSelect={setEnvironment}
      />
    </div>
  );
}