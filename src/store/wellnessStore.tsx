import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface JournalEntry {
  id: string;
  text: string;
  date: string;
}

export interface MoodEntry {
  id: string;
  mood: string;
  date: string;
}

export interface ReflectionEntry {
  id: string;
  prompt: string;
  answer: string;
  date: string;
}

export interface GratitudeEntry {
  id: string;
  text: string;
  date: string;
}

interface WellnessContextType {
  mood: string;

  setMood: (
    mood: string
  ) => void;

  moodHistory: MoodEntry[];

  journalEntries: JournalEntry[];

  addJournalEntry: (
    text: string
  ) => void;

  deleteJournalEntry: (
    id: string
  ) => void;

  reflections: ReflectionEntry[];

  addReflection: (
    prompt: string,
    answer: string
  ) => void;

  deleteReflection: (
    id: string
  ) => void;

  gratitudes: GratitudeEntry[];

  addGratitude: (
    text: string
  ) => void;

  deleteGratitude: (
    id: string
  ) => void;

  lastPeriodDate: string;

  setLastPeriodDate: (
    date: string
  ) => void;

  cycleLength: number;

  setCycleLength: (
    days: number
  ) => void;
}

const WellnessContext =
  createContext<WellnessContextType>(
    {} as WellnessContextType
  );

export function WellnessProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mood, setMoodState] =
    useState(() => {
      return (
        localStorage.getItem(
          "flaneur_mood"
        ) || "🙂"
      );
    });

  const [moodHistory, setMoodHistory] =
    useState<MoodEntry[]>(() => {
      const saved =
        localStorage.getItem(
          "flaneur_mood_history"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  const [
    journalEntries,
    setJournalEntries,
  ] = useState<JournalEntry[]>(() => {
    const saved =
      localStorage.getItem(
        "flaneur_journal_entries"
      );

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [
    reflections,
    setReflections,
  ] = useState<ReflectionEntry[]>(
    () => {
      const saved =
        localStorage.getItem(
          "flaneur_reflections"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    }
  );

  const [
    gratitudes,
    setGratitudes,
  ] = useState<GratitudeEntry[]>(() => {
    const saved =
      localStorage.getItem(
        "flaneur_gratitudes"
      );

      return saved
        ? JSON.parse(saved)
        : [];
  });

  const [
    lastPeriodDate,
    setLastPeriodDateState,
  ] = useState(() => {
    return (
      localStorage.getItem(
        "flaneur_last_period"
      ) || ""
    );
  });

  const [
    cycleLength,
    setCycleLengthState,
  ] = useState(() => {
    const saved =
      localStorage.getItem(
        "flaneur_cycle_length"
      );

    return saved
      ? Number(saved)
      : 28;
  });

  useEffect(() => {
    localStorage.setItem(
      "flaneur_mood",
      mood
    );
  }, [mood]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_mood_history",
      JSON.stringify(
        moodHistory
      )
    );
  }, [moodHistory]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_journal_entries",
      JSON.stringify(
        journalEntries
      )
    );
  }, [journalEntries]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_reflections",
      JSON.stringify(
        reflections
      )
    );
  }, [reflections]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_gratitudes",
      JSON.stringify(
        gratitudes
      )
    );
  }, [gratitudes]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_last_period",
      lastPeriodDate
    );
  }, [lastPeriodDate]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_cycle_length",
      cycleLength.toString()
    );
  }, [cycleLength]);

  function setMood(
    newMood: string
  ) {
    setMoodState(newMood);

    setMoodHistory((prev) => [
      {
        id: crypto.randomUUID(),
        mood: newMood,
        date:
          new Date().toLocaleDateString(),
      },
      ...prev,
    ]);
  }

  function addJournalEntry(
    text: string
  ) {
    if (!text.trim()) return;

    setJournalEntries(
      (prev) => [
        {
          id: crypto.randomUUID(),
          text,
          date:
            new Date().toLocaleString(),
        },
        ...prev,
      ]
    );
  }

  function deleteJournalEntry(
    id: string
  ) {
    setJournalEntries(
      (prev) =>
        prev.filter(
          (entry) =>
            entry.id !== id
        )
    );
  }

  function addReflection(
    prompt: string,
    answer: string
  ) {
    if (!answer.trim())
      return;

    setReflections(
      (prev) => [
        {
          id: crypto.randomUUID(),
          prompt,
          answer,
          date:
            new Date().toLocaleString(),
        },
        ...prev,
      ]
    );
  }

  function deleteReflection(
    id: string
  ) {
    setReflections((prev) =>
      prev.filter(
        (reflection) =>
          reflection.id !== id
      )
    );
  }

  function addGratitude(
    text: string
  ) {
    if (!text.trim())
      return;

    setGratitudes((prev) => [
      {
        id: crypto.randomUUID(),
        text,
        date:
          new Date().toLocaleString(),
      },
      ...prev,
    ]);
  }

  function deleteGratitude(
    id: string
  ) {
    setGratitudes((prev) =>
      prev.filter(
        (item) =>
          item.id !== id
      )
    );
  }

  function setLastPeriodDate(
    date: string
  ) {
    setLastPeriodDateState(
      date
    );
  }

  function setCycleLength(
    days: number
  ) {
    setCycleLengthState(
      days
    );
  }

  return (
    <WellnessContext.Provider
      value={{
        mood,

        setMood,

        moodHistory,

        journalEntries,

        addJournalEntry,

        deleteJournalEntry,

        reflections,

        addReflection,

        deleteReflection,

        gratitudes,

        addGratitude,

        deleteGratitude,

        lastPeriodDate,

        setLastPeriodDate,

        cycleLength,

        setCycleLength,
      }}
    >
      {children}
    </WellnessContext.Provider>
  );
}

export function useWellness() {
  return useContext(
    WellnessContext
  );
}