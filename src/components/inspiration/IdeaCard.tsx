import InspirationCard from "./InspirationCard";

export default function IdeaCard({
  idea,
}: {
  idea: string;
}) {
  return (
    <InspirationCard>
      <div
        style={{
          fontSize: "54px",
          marginBottom: "18px",
        }}
      >
        💡
      </div>

      <div
        style={{
          fontSize: "24px",
          lineHeight: 1.6,
          fontWeight: 500,
        }}
      >
        {idea}
      </div>
    </InspirationCard>
  );
}