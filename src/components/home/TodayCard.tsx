import GlassCard from "../ui/GlassCard";

import {
  useDaily,
} from "../../store/dailyStore";

export default function TodayCard() {
  const {
    focus,
  } = useDaily();

  return (
    <GlassCard>
      <h3>
        Today's Focus
      </h3>

      <div
        style={{
          fontSize: "26px",
          marginTop: "20px",
          fontWeight: 600,
        }}
      >
        {focus}
      </div>
    </GlassCard>
  );
}