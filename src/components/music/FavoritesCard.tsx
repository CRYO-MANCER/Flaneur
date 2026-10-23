import GlassCard from "../ui/GlassCard";

import {
  useMusic,
} from "../../store/musicStore";

export default function FavoritesCard() {
  const {
    favorites,
  } = useMusic();

  return (
    <GlassCard>
      <h3>
        ❤️ Favorites
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
        {favorites.length ===
        0 ? (
          <div
            style={{
              opacity: 0.6,
            }}
          >
            No favorites yet
          </div>
        ) : (
          favorites.map(
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