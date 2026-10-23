import GlassCard from "../ui/GlassCard";

import {
  useDaily,
} from "../../store/dailyStore";

import {
  useHabits,
} from "../../store/habitsStore";

import {
  useWellness,
} from "../../store/wellnessStore";

export default function QuickStats() {
  const {
    water,
    tasks,
    streak,
  } = useDaily();

  const {
    mood,
  } = useWellness();

  const {
    habits,
  } = useHabits();

  const remainingTasks =
    tasks.filter(
      (task) =>
        !task.completed
    ).length;

  const completedHabits =
    habits.filter(
      (habit) =>
        habit.completed
    ).length;

  return (
    <GlassCard>
      <h3>
        Quick Stats
      </h3>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gap: "14px",
        }}
      >
        <div>
          💧 Water:
          {" "}
          {water}/8
        </div>

        <div>
          📋 Tasks:
          {" "}
          {remainingTasks}
        </div>

        <div>
          😊 Mood:
          {" "}
          {mood}
        </div>

        <div>
          🔥 Streak:
          {" "}
          {streak}
        </div>

        <div>
          ✅ Habits:
          {" "}
          {completedHabits}/
          {habits.length}
        </div>
      </div>
    </GlassCard>
  );
}