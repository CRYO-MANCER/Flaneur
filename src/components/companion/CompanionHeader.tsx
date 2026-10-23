import {
  getPersonality,
  setPersonality,
  CompanionPersonality,
} from "../../store/companionPersonality";

import { useState } from "react";

import {
  User,
  Compass,
  Heart,
  Palette,
  Sparkles,
} from "lucide-react";

import {
  getGreeting,
} from "../../utils/greetingEngine";

export default function CompanionHeader() {
  const [
    personality,
    setCurrentPersonality,
  ] = useState(
    getPersonality()
  );

  function changePersonality(
    value: CompanionPersonality
  ) {
    setPersonality(value);

    setCurrentPersonality(
      value
    );
  }

  const buttonStyle = (
    active: boolean
  ) => ({
    display: "flex",

    alignItems: "center",

    gap: "8px",

    padding: "10px 18px",

    borderRadius: "999px",

    border: active
      ? "1px solid rgba(139,92,246,.6)"
      : "1px solid rgba(0,0,0,.08)",

    background: active
      ? "linear-gradient(135deg,#8b5cf6,#ec4899)"
      : "rgba(255,255,255,.75)",

    color: active
      ? "#ffffff"
      : "#1f2937",

    fontWeight: 600,

    cursor: "pointer",

    transition:
      "all .25s ease",

    backdropFilter:
      "blur(20px)",

    WebkitBackdropFilter:
      "blur(20px)",

    boxShadow: active
      ? "0 8px 24px rgba(139,92,246,.25)"
      : "0 4px 12px rgba(0,0,0,.06)",
  });

  return (
    <div
      style={{
        marginBottom: "24px",
      }}
    >
      <h1>
        🤍 AI Companion
      </h1>

      <p
        style={{
          opacity: 0.7,
          marginTop: "8px",
        }}
      >
        Your personal reflection,
        productivity and wellness
        companion.
      </p>

      {/* Greeting Card */}

      <div
        style={{
          marginTop: "20px",

          padding: "18px",

          borderRadius: "24px",

          background:
            "rgba(255,255,255,.05)",

          border:
            "1px solid rgba(255,255,255,.08)",

          display: "flex",

          alignItems: "center",

          gap: "12px",

          backdropFilter:
            "blur(20px)",
        }}
      >
        <Sparkles
          size={20}
        />

        <div>
          <div
            style={{
              fontWeight: 600,
            }}
          >
            {getGreeting()}
          </div>

          <div
            style={{
              opacity: 0.65,

              fontSize: "13px",

              marginTop: "4px",
            }}
          >
            Welcome back 🌿
          </div>
        </div>
      </div>

      {/* Personality Buttons */}

      <div
        style={{
          display: "flex",

          gap: "12px",

          flexWrap: "wrap",

          marginTop: "20px",
        }}
      >
        <button
          style={buttonStyle(
            personality === "friend"
          )}
          onClick={() =>
            changePersonality(
              "friend"
            )
          }
        >
          <User size={16} />
          Friend
        </button>

        <button
          style={buttonStyle(
            personality === "mentor"
          )}
          onClick={() =>
            changePersonality(
              "mentor"
            )
          }
        >
          <Compass size={16} />
          Mentor
        </button>

        <button
          style={buttonStyle(
            personality ===
              "reflection"
          )}
          onClick={() =>
            changePersonality(
              "reflection"
            )
          }
        >
          <Heart size={16} />
          Reflection Guide
        </button>

        <button
          style={buttonStyle(
            personality ===
              "creative"
          )}
          onClick={() =>
            changePersonality(
              "creative"
            )
          }
        >
          <Palette size={16} />
          Creative Muse
        </button>
      </div>

      <div
        style={{
          marginTop: "14px",

          opacity: 0.8,

          fontSize: "14px",
        }}
      >
        Active Personality:
        {" "}
        <b>
          {personality}
        </b>
      </div>

      <div
        style={{
          marginTop: "6px",

          opacity: 0.6,

          fontSize: "13px",
        }}
      >
        Auto personality switching enabled
      </div>
    </div>
  );
}