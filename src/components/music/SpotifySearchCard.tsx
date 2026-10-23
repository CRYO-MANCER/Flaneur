import {
  useState,
} from "react";

import GlassCard from "../ui/GlassCard";
import CardTitle from "../ui/CardTitle";
import GenericInput from "../ui/GenericInput";
import GenericButton from "../ui/GenericButton";

import {
  searchSpotify,
} from "../../services/spotify";

export default function SpotifySearchCard() {
  const [
    query,
    setQuery,
  ] = useState("");

  const [
    songs,
    setSongs,
  ] = useState<any[]>([]);

  async function handleSearch() {
    const result =
      await searchSpotify(
        query
      );

    setSongs(result);
  }

  return (
    <GlassCard>
      <CardTitle>
        🎵 Search Spotify
      </CardTitle>

      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <GenericInput
            value={query}
            onChange={(e) =>
              setQuery(
                e.target.value
              )
            }
            placeholder="Search songs..."
          />
        </div>

        <GenericButton
          onClick={
            handleSearch
          }
        >
          Search
        </GenericButton>
      </div>

      <div
        style={{
          marginTop: "24px",
          display: "flex",
          flexDirection:
            "column",
          gap: "16px",
        }}
      >
        {songs.map(
          (song) => (
            <div
              key={song.id}
              style={{
                display: "flex",
                gap: "16px",
                alignItems:
                  "center",
              }}
            >
              <img
                src={
                  song.album
                    .images[0]
                    ?.url
                }
                width={60}
                style={{
                  borderRadius:
                    "14px",
                }}
              />

              <div>
                <div>
                  {song.name}
                </div>

                <div
                  style={{
                    opacity:
                      .7,
                  }}
                >
                  {
                    song
                      .artists[0]
                      .name
                  }
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </GlassCard>
  );
}