import {
  useState,
} from "react";

import useTheme from "../../themes/useTheme";

export default function MessageInput({
  onSend,
}: {
  onSend: (
    text: string
  ) => void;
}) {
  const [text, setText] =
    useState("");

  const { theme } =
    useTheme();

  function send() {
    if (!text.trim())
      return;

    onSend(text);

    setText("");
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems:
          "center",
      }}
    >
      <input
        value={text}
        onChange={(e) =>
          setText(
            e.target.value
          )
        }
        onKeyDown={(e) => {
          if (
            e.key === "Enter"
          ) {
            send();
          }
        }}
        placeholder="Talk to Flâneur..."
        style={{
          flex: 1,

          padding:
            "16px 18px",

          borderRadius:
            "16px",

          border:
            "1px solid rgba(0,0,0,.08)",

          background:
            "rgba(255,255,255,.55)",

          color:
            theme.text,

          outline: "none",

          fontSize:
            "15px",

          backdropFilter:
            "blur(12px)",
        }}
      />

      <button
        onClick={send}
        style={{
          padding:
            "16px 24px",

          borderRadius:
            "16px",

          border: "none",

          cursor:
            "pointer",

          background:
            `linear-gradient(135deg, ${theme.accent}, #ec4899)`,

          color: "white",

          fontWeight: 600,
        }}
      >
        Send
      </button>
    </div>
  );
}