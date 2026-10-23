import FocusCard from "../../components/daily/FocusCard";
import TaskList from "../../components/daily/TaskList";
import HydrationCard from "../../components/daily/HydrationCard";
import StreakCard from "../../components/daily/StreakCard";

import MorningRoutine from "../../components/daily/MorningRoutine";
import EveningRoutine from "../../components/daily/EveningRoutine";
import HabitTracker from "../../components/daily/HabitTracker";
import CompletionCard from "../../components/daily/CompletionCard";

export default function DailyCompanion() {
  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>
        Daily Companion
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1.5fr 1fr",
          gap: "24px",
          marginTop: "32px",
          alignItems: "start",
        }}
      >
        {/* LEFT */}

        <div
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "24px",
          }}
        >
          <FocusCard />
          <MorningRoutine />
          <EveningRoutine />
        </div>

        {/* CENTER */}

        <div
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "24px",
          }}
        >
          <TaskList />
          <HabitTracker />
        </div>

        {/* RIGHT */}

        <div
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "24px",
          }}
        >
          <HydrationCard />
          <StreakCard />
          <CompletionCard />
        </div>
      </div>
    </div>
  );
}