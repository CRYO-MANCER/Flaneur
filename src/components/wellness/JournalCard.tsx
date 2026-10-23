import { useState } from "react";

import GlassCard from "../ui/GlassCard";
import CardTitle from "../ui/CardTitle";
import GenericTextarea from "../ui/GenericTextarea";
import GenericButton from "../ui/GenericButton";

import {
  useWellness,
} from "../../store/wellnessStore";

export default function JournalCard() {
  const [
    journal,
    setJournal,
  ] = useState("");

  const {
    journalEntries,
    addJournalEntry,
    deleteJournalEntry,
  } = useWellness();

  return (
    <GlassCard>
      <CardTitle>
        📖 Journal
      </CardTitle>

      <GenericTextarea
        value={journal}
        onChange={(e) =>
          setJournal(
            e.target.value
          )
        }
        placeholder="Dear today..."
      />

      <div
        style={{
          marginTop: "16px",
        }}
      >
        <GenericButton
          onClick={() => {
            if (!journal.trim())
              return;

            addJournalEntry(
              journal
            );

            setJournal("");
          }}
        >
          Save Entry
        </GenericButton>
      </div>

      <div
        style={{
          marginTop: "32px",
        }}
      >
        {journalEntries.map(
          (entry) => (
            <div
              key={entry.id}
              style={{
                padding: "16px",
                marginBottom:
                  "16px",
                borderRadius:
                  "18px",
                background:
                  "rgba(255,255,255,.05)",
              }}
            >
              <div
                style={{
                  opacity: .6,
                  fontSize:
                    "12px",
                  marginBottom:
                    "10px",
                }}
              >
                {entry.date}
              </div>

              <div>
                {entry.text}
              </div>

              <div
                style={{
                  marginTop:
                    "12px",
                }}
              >
                <GenericButton
                  onClick={() =>
                    deleteJournalEntry(
                      entry.id
                    )
                  }
                >
                  Delete
                </GenericButton>
              </div>
            </div>
          )
        )}
      </div>
    </GlassCard>
  );
}