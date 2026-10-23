import { motion } from "framer-motion";

export default function WindOverlay() {
  const gusts = Array.from({ length: 8 });

  return (
    <>
      {gusts.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: ["-20vw", "120vw"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i,
          }}
          style={{
            position: "fixed",
            top: `${Math.random() * 100}%`,
            width: "120px",
            height: "2px",
            background: "rgba(255,255,255,0.2)",
            filter: "blur(2px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
}