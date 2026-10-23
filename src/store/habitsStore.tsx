import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Habit {
  id: number;
  title: string;
  completed: boolean;
}

interface HabitsContextType {
  habits: Habit[];

  toggleHabit: (
    id: number
  ) => void;

  addHabit: (
    title: string
  ) => void;

  deleteHabit: (
    id: number
  ) => void;
}

const HabitsContext =
  createContext<HabitsContextType>(
    {} as HabitsContextType
  );

const defaultHabits: Habit[] = [
  {
    id: 1,
    title: "Read 10 pages",
    completed: true,
  },

  {
    id: 2,
    title: "Workout",
    completed: false,
  },

  {
    id: 3,
    title: "Meditate",
    completed: true,
  },

  {
    id: 4,
    title: "Code 1 hour",
    completed: false,
  },
];

export function HabitsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [habits, setHabits] =
    useState<Habit[]>(() => {
      const saved =
        localStorage.getItem(
          "flaneur_habits"
        );

      if (saved) {
        return JSON.parse(saved);
      }

      return defaultHabits;
    });

  useEffect(() => {
    localStorage.setItem(
      "flaneur_habits",
      JSON.stringify(habits)
    );
  }, [habits]);

  function toggleHabit(
    id: number
  ) {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed:
                !habit.completed,
            }
          : habit
      )
    );
  }

  function addHabit(
    title: string
  ) {
    if (!title.trim()) return;

    setHabits((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);
  }

  function deleteHabit(
    id: number
  ) {
    setHabits((prev) =>
      prev.filter(
        (habit) =>
          habit.id !== id
      )
    );
  }

  return (
    <HabitsContext.Provider
      value={{
        habits,
        toggleHabit,
        addHabit,
        deleteHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
}

export function useHabits() {
  return useContext(
    HabitsContext
  );
}