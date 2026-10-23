import { motion } from "framer-motion";

export default function CoffeeSteam() {
  const steam = Array.from({ length: 12 });

  return (
    <>
      {steam.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -120],
            opacity: [0, 0.6, 0],
            x: [-10, 10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            position: "fixed",
            bottom: "0",
            left: `${10 + Math.random() * 80}%`,
            width: "30px",
            height: "80px",
            borderRadius: "50%",
            background:
              "rgba(255,255,255,0.08)",
            filter: "blur(15px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
}