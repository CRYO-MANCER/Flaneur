import {
  useState,
} from "react";

import {
  useHabits,
} from "../../store/habitsStore";

import GlassCard from "../ui/GlassCard";

export default function HabitTracker() {
  const {
    habits,
    toggleHabit,
    addHabit,
    deleteHabit,
  } = useHabits();

  const [newHabit, setNewHabit] =
    useState("");

  return (
    <GlassCard>
      <h3>
        Habits
      </h3>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        <input
          value={newHabit}
          onChange={(e) =>
            setNewHabit(
              e.target.value
            )
          }
          placeholder="New habit..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "12px",
          }}
        />

        <button
          onClick={() => {
            addHabit(
              newHabit
            );

            setNewHabit("");
          }}
        >
          Add
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection:
            "column",
          gap: "14px",
          marginTop: "20px",
        }}
      >
        {habits.map(
          (habit) => (
            <div
              key={habit.id}
              style={{
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "space-between",
              }}
            >
              <label
                style={{
                  display: "flex",
                  gap: "12px",
                  cursor:
                    "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={
                    habit.completed
                  }
                  onChange={() =>
                    toggleHabit(
                      habit.id
                    )
                  }
                />

                <span>
                  {habit.title}
                </span>
              </label>

              <button
                onClick={() =>
                  deleteHabit(
                    habit.id
                  )
                }
              >
                🗑
              </button>
            </div>
          )
        )}
      </div>
    </GlassCard>
  );
}