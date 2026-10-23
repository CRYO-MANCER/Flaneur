import { motion } from "framer-motion";

export default function FirefliesOverlay() {
  const lights = Array.from({ length: 25 });

  return (
    <>
      {lights.map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
          }}
          style={{
            position: "fixed",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#d4ff7a",
            boxShadow: "0 0 12px #d4ff7a",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
}