import {
  useState,
} from "react";

import {
  useCompanionMemory,
} from "../../store/companionMemoryStore";

export default function CompanionMemoryEditor() {
  const {
    memory,
    updateMemory,
  } = useCompanionMemory();

  const [
    mood,
    setMood,
  ] = useState(
    memory.currentMood
  );

  const [
    goal,
    setGoal,
  ] = useState(
    memory.currentGoal
  );

  const [
    project,
    setProject,
  ] = useState(
    memory.currentProject
  );

  const [
    gratitude,
    setGratitude,
  ] = useState(
    memory.gratitude
  );

  function save() {
    updateMemory({
      currentMood: mood,
      currentGoal: goal,
      currentProject:
        project,
      gratitude,
    });
  }

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "24px",
        background:
          "rgba(255,255,255,.04)",
        border:
          "1px solid rgba(255,255,255,.08)",
      }}
    >
      <h3>
        ⚙ Memory Settings
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection:
            "column",
          gap: "12px",
          marginTop: "16px",
        }}
      >
        <input
          value={mood}
          onChange={(e) =>
            setMood(
              e.target.value
            )
          }
          placeholder="Current Mood"
        />

        <input
          value={goal}
          onChange={(e) =>
            setGoal(
              e.target.value
            )
          }
          placeholder="Current Goal"
        />

        <input
          value={project}
          onChange={(e) =>
            setProject(
              e.target.value
            )
          }
          placeholder="Current Project"
        />

        <textarea
          value={gratitude}
          onChange={(e) =>
            setGratitude(
              e.target.value
            )
          }
          placeholder="Gratitude"
          rows={4}
        />

        <button
          onClick={save}
        >
          Save Memory
        </button>
      </div>
    </div>
  );
}