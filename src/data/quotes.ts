export interface DailyQuote {
  quote: string;
  author: string;
}

const quotes: DailyQuote[] = [
  {
    quote:
      "Little by little, one travels far.",
    author:
      "J.R.R. Tolkien",
  },

  {
    quote:
      "The quieter you become, the more you can hear.",
    author:
      "Ram Dass",
  },

  {
    quote:
      "Nothing is permanent except change.",
    author:
      "Heraclitus",
  },

  {
    quote:
      "A calm mind is a powerful mind.",
    author:
      "Unknown",
  },

  {
    quote:
      "Wherever you go, go with all your heart.",
    author:
      "Confucius",
  },

  {
    quote:
      "Be faithful to what exists within yourself.",
    author:
      "André Gide",
  },

  {
    quote:
      "Do not wait for inspiration. Create it.",
    author:
      "Unknown",
  },

  {
    quote:
      "Almost everything will work again if you unplug it for a few minutes, including you.",
    author:
      "Anne Lamott",
  },

  {
    quote:
      "Your direction is more important than your speed.",
    author:
      "Unknown",
  },

  {
    quote:
      "Collect moments, not things.",
    author:
      "Unknown",
  },

  {
    quote:
      "Creativity takes courage.",
    author:
      "Henri Matisse",
  },

  {
    quote:
      "The best way out is always through.",
    author:
      "Robert Frost",
  },

  {
    quote:
      "A journey of a thousand miles begins with a single step.",
    author:
      "Lao Tzu",
  },

  {
    quote:
      "Nothing diminishes anxiety faster than action.",
    author:
      "Walter Anderson",
  },

  {
    quote:
      "Small daily improvements are the key to staggering long-term results.",
    author:
      "Robin Sharma",
  },

  {
    quote:
      "Every day is a chance to begin again.",
    author:
      "Unknown",
  },

  {
    quote:
      "Make today so beautiful that yesterday becomes jealous.",
    author:
      "Unknown",
  },

  {
    quote:
      "Stay close to what makes you feel alive.",
    author:
      "Unknown",
  },

  {
    quote:
      "Peace begins where expectation ends.",
    author:
      "Sri Chinmoy",
  },

  {
    quote:
      "Bloom quietly.",
    author:
      "Unknown",
  },
];

export function getDailyQuote(): DailyQuote {
  const day =
    Math.floor(
      Date.now() / 86400000
    );

  return quotes[
    day % quotes.length
  ];
}