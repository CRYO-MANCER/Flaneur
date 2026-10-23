import GlassCard from "../ui/GlassCard";

import {
  useSettings,
} from "../../store/settingsStore";

export default function GreetingCard() {
  const { username } =
    useSettings();

  const hour =
    new Date().getHours();

  let greeting =
    "Good Evening 🌙";

  let subtitle =
    "The city is quieter tonight. Let's make a little progress.";

  if (hour >= 5 && hour < 12) {
    greeting =
      "Good Morning ☀️";

    subtitle =
      "A fresh page is waiting for you.";
  }

  else if (
    hour >= 12 &&
    hour < 17
  ) {
    greeting =
      "Good Afternoon 🌿";

    subtitle =
      "Keep following what inspires you.";
  }

  else if (
    hour >= 17 &&
    hour < 22
  ) {
    greeting =
      "Good Evening 🌙";

    subtitle =
      "Some moments deserve to linger.";
  }

  else {
    greeting =
      "Burning the midnight oil? ✨";

    subtitle =
      "Certain thoughts only arrive in the quiet.";
  }

  return (
    <GlassCard>
      <h1
        style={{
          marginTop: 0,
        }}
      >
        {greeting},{" "}
        {username}
      </h1>

      <p
        style={{
          opacity: 0.75,
          marginTop: "12px",
          lineHeight: 1.8,
        }}
      >
        {subtitle}
      </p>
    </GlassCard>
  );
}