interface Props {
  value: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function GenericInput({
  value,
  onChange,
  placeholder,
}: Props) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "14px",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,.08)",
        background:
          "rgba(255,255,255,.05)",
        color: "white",
      }}
    />
  );
}