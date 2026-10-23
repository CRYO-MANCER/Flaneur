export interface GreetingMessage {
  greeting: string;
  subtitle: string;
}

const morningMessages: GreetingMessage[] = [
  {
    greeting: "Good Morning ☀️",
    subtitle: "A fresh page is waiting for you.",
  },
  {
    greeting: "Good Morning ☀️",
    subtitle: "Start gently. You don't have to rush today.",
  },
  {
    greeting: "Good Morning ☀️",
    subtitle: "Every masterpiece starts with a single brushstroke.",
  },
  {
    greeting: "Good Morning ☀️",
    subtitle: "Today's a beautiful day to create something meaningful.",
  },
  {
    greeting: "Good Morning ☀️",
    subtitle: "Your future self will thank you for today's effort.",
  },
  {
    greeting: "Good Morning ☀️",
    subtitle: "Take a deep breath. Begin where you are.",
  },
  {
    greeting: "Good Morning ☀️",
    subtitle: "Little progress still counts as progress.",
  },
  {
    greeting: "Good Morning ☀️",
    subtitle: "Let's build something beautiful today.",
  },
];

const afternoonMessages: GreetingMessage[] = [
  {
    greeting: "Good Afternoon 🌿",
    subtitle: "Hope today has been kind to you.",
  },
  {
    greeting: "Good Afternoon 🌿",
    subtitle: "Pause for a moment. You're doing better than you think.",
  },
  {
    greeting: "Good Afternoon 🌿",
    subtitle: "Keep chasing what inspires you.",
  },
  {
    greeting: "Good Afternoon 🌿",
    subtitle: "Small steps create remarkable journeys.",
  },
  {
    greeting: "Good Afternoon 🌿",
    subtitle: "Refocus. There's still time to make today meaningful.",
  },
  {
    greeting: "Good Afternoon 🌿",
    subtitle: "One task at a time.",
  },
];

const eveningMessages: GreetingMessage[] = [
  {
    greeting: "Good Evening 🌙",
    subtitle: "Some moments deserve to linger.",
  },
  {
    greeting: "Good Evening 🌙",
    subtitle: "Slow down and enjoy the quiet.",
  },
  {
    greeting: "Good Evening 🌙",
    subtitle: "Reflect on how far you've come today.",
  },
  {
    greeting: "Good Evening 🌙",
    subtitle: "The city is slowing down. So can you.",
  },
  {
    greeting: "Good Evening 🌙",
    subtitle: "Beautiful things often happen in calm evenings.",
  },
  {
    greeting: "Good Evening 🌙",
    subtitle: "Create something that makes tomorrow easier.",
  },
];

const nightMessages: GreetingMessage[] = [
  {
    greeting: "Burning the Midnight Oil ✨",
    subtitle: "Some ideas only arrive after dark.",
  },
  {
    greeting: "Good Night 🌌",
    subtitle: "Rest is productive too.",
  },
  {
    greeting: "Good Night 🌌",
    subtitle: "Your thoughts deserve a quiet place.",
  },
  {
    greeting: "Good Night 🌌",
    subtitle: "Take a breath before tomorrow begins.",
  },
  {
    greeting: "Good Night 🌌",
    subtitle: "Creativity often whispers at night.",
  },
];

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function getGreetingMessage(): GreetingMessage {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return randomItem(morningMessages);
  }

  if (hour >= 12 && hour < 17) {
    return randomItem(afternoonMessages);
  }

  if (hour >= 17 && hour < 22) {
    return randomItem(eveningMessages);
  }

  return randomItem(nightMessages);
}