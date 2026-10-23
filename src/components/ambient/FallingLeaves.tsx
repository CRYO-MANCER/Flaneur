import { motion } from "framer-motion";

export default function FallingLeaves() {
  const leaves = Array.from({ length: 15 });

  return (
    <>
      {leaves.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["-10vh", "110vh"],
            x: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            position: "fixed",
            left: `${Math.random() * 100}%`,
            fontSize: "18px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          🍃
        </motion.div>
      ))}
    </>
  );
}