import { motion } from "framer-motion";
import InspirationCard from "./InspirationCard";

interface Props {
  title: string;
  image: string;
  subtitle?: string;
}

export default function ImageCard({
  title,
  image,
  subtitle,
}: Props) {
  return (
    <InspirationCard>
      <motion.img
        src={image}
        alt={title}
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          duration: 0.4,
        }}
        style={{
          width: "100%",
          height: "260px",
          objectFit: "cover",
          borderRadius: "18px",
        }}
      />

      <h3
        style={{
          marginTop: "16px",
          marginBottom: "6px",
        }}
      >
        {title}
      </h3>

      {subtitle && (
        <p
          style={{
            opacity: 0.7,
            fontSize: "14px",
          }}
        >
          {subtitle}
        </p>
      )}
    </InspirationCard>
  );
}