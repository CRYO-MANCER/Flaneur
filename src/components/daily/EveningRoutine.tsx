import {
  useState,
} from "react";

import GlassCard from "../ui/GlassCard";

import {
  useRoutines,
} from "../../store/routinesStore";

export default function EveningRoutine() {
  const {
    eveningItems,
    addEveningItem,
    deleteEveningItem,
  } = useRoutines();

  const [newItem, setNewItem] =
    useState("");

  return (
    <GlassCard>
      <h3>
        Evening Routine
      </h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "12px",
        }}
      >
        <input
          value={newItem}
          onChange={(e) =>
            setNewItem(
              e.target.value
            )
          }
          placeholder="New item..."
          style={{
            flex: 1,
            padding: "10px",
          }}
        />

        <button
          onClick={() => {
            addEveningItem(
              newItem
            );

            setNewItem("");
          }}
        >
          Add
        </button>
      </div>

      <ul
        style={{
          marginTop: "20px",
        }}
      >
        {eveningItems.map(
          (item, index) => (
            <li
              key={`${item}-${index}`}
              style={{
                marginBottom:
                  "12px",

                display: "flex",

                justifyContent:
                  "space-between",
              }}
            >
              {item}

              <button
                onClick={() =>
                  deleteEveningItem(
                    index
                  )
                }
              >
                🗑
              </button>
            </li>
          )
        )}
      </ul>
    </GlassCard>
  );
}