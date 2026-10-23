import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Song {
  title: string;
  artist: string;
}

export interface Book {
  title: string;
  author: string;
}

export interface Movie {
  title: string;
  year: string;
}

export interface InspirationImage {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

interface InspirationContextType {
  quotes: string[];

  songs: Song[];

  ideas: string[];

  books: Book[];

  movies: Movie[];

  images: InspirationImage[];

  selectedCategory: string;

  setSelectedCategory: (
    category: string
  ) => void;

  addQuote: (
    quote: string
  ) => void;

  deleteQuote: (
    index: number
  ) => void;

  addSong: (
    title: string,
    artist: string
  ) => void;

  deleteSong: (
    index: number
  ) => void;

  addIdea: (
    idea: string
  ) => void;

  deleteIdea: (
    index: number
  ) => void;

  addBook: (
    title: string,
    author: string
  ) => void;

  deleteBook: (
    index: number
  ) => void;

  addMovie: (
    title: string,
    year: string
  ) => void;

  deleteMovie: (
    index: number
  ) => void;

  addImage: (
    title: string,
    imageUrl: string,
    category: string
  ) => void;

  deleteImage: (
    id: string
  ) => void;
}

const InspirationContext =
  createContext(
    {} as InspirationContextType
  );

export function InspirationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [quotes, setQuotes] =
    useState<string[]>(() => {
      const saved =
        localStorage.getItem(
          "flaneur_quotes"
        );

      if (saved) {
        return JSON.parse(saved);
      }

      return [
        "Certain thoughts only arrive in the quiet.",
        "The moon understands what the sun never notices.",
        "You don't need permission to begin.",
        "The version of you from a year ago would be proud.",
        "Slow progress is still progress.",
      ];
    });

  const [songs, setSongs] =
    useState<Song[]>(() => {
      const saved =
        localStorage.getItem(
          "flaneur_songs"
        );

      if (saved) {
        return JSON.parse(saved);
      }

      return [
        {
          title:
            "The Night We Met",
          artist:
            "Lord Huron",
        },
        {
          title:
            "Apocalypse",
          artist:
            "Cigarettes After Sex",
        },
        {
          title:
            "Space Song",
          artist:
            "Beach House",
        },
      ];
    });

  const [ideas, setIdeas] =
    useState<string[]>(() => {
      const saved =
        localStorage.getItem(
          "flaneur_ideas"
        );

      if (saved) {
        return JSON.parse(saved);
      }

      return [
        "Open a seaside café",
        "Build a dream reading room",
        "Travel through Europe by train",
      ];
    });

  const [books, setBooks] =
    useState<Book[]>(() => {
      const saved =
        localStorage.getItem(
          "flaneur_books"
        );

      if (saved) {
        return JSON.parse(saved);
      }

      return [
        {
          title:
            "The Alchemist",
          author:
            "Paulo Coelho",
        },
        {
          title:
            "Atomic Habits",
          author:
            "James Clear",
        },
      ];
    });

  const [movies, setMovies] =
    useState<Movie[]>(() => {
      const saved =
        localStorage.getItem(
          "flaneur_movies"
        );

      if (saved) {
        return JSON.parse(saved);
      }

      return [
        {
          title:
            "Interstellar",
          year: "2014",
        },
        {
          title:
            "Before Sunrise",
          year: "1995",
        },
      ];
    });

  const [images, setImages] =
    useState<InspirationImage[]>(() => {
      const saved =
        localStorage.getItem(
          "flaneur_images"
        );

      if (saved) {
        return JSON.parse(saved);
      }

      return [
        {
          id: crypto.randomUUID(),
          title:
            "Night Walk",
          category:
            "Photography",
          imageUrl:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        },

        {
          id: crypto.randomUUID(),
          title:
            "Cozy Cafe",
          category:
            "Cafes",
          imageUrl:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        },

        {
          id: crypto.randomUUID(),
          title:
            "Mountain Escape",
          category:
            "Travel",
          imageUrl:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        },

        {
          id: crypto.randomUUID(),
          title:
            "Architecture",
          category:
            "Architecture",
          imageUrl:
            "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
        },
      ];
    });

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  useEffect(() => {
    localStorage.setItem(
      "flaneur_quotes",
      JSON.stringify(quotes)
    );
  }, [quotes]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_songs",
      JSON.stringify(songs)
    );
  }, [songs]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_ideas",
      JSON.stringify(ideas)
    );
  }, [ideas]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_books",
      JSON.stringify(books)
    );
  }, [books]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_movies",
      JSON.stringify(movies)
    );
  }, [movies]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_images",
      JSON.stringify(images)
    );
  }, [images]);

  function addQuote(
    quote: string
  ) {
    if (!quote.trim()) return;

    setQuotes((prev) => [
      quote,
      ...prev,
    ]);
  }

  function deleteQuote(
    index: number
  ) {
    setQuotes((prev) =>
      prev.filter(
        (_, i) =>
          i !== index
      )
    );
  }

  function addSong(
    title: string,
    artist: string
  ) {
    if (!title.trim()) return;

    setSongs((prev) => [
      {
        title,
        artist,
      },
      ...prev,
    ]);
  }

  function deleteSong(
    index: number
  ) {
    setSongs((prev) =>
      prev.filter(
        (_, i) =>
          i !== index
      )
    );
  }

  function addIdea(
    idea: string
  ) {
    if (!idea.trim()) return;

    setIdeas((prev) => [
      idea,
      ...prev,
    ]);
  }

  function deleteIdea(
    index: number
  ) {
    setIdeas((prev) =>
      prev.filter(
        (_, i) =>
          i !== index
      )
    );
  }

  function addBook(
    title: string,
    author: string
  ) {
    if (!title.trim()) return;

    setBooks((prev) => [
      {
        title,
        author,
      },
      ...prev,
    ]);
  }

  function deleteBook(
    index: number
  ) {
    setBooks((prev) =>
      prev.filter(
        (_, i) =>
          i !== index
      )
    );
  }

  function addMovie(
    title: string,
    year: string
  ) {
    if (!title.trim()) return;

    setMovies((prev) => [
      {
        title,
        year,
      },
      ...prev,
    ]);
  }

  function deleteMovie(
    index: number
  ) {
    setMovies((prev) =>
      prev.filter(
        (_, i) =>
          i !== index
      )
    );
  }

  function addImage(
    title: string,
    imageUrl: string,
    category: string
  ) {
    setImages((prev) => [
      {
        id: crypto.randomUUID(),
        title,
        imageUrl,
        category,
      },
      ...prev,
    ]);
  }

  function deleteImage(
    id: string
  ) {
    setImages((prev) =>
      prev.filter(
        (image) =>
          image.id !== id
      )
    );
  }

  return (
    <InspirationContext.Provider
      value={{
        quotes,
        songs,
        ideas,
        books,
        movies,

        images,

        selectedCategory,

        setSelectedCategory,

        addQuote,
        deleteQuote,

        addSong,
        deleteSong,

        addIdea,
        deleteIdea,

        addBook,
        deleteBook,

        addMovie,
        deleteMovie,

        addImage,
        deleteImage,
      }}
    >
      {children}
    </InspirationContext.Provider>
  );
}

export function useInspirations() {
  return useContext(
    InspirationContext
  );
}