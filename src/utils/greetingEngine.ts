export function getGreeting() {
  const hour =
    new Date().getHours();

  const personality =
    localStorage.getItem(
      "flaneur_active_personality"
    ) || "friend";

  const memory =
    JSON.parse(
      localStorage.getItem(
        "flaneur_memory"
      ) || "{}"
    );

  const project =
    memory.currentProject || "";

  if (hour < 12) {
    if (
      personality ===
      "creative"
    ) {
      return `Morning ☀️. Any new ideas brewing today?`;
    }

    return `Morning ☀️. Slept alright?`;
  }

  if (hour < 18) {
    if (
      personality ===
      "mentor"
    ) {
      return `Afternoon 🌿. How's progress going today?`;
    }

    return `Hey 👋. How's the day treating you?`;
  }

  if (
    project &&
    project !== "Unknown"
  ) {
    return `Long day? Still working on ${project}?`;
  }

  return `Good evening 🌙. Glad you're here.`;
}