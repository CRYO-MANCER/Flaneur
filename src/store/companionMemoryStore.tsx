import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface CompanionMemory {
  currentMood: string;

  currentGoal: string;

  currentProject: string;

  recentJournal: string;

  gratitude: string;

  favoriteBooks: string[];

  favoriteSongs: string[];

  favoriteMovies: string[];

  favoriteArtists: string[];

  dreamPlaces: string[];

  partnerInterests: string[];

  memories: string[];
}

interface CompanionMemoryContextType {
  memory: CompanionMemory;

  updateMemory: (
    data: Partial<CompanionMemory>
  ) => void;
}

const CompanionMemoryContext =
  createContext(
    {} as CompanionMemoryContextType
  );

const defaultMemory: CompanionMemory =
  {
    currentMood:
      "Curious",

    currentGoal:
      "Build Flâneur",

    currentProject:
      "AI Companion App",

    recentJournal:
      "No journal entry yet.",

    gratitude:
      "Nothing logged yet.",

    favoriteBooks: [
      "Atomic Habits",
    ],

    favoriteSongs: [
      "Space Song",
    ],

    favoriteMovies: [],

    favoriteArtists: [],

    dreamPlaces: [],

    partnerInterests: [],

    memories: [],
  };

export function CompanionMemoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    memory,
    setMemory,
  ] =
    useState<CompanionMemory>(
      () => {
        const saved =
          localStorage.getItem(
            "flaneur_memory"
          );

        if (saved) {
          try {
            return {
              ...defaultMemory,
              ...JSON.parse(
                saved
              ),
            };
          } catch {
            return defaultMemory;
          }
        }

        return defaultMemory;
      }
    );

  useEffect(() => {
    localStorage.setItem(
      "flaneur_memory",
      JSON.stringify(memory)
    );
  }, [memory]);

  function updateMemory(
    data: Partial<CompanionMemory>
  ) {
    setMemory((prev) => ({
      ...prev,
      ...data,
    }));
  }

  return (
    <CompanionMemoryContext.Provider
      value={{
        memory,
        updateMemory,
      }}
    >
      {children}
    </CompanionMemoryContext.Provider>
  );
}

export function useCompanionMemory() {
  return useContext(
    CompanionMemoryContext
  );
}