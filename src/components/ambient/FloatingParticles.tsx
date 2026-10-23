import { motion } from "framer-motion";

const particles = Array.from(
  { length: 18 },
  (_, i) => i
);

export default function FloatingParticles() {
  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle}
          animate={{
            y: [0, -80, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 8 + particle,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "fixed",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "white",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}