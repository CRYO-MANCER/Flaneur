import ProfileCard from "../../components/settings/ProfileCard";
import MotionCard from "../../components/settings/MotionCard";
import EnvironmentCard from "../../components/settings/EnvironmentCard";

export default function Settings() {
  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>Settings</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "24px",
          marginTop: "32px",
        }}
      >
        <ProfileCard />

        <MotionCard />

        <EnvironmentCard />
      </div>
    </div>
  );
}