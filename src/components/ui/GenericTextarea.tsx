interface Props {
  value: string;

  placeholder?: string;

  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export default function GenericTextarea({
  value,
  onChange,
  placeholder,
}: Props) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: "100%",
        height: "180px",
        padding: "18px",
        borderRadius: "18px",
        resize: "none",
        border: "1px solid rgba(255,255,255,.08)",
        background:
          "rgba(255,255,255,.05)",
        color: "white",
      }}
    />
  );
}