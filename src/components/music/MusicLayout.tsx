import VinylRecord from "./VinylRecord";
import WaveVisualizer from "./WaveVisualizer";
import NowPlayingCard from "./NowPlayingCard";
import PlaylistCard from "./PlaylistCard";

import RecentlyPlayedCard from "./RecentlyPlayedCard";
import FavoritesCard from "./FavoritesCard";
import SpotifyConnectCard from "./SpotifyConnectCard";
import SpotifySearchCard from "./SpotifySearchCard";

import ArtistCard from "./ArtistCard";
import RecommendationCard from "./RecommendationCard";
import PlaylistCollectionCard from "./PlaylistCollectionCard";

export default function MusicLayout() {
  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <NowPlayingCard />

        <div>
          <VinylRecord />
          <WaveVisualizer />
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
        }}
      >
        <SpotifySearchCard />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1.2fr 1fr 1fr",
          gap: "24px",
          marginTop: "30px",
        }}
      >
        <PlaylistCard />

        <FavoritesCard />

        <RecentlyPlayedCard />
      </div>

      <div
        style={{
          marginTop: "24px",
        }}
      >
        <SpotifyConnectCard />

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr 1fr",
            gap: "24px",
            marginTop: "24px",
          }}
        >
          <ArtistCard />

          <RecommendationCard />

          <PlaylistCollectionCard />
        </div>
      </div>
    </div>
  );
}