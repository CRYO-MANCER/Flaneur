import { motion } from "framer-motion";

export default function RainOverlay() {
  const drops = Array.from({ length: 80 });

  return (
    <>
      {drops.map((_, index) => (
        <motion.div
          key={index}
          initial={{ y: -100 }}
          animate={{ y: "110vh" }}
          transition={{
            duration: 1 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
          style={{
            position: "fixed",
            left: `${Math.random() * 100}%`,
            top: "-50px",
            width: "2px",
            height: "40px",
            background: "rgba(180,220,255,0.4)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
}