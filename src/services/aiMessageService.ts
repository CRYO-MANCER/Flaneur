import {
  getGreetingMessage,
} from "../data/greetings";

import {
  getDailyQuote,
} from "../data/quotes";

import {
  getReflectionPrompt,
} from "../data/reflectionPrompts";

export function getGreeting() {
  return getGreetingMessage();
}

export function getQuote() {
  return getDailyQuote();
}

export function getReflection(
  mood?: string
) {
  return getReflectionPrompt(
    mood
  );
}