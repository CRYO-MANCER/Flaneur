import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function InspirationCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.35,
      }}
      style={{
        background:
          "rgba(255,255,255,0.05)",

        backdropFilter:
          "blur(20px)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        borderRadius: "24px",

        padding: "18px",

        overflow: "hidden",

        boxShadow:
          "0 10px 30px rgba(0,0,0,.08)",

        height: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}