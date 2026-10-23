import {
  useSettings,
} from "../../store/settingsStore";

import GlassCard from "../ui/GlassCard";

export default function ProfileCard() {
  const {
    username,
    setUsername,
    bio,
    setBio,
  } = useSettings();

  return (
    <GlassCard>
      <h3>Profile</h3>

      <input
        value={username}
        onChange={(e) =>
          setUsername(
            e.target.value
          )
        }
        placeholder="Name"
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "12px",
        }}
      />

      <textarea
        value={bio}
        onChange={(e) =>
          setBio(
            e.target.value
          )
        }
        placeholder="Bio"
        style={{
          width: "100%",
          marginTop: "12px",
          minHeight: "100px",
          padding: "12px",
        }}
      />
    </GlassCard>
  );
}