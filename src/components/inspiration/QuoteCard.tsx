import InspirationCard from "./InspirationCard";

export default function QuoteCard({
  quote,
}: {
  quote: string;
}) {
  return (
    <InspirationCard>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "280px",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            opacity: 0.15,
            lineHeight: 1,
          }}
        >
          ❝
        </div>

        <div
          style={{
            fontSize: "34px",
            lineHeight: 1.45,
            fontWeight: 500,
          }}
        >
          {quote}
        </div>

        <div
          style={{
            fontSize: "64px",
            opacity: 0.15,
            lineHeight: 1,
            textAlign: "right",
          }}
        >
          ❞
        </div>
      </div>
    </InspirationCard>
  );
}