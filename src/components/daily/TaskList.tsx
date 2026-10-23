import { useState } from "react";

import {
  useDaily,
} from "../../store/dailyStore";

import GlassCard from "../ui/GlassCard";

export default function TaskList() {
  const {
    tasks,
    addTask,
    toggleTask,
  } = useDaily();

  const [newTask, setNewTask] =
    useState("");

  return (
    <GlassCard>
      <h3
        style={{
          marginTop: 0,
        }}
      >
        Tasks
      </h3>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        <input
          value={newTask}
          onChange={(e) =>
            setNewTask(
              e.target.value
            )
          }
          placeholder="New task..."
          style={{
            flex: 1,

            padding: "12px",

            borderRadius: "14px",

            border:
              "1px solid rgba(255,255,255,.08)",

            background:
              "rgba(255,255,255,.04)",

            color: "inherit",
          }}
        />

        <button
          onClick={() => {
            if (!newTask.trim())
              return;

            addTask(newTask);
            setNewTask("");
          }}
          style={{
            border: "none",

            padding:
              "12px 18px",

            borderRadius:
              "14px",

            cursor: "pointer",

            background:
              "linear-gradient(135deg,#8b5cf6,#ec4899)",

            color: "#fff",
          }}
        >
          Add
        </button>
      </div>

      <div
        style={{
          marginTop: "24px",
        }}
      >
        {tasks.map((task) => (
          <label
            key={task.id}
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "14px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={
                task.completed
              }
              onChange={() =>
                toggleTask(
                  task.id
                )
              }
            />

            <span
              style={{
                textDecoration:
                  task.completed
                    ? "line-through"
                    : "none",

                opacity:
                  task.completed
                    ? 0.6
                    : 1,
              }}
            >
              {task.title}
            </span>
          </label>
        ))}
      </div>
    </GlassCard>
  );
}