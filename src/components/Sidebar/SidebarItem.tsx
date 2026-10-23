import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import useTheme from "../../themes/useTheme";

interface SidebarItemProps {
  label: string;
  path: string;
  icon: React.ElementType;
}

export default function SidebarItem({
  label,
  path,
  icon: Icon,
}: SidebarItemProps) {
  const location = useLocation();
  const { theme } = useTheme();

  const isActive = location.pathname === path;

  return (
    <Link to={path}>
      <motion.div
        whileHover={{
          x: 6,
        }}
        transition={{
          duration: 0.2,
        }}
        style={{
          padding: "12px 16px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: isActive
            ? theme.accent
            : "transparent",
          color: isActive
            ? "white"
            : theme.text,
          cursor: "pointer",
        }}
      >
        <Icon size={18} />
        <span>{label}</span>
      </motion.div>
    </Link>
  );
}