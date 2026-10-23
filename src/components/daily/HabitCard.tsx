import GlassCard from "../ui/GlassCard";

export default function HabitCard() {
  const habits = [
    {
      name:
        "Workout",
      streak: 8,
    },

    {
      name:
        "Reading",
      streak: 15,
    },

    {
      name:
        "Meditation",
      streak: 4,
    },
  ];

  return (
    <GlassCard>
      <h3>
        🌿 Habit Streaks
      </h3>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection:
            "column",
          gap: "18px",
        }}
      >
        {habits.map(
          (habit) => (
            <div
              key={
                habit.name
              }
            >
              <div>
                {
                  habit.name
                }
              </div>

              <div
                style={{
                  opacity:
                    .7,
                }}
              >
                🔥
                {" "}
                {
                  habit.streak
                }
                {" "}
                days
              </div>
            </div>
          )
        )}
      </div>
    </GlassCard>
  );
}