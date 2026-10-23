import InspirationCard from "./InspirationCard";

export default function MovieCard({
  title,
  year,
}: {
  title: string;
  year: string;
}) {
  return (
    <InspirationCard>
      <div
        style={{
          fontSize: "48px",
          marginBottom: "16px",
        }}
      >
        🎬
      </div>

      <h3>{title}</h3>

      <p
        style={{
          marginTop: "8px",
          opacity: 0.7,
        }}
      >
        {year}
      </p>
    </InspirationCard>
  );
}