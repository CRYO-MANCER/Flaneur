import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface RoutineContextType {
  morningItems: string[];
  eveningItems: string[];

  addMorningItem: (
    item: string
  ) => void;

  addEveningItem: (
    item: string
  ) => void;

  deleteMorningItem: (
    index: number
  ) => void;

  deleteEveningItem: (
    index: number
  ) => void;
}

const RoutineContext =
  createContext(
    {} as RoutineContextType
  );

export function RoutineProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    morningItems,
    setMorningItems,
  ] = useState<string[]>(() => {
    const saved =
      localStorage.getItem(
        "flaneur_morning"
      );

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      "Hydrate",
      "Stretch",
      "Plan the day",
    ];
  });

  const [
    eveningItems,
    setEveningItems,
  ] = useState<string[]>(() => {
    const saved =
      localStorage.getItem(
        "flaneur_evening"
      );

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      "Journal",
      "Read",
      "Prepare tomorrow",
    ];
  });

  useEffect(() => {
    localStorage.setItem(
      "flaneur_morning",
      JSON.stringify(
        morningItems
      )
    );
  }, [morningItems]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_evening",
      JSON.stringify(
        eveningItems
      )
    );
  }, [eveningItems]);

  function addMorningItem(
    item: string
  ) {
    if (!item.trim()) return;

    setMorningItems((prev) => [
      ...prev,
      item,
    ]);
  }

  function addEveningItem(
    item: string
  ) {
    if (!item.trim()) return;

    setEveningItems((prev) => [
      ...prev,
      item,
    ]);
  }

  function deleteMorningItem(
    index: number
  ) {
    setMorningItems((prev) =>
      prev.filter(
        (_, i) => i !== index
      )
    );
  }

  function deleteEveningItem(
    index: number
  ) {
    setEveningItems((prev) =>
      prev.filter(
        (_, i) => i !== index
      )
    );
  }

  return (
    <RoutineContext.Provider
      value={{
        morningItems,
        eveningItems,

        addMorningItem,
        addEveningItem,

        deleteMorningItem,
        deleteEveningItem,
      }}
    >
      {children}
    </RoutineContext.Provider>
  );
}

export function useRoutines() {
  return useContext(
    RoutineContext
  );
}