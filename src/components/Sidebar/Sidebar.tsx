import SidebarItem from "./SidebarItem";
import { navigation } from "./navigation";
import useTheme from "../../themes/useTheme";

export default function Sidebar() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        width: "280px",
        height: "100vh",
        background: theme.sidebar,
        padding: "24px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: theme.text,
          fontSize: "36px",
          fontFamily: "var(--font-heading)",
          marginBottom: "40px",        
        }}
      >
        Flâneur
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {navigation.map((item) => (
          <SidebarItem
            key={item.path}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}