import GlassCard from "../ui/GlassCard";

const quotes = [
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
];

export default function DailyQuoteCard() {
  const quote =
    quotes[
      new Date().getDate() %
        quotes.length
    ];

  return (
    <GlassCard>
      <h3>✨ Daily Quote</h3>

      <p
        style={{
          marginTop: "18px",
          lineHeight: 1.7,
          opacity: .9,
        }}
      >
        "{quote.quote}"
      </p>

      <div
        style={{
          marginTop: "18px",
          opacity: .65,
        }}
      >
        — {quote.author}
      </div>
    </GlassCard>
  );
}