import {
  motion,
} from "framer-motion";

export default function TypingIndicator() {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",

        padding:
          "14px 18px",

        width: "fit-content",

        borderRadius:
          "18px",

        background:
          "rgba(255,255,255,.08)",
      }}
    >
      {[0, 1, 2].map(
        (dot) => (
          <motion.div
            key={dot}
            animate={{
              y: [
                0,
                -6,
                0,
              ],
              opacity: [
                0.3,
                1,
                0.3,
              ],
            }}
            transition={{
              duration:
                0.9,

              repeat:
                Infinity,

              delay:
                dot * 0.15,
            }}
            style={{
              width: "8px",

              height:
                "8px",

              borderRadius:
                "50%",

              background:
                "#ffffff",
            }}
          />
        )
      )}
    </div>
  );
}