import { motion } from "framer-motion";

import useEnvironment from "../../environments/useEnvironment";
import { environments } from "../../environments/environmentConfig";

import RainOverlay from "./RainOverlay";
import FirefliesOverlay from "./FirefliesOverlay";
import BeachOverlay from "./BeachOverlay";
import CafeOverlay from "./CafeOverlay";
import FallingLeaves from "./FallingLeaves";
import WindOverlay from "./WindOverlay";
import CoffeeSteam from "./CoffeeSteam";

export default function AmbientBackground() {
  const { environment } = useEnvironment();

  const env =
    environments[environment as keyof typeof environments] ??
    environments["night-city"];

  return (
    <>
      {environment === "rain-room" && (
        <RainOverlay />
      )}

      {environment === "forest" && (
        <>
          <FirefliesOverlay />
          <FallingLeaves />
        </>
      )}

      {environment === "beach" && (
        <>
          <BeachOverlay />
          <WindOverlay />
        </>
      )}

      {environment === "midnight-cafe" && (
        <>
          <CafeOverlay />
          <CoffeeSteam />
        </>
      )}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            env?.primaryGlow ??
            "rgba(139,92,246,0.22)",
          filter: "blur(140px)",
          top: "-200px",
          right: "-100px",
          pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            env?.secondaryGlow ??
            "rgba(59,130,246,0.16)",
          filter: "blur(140px)",
          bottom: "-200px",
          left: "-150px",
          pointerEvents: "none",
        }}
      />
    </>
  );
}