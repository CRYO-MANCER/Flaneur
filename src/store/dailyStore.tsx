import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface DailyContextType {
  focus: string;
  setFocus: (value: string) => void;

  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;

  water: number;
  addWater: () => void;
  removeWater: () => void;

  streak: number;
}

const DailyContext =
  createContext({} as DailyContextType);

export function DailyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [focus, setFocus] =
    useState(() => {
      return (
        localStorage.getItem(
          "flaneur_focus"
        ) || "Ship Flâneur V1"
      );
    });

  const [tasks, setTasks] =
    useState<Task[]>(() => {
      const saved =
        localStorage.getItem(
          "flaneur_tasks"
        );

      if (saved) {
        return JSON.parse(saved);
      }

      return [
        {
          id: crypto.randomUUID(),
          title:
            "Finish Daily Companion",
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          title:
            "Build Wellness Hub",
          completed: false,
        },
      ];
    });

  const [water, setWater] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "flaneur_water"
        );

      return saved
        ? Number(saved)
        : 4;
    });

  const [streak] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "flaneur_streak"
        );

      return saved
        ? Number(saved)
        : 4;
    });

  useEffect(() => {
    localStorage.setItem(
      "flaneur_focus",
      focus
    );
  }, [focus]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_water",
      String(water)
    );
  }, [water]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_streak",
      String(streak)
    );
  }, [streak]);

  function addTask(title: string) {
    if (!title.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
  }

  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  }

  function addWater() {
    setWater((prev) =>
      Math.min(prev + 1, 8)
    );
  }

  function removeWater() {
    setWater((prev) =>
      Math.max(prev - 1, 0)
    );
  }

  return (
    <DailyContext.Provider
      value={{
        focus,
        setFocus,
        tasks,
        addTask,
        toggleTask,
        water,
        addWater,
        removeWater,
        streak,
      }}
    >
      {children}
    </DailyContext.Provider>
  );
}

export function useDaily() {
  return useContext(
    DailyContext
  );
}