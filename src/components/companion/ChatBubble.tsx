import {
  Message,
} from "../../store/companionStore";

export default function ChatBubble({
  message,
}: {
  message: Message;
}) {
  const isUser =
    message.role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent:
          isUser
            ? "flex-end"
            : "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: "75%",
          padding: "16px",
          borderRadius: "22px",

          background: isUser
            ? "linear-gradient(135deg,#8b5cf6,#7c3aed)"
            : "rgba(255,255,255,.08)",

          border: isUser
            ? "none"
            : "1px solid rgba(255,255,255,.08)",

          boxShadow:
            "0 10px 30px rgba(0,0,0,.15)",

          backdropFilter:
            "blur(12px)",

          lineHeight: 1.6,

          wordBreak:
            "break-word",
        }}
      >
        <div>
          {message.content}
        </div>

        <div
          style={{
            marginTop: "10px",
            fontSize: "11px",
            opacity: 0.5,
            textAlign:
              isUser
                ? "right"
                : "left",
          }}
        >
          {new Date(
            message.createdAt
          ).toLocaleTimeString(
            [],
            {
              hour: "2-digit",
              minute:
                "2-digit",
            }
          )}
        </div>
      </div>
    </div>
  );
}