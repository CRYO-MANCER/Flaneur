import { motion } from "framer-motion";
import InspirationCard from "./InspirationCard";

export default function MusicCard({
  title,
  artist,
}: {
  title: string;
  artist: string;
}) {
  return (
    <InspirationCard>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#8b5cf6,#ec4899)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
          }}
        >
          🎵
        </motion.div>

        <div>
          <h3
            style={{
              marginBottom: "6px",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              opacity: 0.7,
            }}
          >
            {artist}
          </p>
        </div>

        <div
          style={{
            height: "5px",
            borderRadius: "999px",
            background:
              "linear-gradient(90deg,#8b5cf6,#ec4899)",
          }}
        />
      </div>
    </InspirationCard>
  );
}