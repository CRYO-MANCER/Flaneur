interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div
      style={{
        marginBottom: "28px",
      }}
    >
      <h2
        style={{
          fontSize: "34px",
          fontFamily:
            "var(--font-heading)",

          fontWeight: 700,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            opacity: .65,
            marginTop: "8px",
            fontSize: "15px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}