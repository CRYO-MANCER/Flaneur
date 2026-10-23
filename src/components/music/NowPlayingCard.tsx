import {
  useRef,
} from "react";

import {
  useMusic,
} from "../../store/musicStore";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Heart,
} from "lucide-react";

import IconButton from "../ui/IconButton";

function formatTime(
  seconds: number
) {
  const mins =
    Math.floor(seconds / 60);

  const secs =
    seconds % 60;

  return `${mins}:${secs
    .toString()
    .padStart(2, "0")}`;
}

export default function NowPlayingCard() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    currentTime,
    previousTrack,
    nextTrack,
    setCurrentTime,
    favorites,
    toggleFavorite,
  } = useMusic();

  const progress =
    (currentTime /
      currentSong.duration) *
    100;

  const isFavorite =
    favorites.some(
      (song) =>
        song.id ===
        currentSong.id
    );

  const progressRef =
    useRef<HTMLDivElement>(null);

  function handleSeek(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    if (!progressRef.current)
      return;

    const rect =
      progressRef.current.getBoundingClientRect();

    const clickX =
      event.clientX -
      rect.left;

    const percentage =
      clickX / rect.width;

    const newTime =
      Math.floor(
        percentage *
          currentSong.duration
      );

    setCurrentTime(newTime);
  }

  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "24px",
        background:
          "rgba(255,255,255,0.05)",
        backdropFilter:
          "blur(20px)",
        border:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg,#8b5cf6,#ec4899)",
            boxShadow:
              "0 15px 40px rgba(236,72,153,.2)"
          }}
        />

        <div
          style={{
            flex: 1,
          }}
        >
          <h2>
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
            ref={progressRef}
            onClick={
              handleSeek
            }
            style={{
              height: "8px",
              background:
                "rgba(255,255,255,0.08)",
              borderRadius:
                "999px",
              marginTop: "20px",
              cursor:
                "pointer",
              overflow:
                "hidden",
            }}
          >
            <div
              style={{
                width:
                  `${progress}%`,
                height: "100%",
                background:
                  "linear-gradient(90deg,#8b5cf6,#ec4899)",
                borderRadius:
                  "999px",
                transition:
                  "width .3s linear",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginTop: "8px",
            }}
          >
            <span>
              {formatTime(
                currentTime
              )}
            </span>

            <span>
              {formatTime(
                currentSong.duration
              )}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <IconButton
              icon={<SkipBack size={18}/>}
              onClick={previousTrack}
            />

            <IconButton
              icon={
                isPlaying
                  ? <Pause size={18}/>
                  : <Play size={18}/>
              }
              onClick={togglePlay}
            />

            <IconButton
              icon={<SkipForward size={18}/>}
              onClick={nextTrack}
            />

            <IconButton
              icon={
                <Heart
                  size={18}
                  fill={
                    isFavorite
                      ? "currentColor"
                      : "none"
                  }
                />
              }
              onClick={() =>
                toggleFavorite(currentSong)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}