import { useState } from "react";

import {
  useMoodboard,
} from "../../store/moodboardStore";

export default function BoardTabs() {
  const {
    boards,
    activeBoardId,
    setActiveBoard,
    addBoard,
    deleteBoard,
    renameBoard,
  } = useMoodboard();

  const [name, setName] =
    useState("");

  const [
    editingBoardId,
    setEditingBoardId,
  ] = useState("");

  const [
    editingName,
    setEditingName,
  ] = useState("");

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(240px,1fr))",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        {boards.map((board) => {
          const coverImage =
            board.images[0];

          const imageCount =
            board.images.length;

          return (
            <div
              key={board.id}
              onClick={() =>
                setActiveBoard(
                  board.id
                )
              }
              style={{
                cursor:
                  "pointer",

                overflow:
                  "hidden",

                borderRadius:
                  "24px",

                background:
                  activeBoardId ===
                  board.id
                    ? "rgba(139,92,246,.18)"
                    : "rgba(255,255,255,.04)",

                border:
                  activeBoardId ===
                  board.id
                    ? "2px solid #8b5cf6"
                    : "1px solid rgba(255,255,255,.08)",

                transition:
                  ".25s",
              }}
            >
              {/* COVER */}

              <div
                style={{
                  height: "140px",

                  background:
                    coverImage
                      ? `url(${coverImage.src}) center/cover`
                      : "linear-gradient(135deg,#8b5cf6,#ec4899)",
                }}
              />

              {/* INFO */}

              <div
                style={{
                  padding: "16px",
                }}
              >
                {editingBoardId ===
                board.id ? (
                  <input
                    autoFocus
                    value={
                      editingName
                    }
                    onChange={(e) =>
                      setEditingName(
                        e.target
                          .value
                      )
                    }
                    onBlur={() => {
                      renameBoard(
                        board.id,
                        editingName
                      );

                      setEditingBoardId(
                        ""
                      );
                    }}
                    onKeyDown={(
                      e
                    ) => {
                      if (
                        e.key ===
                        "Enter"
                      ) {
                        renameBoard(
                          board.id,
                          editingName
                        );

                        setEditingBoardId(
                          ""
                        );
                      }
                    }}
                    style={{
                      width:
                        "100%",
                      padding:
                        "8px",
                      borderRadius:
                        "10px",
                    }}
                  />
                ) : (
                  <h3
                    onDoubleClick={(
                      e
                    ) => {
                      e.stopPropagation();

                      setEditingBoardId(
                        board.id
                      );

                      setEditingName(
                        board.name
                      );
                    }}
                    style={{
                      margin: 0,
                    }}
                  >
                    {board.name}
                  </h3>
                )}

                <p
                  style={{
                    opacity: 0.7,

                    marginTop:
                      "8px",

                    fontSize:
                      "14px",
                  }}
                >
                  {imageCount} image
                  {imageCount !==
                  1
                    ? "s"
                    : ""}
                </p>

                {boards.length >
                  1 && (
                  <button
                    onClick={(
                      e
                    ) => {
                      e.stopPropagation();

                      const ok =
                        window.confirm(
                          `Delete "${board.name}"?`
                        );

                      if (
                        ok
                      ) {
                        deleteBoard(
                          board.id
                        );
                      }
                    }}
                    style={{
                      marginTop:
                        "12px",

                      background:
                        "#ef4444",

                      border:
                        "none",

                      color:
                        "white",

                      borderRadius:
                        "10px",

                      padding:
                        "8px 12px",

                      cursor:
                        "pointer",
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* CREATE BOARD */}

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <input
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          placeholder="New board..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius:
              "12px",
          }}
        />

        <button
          onClick={() => {
            addBoard(name);

            setName("");
          }}
        >
          Add Board
        </button>
      </div>
    </>
  );
}