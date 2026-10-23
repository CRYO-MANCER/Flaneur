export type ReflectionMood =
  | "happy"
  | "neutral"
  | "sad"
  | "anxious"
  | "motivated"
  | "burnout";

const prompts: Record<
  ReflectionMood,
  string[]
> = {
  happy: [
    "What made today feel meaningful?",
    "What moment made you smile the most today?",
    "What would you love to experience again tomorrow?",
    "Who made today brighter for you?",
    "What part of yourself are you most proud of today?",
    "How can you carry today's happiness into tomorrow?",
    "What small victory deserves celebrating today?",
    "What memory from today do you never want to forget?",
  ],

  neutral: [
    "What would have made today just a little better?",
    "Which moment stood out more than the rest?",
    "Did anything surprise you today?",
    "If today had a title, what would it be?",
    "What's one thing you'd like to improve tomorrow?",
    "What did today quietly teach you?",
    "What deserves more attention tomorrow?",
    "What can tomorrow's version of you do differently?",
  ],

  sad: [
    "What emotion feels the heaviest right now?",
    "What do you wish someone understood about today?",
    "What would you tell your younger self tonight?",
    "What helped you get through today, even a little?",
    "What kindness can you offer yourself tonight?",
    "Is there something you need to let go of?",
    "What's weighing on your mind the most?",
    "What would healing look like tomorrow?",
  ],

  anxious: [
    "Which thought keeps repeating itself today?",
    "What is actually within your control right now?",
    "What would happen if you gave yourself permission to pause?",
    "Which worry deserves less of your energy?",
    "What's one tiny step you can take next?",
    "What would your calmest self tell you right now?",
    "Which fear feels louder than reality?",
    "What can wait until tomorrow?",
  ],

  motivated: [
    "What's the next exciting step toward your goal?",
    "What progress are you proud of today?",
    "What's one habit worth repeating tomorrow?",
    "Which challenge did you overcome today?",
    "What inspired you today?",
    "What's the next milestone you're looking forward to?",
    "What momentum do you want to keep?",
    "What opportunity should you say yes to next?",
  ],

  burnout: [
    "What exhausted you the most today?",
    "What can you stop carrying tomorrow?",
    "What deserves your energy and what doesn't?",
    "When was the last time you genuinely rested?",
    "What's one responsibility you could simplify?",
    "What would tomorrow look like if you were kinder to yourself?",
    "What's your mind asking for right now?",
    "How can you recharge before starting again?",
  ],
};

function randomItem<T>(
  items: T[]
): T {
  return items[
    Math.floor(
      Math.random() * items.length
    )
  ];
}

export function getReflectionPrompt(
  mood?: string
): string {
  const key =
    (mood?.toLowerCase() ??
      "neutral") as ReflectionMood;

  if (prompts[key]) {
    return randomItem(
      prompts[key]
    );
  }

  return randomItem(
    prompts.neutral
  );
}