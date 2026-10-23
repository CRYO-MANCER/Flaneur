import { EnvironmentType } from "./environmentTypes";

export const environments: Record<
  EnvironmentType,
  {
    name: string;
    primaryGlow: string;
    secondaryGlow: string;
  }
> = {
  "night-city": {
    name: "Night City",
    primaryGlow: "rgba(139,92,246,0.22)",
    secondaryGlow: "rgba(59,130,246,0.16)",
  },

  "rain-room": {
    name: "Rain Room",
    primaryGlow: "rgba(56,189,248,0.22)",
    secondaryGlow: "rgba(125,211,252,0.16)",
  },

  forest: {
    name: "Forest",
    primaryGlow: "rgba(34,197,94,0.22)",
    secondaryGlow: "rgba(132,204,22,0.16)",
  },

  beach: {
    name: "Beach",
    primaryGlow: "rgba(251,191,36,0.22)",
    secondaryGlow: "rgba(249,115,22,0.16)",
  },

  "midnight-cafe": {
    name: "Midnight Café",
    primaryGlow: "rgba(251,146,60,0.22)",
    secondaryGlow: "rgba(217,119,6,0.16)",
  },
};