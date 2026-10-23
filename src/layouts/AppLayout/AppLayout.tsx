import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import useTheme from "../../themes/useTheme";
import AmbientBackground from "../../components/ambient/AmbientBackground";
import FloatingParticles from "../../components/ambient/FloatingParticles";

export default function AppLayout() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: theme.background,
        color: theme.text,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AmbientBackground />
      <FloatingParticles />
      <Sidebar />

      <main
        style={{
          flex: 1,
          overflow: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}