export interface MoodboardItem {
  id: number;
  title: string;
  height: number;
  gradient: string;
}

export const moodboards: MoodboardItem[] = [
  {
    id: 1,
    title: "Rainy Tokyo",
    height: 260,
    gradient:
      "linear-gradient(135deg,#60a5fa,#2563eb)",
  },

  {
    id: 2,
    title: "Midnight Café",
    height: 340,
    gradient:
      "linear-gradient(135deg,#f59e0b,#92400e)",
  },

  {
    id: 3,
    title: "Forest Escape",
    height: 220,
    gradient:
      "linear-gradient(135deg,#22c55e,#166534)",
  },

  {
    id: 4,
    title: "Ocean Breeze",
    height: 300,
    gradient:
      "linear-gradient(135deg,#06b6d4,#0ea5e9)",
  },

  {
    id: 5,
    title: "Neon Dreams",
    height: 380,
    gradient:
      "linear-gradient(135deg,#8b5cf6,#ec4899)",
  },

  {
    id: 6,
    title: "Lo-Fi Night",
    height: 260,
    gradient:
      "linear-gradient(135deg,#6366f1,#312e81)",
  },
];