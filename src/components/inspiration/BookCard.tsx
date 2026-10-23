import InspirationCard from "./InspirationCard";

export default function BookCard({
  title,
  author,
}: {
  title: string;
  author: string;
}) {
  return (
    <InspirationCard>
      <div
        style={{
          fontSize: "48px",
          marginBottom: "16px",
        }}
      >
        📚
      </div>

      <h3>{title}</h3>

      <p
        style={{
          marginTop: "8px",
          opacity: 0.7,
        }}
      >
        {author}
      </p>
    </InspirationCard>
  );
}