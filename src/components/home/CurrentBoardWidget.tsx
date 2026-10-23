import GlassCard from "../ui/GlassCard";

import {
  useMoodboard,
} from "../../store/moodboardStore";

export default function CurrentBoardWidget() {
  const {
    activeBoard,
  } = useMoodboard();

  return (
    <GlassCard>
      <h3>
        📌 Current Board
      </h3>

      <h2
        style={{
          marginTop: "16px",
        }}
      >
        {activeBoard?.name}
      </h2>

      <p
        style={{
          opacity: 0.7,
        }}
      >
        {
          activeBoard?.images
            .length
        }{" "}
        images
      </p>
    </GlassCard>
  );
}