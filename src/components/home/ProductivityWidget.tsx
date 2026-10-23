import GlassCard from "../ui/GlassCard";

import {
  useDaily,
} from "../../store/dailyStore";

import {
  useHabits,
} from "../../store/habitsStore";

export default function ProductivityWidget() {
  const {
    tasks,
  } = useDaily();

  const {
    habits,
  } = useHabits();

  const completedTasks =
    tasks.filter(
      (t) =>
        t.completed
    ).length;

  const completedHabits =
    habits.filter(
      (h) =>
        h.completed
    ).length;

  return (
    <GlassCard>
      <h3>
        🚀 Progress
      </h3>

      <p
        style={{
          marginTop: "16px",
        }}
      >
        Tasks:
        {" "}
        {completedTasks}
        /
        {tasks.length}
      </p>

      <p>
        Habits:
        {" "}
        {completedHabits}
        /
        {habits.length}
      </p>
    </GlassCard>
  );
}