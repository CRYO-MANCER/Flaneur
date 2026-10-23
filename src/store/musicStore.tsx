import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
}

type MusicContextType = {
  songs: Song[];

  currentSong: Song;

  currentSongIndex: number;

  isPlaying: boolean;

  currentTime: number;

  recentlyPlayed: Song[];

  favorites: Song[];

  togglePlay: () => void;

  nextTrack: () => void;

  previousTrack: () => void;

  selectTrack: (
    index: number
  ) => void;

  setCurrentTime: (
    time: number
  ) => void;

  toggleFavorite: (
    song: Song
  ) => void;
};

const playlist: Song[] = [
  {
    id: 1,
    title: "Late Night Sketches",
    artist: "Flâneur Radio",
    duration: 222,
  },
  {
    id: 2,
    title: "The Night We Met",
    artist: "Lord Huron",
    duration: 214,
  },
  {
    id: 3,
    title: "Apocalypse",
    artist: "Cigarettes After Sex",
    duration: 287,
  },
  {
    id: 4,
    title: "Space Song",
    artist: "Beach House",
    duration: 321,
  },
  {
    id: 5,
    title: "Sunset Lover",
    artist: "Petit Biscuit",
    duration: 236,
  },
];

const MusicContext =
  createContext<MusicContextType>(
    {} as MusicContextType
  );

export function MusicProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [
    currentSongIndex,
    setCurrentSongIndex,
  ] = useState(0);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [currentTime, setCurrentTime] =
    useState(0);

  const [
    recentlyPlayed,
    setRecentlyPlayed,
  ] = useState<Song[]>(() => {
    const saved =
      localStorage.getItem(
        "flaneur_recent_music"
      );

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [
    favorites,
    setFavorites,
  ] = useState<Song[]>(() => {
    const saved =
      localStorage.getItem(
        "flaneur_favorites"
      );

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const currentSong =
    playlist[currentSongIndex];

  useEffect(() => {
    localStorage.setItem(
      "flaneur_recent_music",
      JSON.stringify(
        recentlyPlayed
      )
    );
  }, [recentlyPlayed]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_favorites",
      JSON.stringify(
        favorites
      )
    );
  }, [favorites]);

  function trackSong(
    song: Song
  ) {
    setRecentlyPlayed((prev) => {
      const filtered =
        prev.filter(
          (s) => s.id !== song.id
        );

      return [
        song,
        ...filtered,
      ].slice(0, 20);
    });
  }

  function nextTrack() {
    const nextIndex =
      (currentSongIndex + 1) %
      playlist.length;

    setCurrentSongIndex(
      nextIndex
    );

    setCurrentTime(0);

    trackSong(
      playlist[nextIndex]
    );
  }

  function previousTrack() {
    const prevIndex =
      currentSongIndex === 0
        ? playlist.length - 1
        : currentSongIndex - 1;

    setCurrentSongIndex(
      prevIndex
    );

    setCurrentTime(0);

    trackSong(
      playlist[prevIndex]
    );
  }

  function togglePlay() {
    setIsPlaying((prev) => !prev);
  }

  function selectTrack(
    index: number
  ) {
    setCurrentSongIndex(
      index
    );

    setCurrentTime(0);

    trackSong(
      playlist[index]
    );
  }

  function toggleFavorite(
    song: Song
  ) {
    setFavorites((prev) => {
      const exists =
        prev.some(
          (s) =>
            s.id === song.id
        );

      if (exists) {
        return prev.filter(
          (s) =>
            s.id !== song.id
        );
      }

      return [song, ...prev];
    });
  }

  useEffect(() => {
    if (!isPlaying) return;

    const interval =
      setInterval(() => {
        setCurrentTime((prev) => {
          if (
            prev >=
            currentSong.duration
          ) {
            nextTrack();

            return 0;
          }

          return prev + 1;
        });
      }, 1000);

    return () =>
      clearInterval(interval);
  }, [
    isPlaying,
    currentSong,
  ]);

  return (
    <MusicContext.Provider
      value={{
        songs: playlist,

        currentSong,

        currentSongIndex,

        isPlaying,

        currentTime,

        recentlyPlayed,

        favorites,

        togglePlay,

        nextTrack,

        previousTrack,

        selectTrack,

        setCurrentTime,

        toggleFavorite,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(
    MusicContext
  );
}