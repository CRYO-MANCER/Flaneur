import { motion } from "framer-motion";

export default function BeachOverlay() {
  const particles = Array.from({ length: 20 });

  return (
    <>
      {particles.map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
          }}
          style={{
            position: "fixed",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.25)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
}