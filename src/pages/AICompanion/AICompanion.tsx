import {
  useEffect,
  useRef,
} from "react";

import CompanionHeader from "../../components/companion/CompanionHeader";

import ChatBubble from "../../components/companion/ChatBubble";

import MessageInput from "../../components/companion/MessageInput";

import TypingIndicator from "../../components/companion/TypingIndicator";

import {
  useCompanion,
} from "../../store/companionStore";

import {
  buildCompanionContext,
} from "../../utils/companionContext";

export default function AICompanion() {
  const {
    messages,
    sendMessage,
    clearChat,
    isTyping,
  } = useCompanion();

  const context =
    buildCompanionContext();

  const bottomRef =
    useRef<HTMLDivElement>(
      null
    );

  useEffect(() => {
    bottomRef.current?.scrollIntoView(
      {
        behavior: "smooth",
      }
    );
  }, [
    messages,
    isTyping,
  ]);

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <CompanionHeader />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "300px 1fr",

          gap: "24px",

          marginTop: "24px",
        }}
      >
        {/* MEMORY PANEL */}

        <div
          style={{
            display: "flex",

            flexDirection:
              "column",

            gap: "16px",
          }}
        >
          <div
            style={{
              padding: "20px",

              borderRadius:
                "24px",

              background:
                "rgba(255,255,255,.04)",

              border:
                "1px solid rgba(255,255,255,.08)",
            }}
          >
            <h3>
              🧠 Companion Memory
            </h3>

            <div
              style={{
                marginTop:
                  "16px",

                display: "flex",

                flexDirection:
                  "column",

                gap: "12px",

                fontSize:
                  "14px",
              }}
            >
              <div>
                Current Mood:
                {" "}
                {
                  context.currentMood
                }
              </div>

              <div>
                Most Used:
                {" "}
                {
                  context.mostUsedMood
                }
              </div>

              <div>
                Tasks:
                {" "}
                {
                  context.tasksCompleted
                }
                /
                {
                  context.totalTasks
                }
              </div>

              <div>
                Habits:
                {" "}
                {
                  context.habitsCompleted
                }
                /
                {
                  context.totalHabits
                }
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "20px",

              borderRadius:
                "24px",

              background:
                "rgba(255,255,255,.04)",

              border:
                "1px solid rgba(255,255,255,.08)",
            }}
          >
            <h3>
              📖 Recent Journal
            </h3>

            <p
              style={{
                marginTop:
                  "12px",

                opacity: 0.8,
              }}
            >
              {
                context.recentJournal
              }
            </p>
          </div>

          <div
            style={{
              padding: "20px",

              borderRadius:
                "24px",

              background:
                "rgba(255,255,255,.04)",

              border:
                "1px solid rgba(255,255,255,.08)",
            }}
          >
            <h3>
              💭 Reflection
            </h3>

            <p
              style={{
                marginTop:
                  "12px",

                opacity: 0.8,
              }}
            >
              {
                context.recentReflection
              }
            </p>
          </div>

          <div
            style={{
              padding: "20px",

              borderRadius:
                "24px",

              background:
                "rgba(255,255,255,.04)",

              border:
                "1px solid rgba(255,255,255,.08)",
            }}
          >
            <h3>
              🙏 Gratitude
            </h3>

            <p
              style={{
                marginTop:
                  "12px",

                opacity: 0.8,
              }}
            >
              {
                context.recentGratitude
              }
            </p>
          </div>

          <div
            style={{
              padding: "20px",

              borderRadius:
                "24px",

              background:
                "rgba(255,255,255,.04)",

              border:
                "1px solid rgba(255,255,255,.08)",
            }}
          >
            <h3>
              🎵 Favorites
            </h3>

            <div
              style={{
                marginTop:
                  "12px",
              }}
            >
              {context.favoriteSongs
                .slice(0, 5)
                .map(
                  (song) => (
                    <div
                      key={
                        song
                      }
                      style={{
                        marginBottom:
                          "6px",
                      }}
                    >
                      • {song}
                    </div>
                  )
                )}
            </div>
          </div>
        </div>

        {/* CHAT PANEL */}

        <div>
          <div
            style={{
              display: "flex",

              justifyContent:
                "space-between",

              alignItems:
                "center",

              marginBottom:
                "20px",
            }}
          >
            <div
              style={{
                opacity: 0.65,

                fontSize:
                  "14px",
              }}
            >
              Session Active 🌿
            </div>

            <button
              onClick={
                clearChat
              }
            >
              Clear Chat
            </button>
          </div>

          <div
            style={{
              display: "flex",

              flexDirection:
                "column",

              gap: "14px",

              height:
                "70vh",

              overflowY:
                "auto",

              padding: "24px",

              borderRadius:
                "28px",

              background:
                "rgba(255,255,255,.04)",

              border:
                "1px solid rgba(255,255,255,.08)",

              backdropFilter:
                "blur(20px)",
            }}
          >
            {messages.map(
              (
                message
              ) => (
                <ChatBubble
                  key={
                    message.id
                  }
                  message={
                    message
                  }
                />
              )
            )}

            {isTyping && (
              <TypingIndicator />
            )}

            <div
              ref={
                bottomRef
              }
            />
          </div>

          <div
            style={{
              marginTop:
                "20px",
            }}
          >
            <MessageInput
              onSend={
                sendMessage
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}