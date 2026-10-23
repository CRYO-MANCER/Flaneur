export type CompanionPersonality =
  | "friend"
  | "mentor"
  | "reflection"
  | "creative";

export function getPersonality() {
  return (
    localStorage.getItem(
      "flaneur_personality"
    ) || "friend"
  ) as CompanionPersonality;
}

export function setPersonality(
  personality: CompanionPersonality
) {
  localStorage.setItem(
    "flaneur_personality",
    personality
  );
}

export function detectPersonality(
  message: string
): CompanionPersonality {
  const text =
    message.toLowerCase();

  if (
    text.includes("sad") ||
    text.includes("anxious") ||
    text.includes("depressed") ||
    text.includes("lonely") ||
    text.includes("overthinking") ||
    text.includes("lost")
  ) {
    return "reflection";
  }

  if (
    text.includes("career") ||
    text.includes("goal") ||
    text.includes("business") ||
    text.includes("promotion") ||
    text.includes("leader") ||
    text.includes("decision")
  ) {
    return "mentor";
  }

  if (
    text.includes("fashion") ||
    text.includes("design") ||
    text.includes("art") ||
    text.includes("photography") ||
    text.includes("room") ||
    text.includes("moodboard")
  ) {
    return "creative";
  }

  return "friend";
}