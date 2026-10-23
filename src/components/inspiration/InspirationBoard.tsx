import QuoteCard from "./QuoteCard";
import MusicCard from "./MusicCard";

import {
  useInspirations,
} from "../../store/inspirationStore";

export default function InspirationBoard() {
  const {
    quotes,
    songs,
  } = useInspirations();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill,minmax(420px,1fr))",
        gap: "32px",
      }}
    >
      {quotes.map(
        (quote, index) => (
          <QuoteCard
            key={`quote-${index}`}
            quote={quote}
          />
        )
      )}

      {songs.map(
        (song, index) => (
          <MusicCard
            key={`song-${index}`}
            title={song.title}
            artist={song.artist}
          />
        )
      )}
    </div>
  );
}