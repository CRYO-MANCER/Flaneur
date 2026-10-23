import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageTransition({
  children,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .35,
      }}
      style={{
        height: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}