import { motion } from "framer-motion";
import { EnvironmentType } from "../../environments/environmentTypes";

interface Props {
  icon: string;
  title: string;
  description: string;
  selected: boolean;
  value: EnvironmentType;
  onSelect: (env: EnvironmentType) => void;
}

export default function EnvironmentCard({
  icon,
  title,
  description,
  selected,
  value,
  onSelect,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -3,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={() => onSelect(value)}
      style={{
        cursor: "pointer",
        padding: "20px",
        borderRadius: "20px",
        backdropFilter: "blur(20px)",
        background: selected
          ? "rgba(139,92,246,0.25)"
          : "rgba(255,255,255,0.05)",
        border: selected
          ? "1px solid rgba(139,92,246,0.5)"
          : "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          marginBottom: "12px",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          opacity: 0.7,
          fontSize: "14px",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}