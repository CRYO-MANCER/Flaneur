import { motion } from "framer-motion";
import { useMusic } from "../../store/musicStore";

export default function VinylRecord() {
  const { isPlaying } = useMusic();

  return (
    <div
      style={{
        position: "relative",
        width: "260px",
        height: "260px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(139,92,246,.15),rgba(236,72,153,.08),transparent)",
          filter: "blur(30px)",
        }}
      />

      <motion.div
        animate={{
          rotate: isPlaying ? 360 : 0,
          scale: isPlaying ? [1, 1.005, 1] : 1,
        }}
        transition={{
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 2,
            repeat: Infinity,
          },
        }}
        style={{
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,#2b2b2b 3%,#111 35%,#050505 100%)",
          position: "relative",
          boxShadow:
            "0 20px 60px rgba(0,0,0,.45)",
        }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: `${12 + i * 6}px`,
              borderRadius: "50%",
              border:
                "1px solid rgba(255,255,255,.04)",
            }}
          />
        ))}

        <div
          style={{
            width: "85px",
            height: "85px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#8b5cf6,#ec4899)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform:
              "translate(-50%,-50%)",
            boxShadow:
              "0 0 30px rgba(236,72,153,.4)",
          }}
        />

        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: "#ddd",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform:
              "translate(-50%,-50%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "120px",
            height: "120px",
            background:
              "linear-gradient(to bottom right,rgba(255,255,255,.2),transparent)",
            borderRadius: "50%",
            top: "30px",
            left: "60px",
            filter: "blur(8px)",
          }}
        />
      </motion.div>

      <motion.div
        animate={{
          rotate: isPlaying ? [24, 26, 24] : 24,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          width: "110px",
          height: "7px",
          background: "#999",
          position: "absolute",
          top: "60px",
          right: "5px",
          borderRadius: "999px",
          transformOrigin: "left center",
          transform: "rotate(24deg)",
          boxShadow:
            "0 5px 15px rgba(0,0,0,.25)",
        }}
      />
    </div>
  );
}