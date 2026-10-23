import { motion } from "framer-motion";
import { useMusic } from "../../store/musicStore";

const heights = [
  12, 22, 40, 65, 80, 45, 28, 70, 90, 35,
  25, 75, 100, 60, 42, 80, 35, 55, 90, 40,
];

export default function WaveVisualizer() {
  const { isPlaying } = useMusic();

  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "5px",
        marginTop: "10px",
        marginBottom: "0px",
      }}
    >
      {heights.map((height, i) => (
        <motion.div
          key={i}
          animate={
            isPlaying
              ? {
                  height: [
                    10,
                    height,
                    height * 0.6,
                    height * 1.1,
                    10,
                  ],
                }
              : {
                  height: 10,
                }
          }
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
          style={{
            width: "5px",
            borderRadius: "999px",
            background:
              "linear-gradient(to top,#8b5cf6,#ec4899)",
            boxShadow:
              "0 0 12px rgba(139,92,246,.35)",
          }}
        />
      ))}
    </div>
  );
}