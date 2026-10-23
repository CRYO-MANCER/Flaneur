import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
}

export default function GlassCard({
  children,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      style={{
        position: "relative",

        overflow: "hidden",

        backdropFilter:
          "blur(28px)",

        background:
          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",

        border:
          "1px solid rgba(255,255,255,0.08)",

        borderRadius: "28px",

        padding: "24px",

        boxShadow: `
          0 10px 40px rgba(0,0,0,.18),
          inset 0 1px 0 rgba(255,255,255,.08)
        `,
      }}
    >
      <motion.div
        animate={{
          x: [
            "-120%",
            "120%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",

          top: 0,
          left: 0,

          width: "40%",

          height: "100%",

          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.06), transparent)",

          pointerEvents:
            "none",
        }}
      />

      {children}
    </motion.div>
  );
}