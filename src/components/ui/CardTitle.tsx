interface Props {
  children: React.ReactNode;
}

export default function CardTitle({
  children,
}: Props) {
  return (
    <h3
      style={{
        marginBottom: "20px",
      }}
    >
      {children}
    </h3>
  );
}