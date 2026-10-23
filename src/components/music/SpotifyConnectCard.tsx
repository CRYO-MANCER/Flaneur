import GlassCard from "../ui/GlassCard";

export default function SpotifyConnectCard() {
  return (
    <GlassCard>
      <h3>🎵 Spotify</h3>

      <p
        style={{
          marginTop: "16px",
          opacity: 0.7,
        }}
      >
        Connect your Spotify
        account to sync playlists,
        favorites and listening
        history.
      </p>

      <button
        style={{
          marginTop: "20px",
        }}
      >
        Connect Spotify
      </button>
    </GlassCard>
  );
}