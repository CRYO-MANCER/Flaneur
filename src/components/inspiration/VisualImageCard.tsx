import InspirationCard from "./InspirationCard";

export default function VisualImageCard({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <InspirationCard>
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: "100%",
          height: "280px",
          objectFit: "cover",
          borderRadius: "18px",
        }}
      />

      <h3
        style={{
          marginTop: "16px",
        }}
      >
        {title}
      </h3>
    </InspirationCard>
  );
}