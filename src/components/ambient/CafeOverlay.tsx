import { motion } from "framer-motion";

export default function CafeOverlay() {
  const embers = Array.from({ length: 20 });

  return (
    <>
      {embers.map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -60],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
          }}
          style={{
            position: "fixed",
            left: `${Math.random() * 100}%`,
            bottom: "-20px",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#ffb870",
            boxShadow: "0 0 10px #ffb870",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
}