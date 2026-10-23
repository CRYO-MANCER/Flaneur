import GlassCard from "../ui/GlassCard";

import {
  useMusic,
} from "../../store/musicStore";

export default function NowPlayingWidget() {
  const {
    currentSong,
    isPlaying,
  } = useMusic();

  return (
    <GlassCard>
      <h3>
        🎵 Now Playing
      </h3>

      <h2
        style={{
          marginTop: "16px",
        }}
      >
        {currentSong.title}
      </h2>

      <p
        style={{
          opacity: 0.7,
        }}
      >
        {currentSong.artist}
      </p>

      <div
        style={{
          marginTop: "16px",
        }}
      >
        {isPlaying
          ? "▶ Playing"
          : "⏸ Paused"}
      </div>
    </GlassCard>
  );
}