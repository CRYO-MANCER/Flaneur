import GlassCard from "../ui/GlassCard";

import {
  useMusic,
} from "../../store/musicStore";

export default function RecentlyPlayedCard() {
  const {
    recentlyPlayed,
  } = useMusic();

  return (
    <GlassCard>
      <h3>
        🕘 Recently Played
      </h3>

      <div
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection:
            "column",
          gap: "12px",
        }}
      >
        {recentlyPlayed.length ===
        0 ? (
          <div
            style={{
              opacity: 0.6,
            }}
          >
            No listening history yet
          </div>
        ) : (
          recentlyPlayed.map(
            (song) => (
              <div
                key={song.id}
              >
                <div
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {song.title}
                </div>

                <div
                  style={{
                    fontSize:
                      "14px",
                    opacity:
                      0.6,
                  }}
                >
                  {song.artist}
                </div>
              </div>
            )
          )
        )}
      </div>
    </GlassCard>
  );
}