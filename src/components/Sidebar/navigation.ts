import {
  Home,
  Music4,
  Sparkles,
  Images,
  NotebookPen,
  HeartPulse,
  Bot,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },

  {
    label: "Music Studio",
    path: "/music",
    icon: Music4,
  },

  {
    label: "Inspiration Studio",
    path: "/inspiration",
    icon: Sparkles,
  },

  {
    label: "Moodboard Studio",
    path: "/moodboard",
    icon: Images,
  },

  {
    label: "Daily Companion",
    path: "/daily",
    icon: NotebookPen,
  },

  {
    label: "Wellness Hub",
    path: "/wellness",
    icon: HeartPulse,
  },

  {
    label: "AI Companion",
    path: "/companion",
    icon: Bot,
  },

  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];