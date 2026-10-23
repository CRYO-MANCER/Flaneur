import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  icon: ReactNode;
  onClick?: () => void;
}

export default function IconButton({
  icon,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: .95,
      }}
      onClick={onClick}
      style={{
        width: "48px",
        height: "48px",

        borderRadius: "50%",

        border:
          "1px solid rgba(255,255,255,.08)",

        background:
          "rgba(255,255,255,.05)",

        color: "white",

        cursor: "pointer",

        backdropFilter:
          "blur(20px)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon}
    </motion.button>
  );
}