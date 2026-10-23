import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function GenericButton({
  children,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: .98,
      }}
      transition={{
        duration: .2,
      }}
      onClick={onClick}
      style={{
        padding: "12px 18px",

        borderRadius: "18px",

        border:
          "1px solid rgba(255,255,255,.08)",

        background:
          "linear-gradient(135deg,#8B5CF6,#EC4899)",

        color: "white",

        fontWeight: 600,

        cursor: "pointer",

        boxShadow:
          "0 8px 25px rgba(139,92,246,.3)",
      }}
    >
      {children}
    </motion.button>
  );
}