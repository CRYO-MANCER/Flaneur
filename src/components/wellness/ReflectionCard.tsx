import { useState } from "react";
import GlassCard from "../ui/GlassCard";
import { useWellness } from "../../store/wellnessStore";

export default function ReflectionCard() {
  const {
    mood,
    reflections,
    addReflection,
  } = useWellness();

  let prompts: string[] = [];

  if (mood === "😊") {
    prompts = [
      "What made you smile today?",
      "What moment would you relive today?",
    ];
  } else if (mood === "😌") {
    prompts = [
      "What brought you peace today?",
      "What are you letting go of?",
    ];
  } else if (mood === "😐") {
    prompts = [
      "What feels unresolved today?",
      "What would make tomorrow better?",
    ];
  } else if (mood === "😔") {
    prompts = [
      "What feels heavy today?",
      "What do you need right now?",
    ];
  } else {
    prompts = [
      "What are you struggling to express?",
      "What support do you wish you had?",
    ];
  }

  const prompt =
    prompts[new Date().getDate() % prompts.length];

  const [answer, setAnswer] =
    useState("");

  return (
    <GlassCard>
      <h3>💭 Reflection</h3>

      <p
        style={{
          marginTop: "16px",
          opacity: .8,
        }}
      >
        {prompt}
      </p>

      <textarea
        value={answer}
        onChange={(e) =>
          setAnswer(e.target.value)
        }
        placeholder="Write your thoughts..."
        style={{
          width: "100%",
          minHeight: "110px",
          marginTop: "18px",
          padding: "14px",
          borderRadius: "14px",
        }}
      />

      <button
        style={{
          marginTop: "14px",
        }}
        onClick={() => {
          if (!answer.trim())
            return;

          addReflection(
            prompt,
            answer
          );

          setAnswer("");
        }}
      >
        Save Reflection
      </button>

      <div
        style={{
          marginTop: "24px",
        }}
      >
        <h4>Recent</h4>

        {reflections
          .slice(0, 2)
          .map((reflection) => (
            <div
              key={reflection.id}
              style={{
                marginTop: "16px",
                padding: "14px",
                borderRadius: "14px",
                background:
                  "rgba(255,255,255,.05)",
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                }}
              >
                {reflection.prompt}
              </div>

              <div
                style={{
                  marginTop: "8px",
                  opacity: .8,
                }}
              >
                {reflection.answer}
              </div>
            </div>
          ))}
      </div>
    </GlassCard>
  );
}