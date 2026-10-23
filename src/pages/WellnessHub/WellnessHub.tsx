import MoodTracker from "../../components/wellness/MoodTracker";
import JournalCard from "../../components/wellness/JournalCard";
import ReflectionCard from "../../components/wellness/ReflectionCard";
import GratitudeCard from "../../components/wellness/GratitudeCard";
import CycleCard from "../../components/wellness/CycleCard";

import MoodInsights from "../../components/wellness/MoodInsights";
import WellnessScore from "../../components/wellness/WellnessScore";
import MoodCalendar from "../../components/wellness/MoodCalendar";
import ActivitySummaryCard from "../../components/wellness/ActivitySummaryCard";

export default function WellnessHub() {
  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>Wellness Hub</h1>

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <MoodTracker />
          <ReflectionCard />
          <GratitudeCard />
        </div>

        <JournalCard />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <CycleCard />
          <WellnessScore />
          <MoodInsights />
          <ActivitySummaryCard />
          <MoodCalendar />
        </div>
      </div>
    </div>
  );
}