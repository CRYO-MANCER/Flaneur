import { motion } from "framer-motion";

export default function MoodboardCard({
  title,
  height,
  gradient,
}: {
  title: string;
  height: number;
  gradient: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      style={{
        breakInside: "avoid",
        marginBottom: "20px",
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "pointer",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(16px)",
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.6,
        }}
        style={{
          height,
          background: gradient,
        }}
      />

      <div
        style={{
          padding: "16px",
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {title}
      </div>
    </motion.div>
  );
}