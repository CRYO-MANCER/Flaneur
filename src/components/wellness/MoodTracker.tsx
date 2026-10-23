import {
  useWellness,
} from "../../store/wellnessStore";

export default function MoodTracker() {
  const {
    mood,
    setMood,
    moodHistory,
  } = useWellness();

  const moods = [
    "😊",
    "🙂",
    "😐",
    "😔",
    "😭",
  ];

  return (
    <div>
      <h3>Mood</h3>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {moods.map((m) => (
          <button
            key={m}
            onClick={() =>
              setMood(m)
            }
            style={{
              fontSize: "28px",
              border:
                mood === m
                  ? "2px solid #8b5cf6"
                  : "none",
              borderRadius: "12px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {m}
          </button>
        ))}
      </div>

      <div
        style={{
          marginTop: "24px",
        }}
      >
        <h4>
          Recent Mood History
        </h4>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "12px",
            flexWrap: "wrap",
          }}
        >
          {moodHistory
            .slice(0, 10)
            .map((entry) => (
              <span
                key={entry.id}
              >
                {entry.mood}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}