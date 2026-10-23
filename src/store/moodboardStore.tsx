import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface MoodboardImage {
  id: string;
  src: string;
  collection?: string;
}

export interface MoodboardBoard {
  id: string;
  name: string;
  images: MoodboardImage[];
}

interface MoodboardContextType {
  boards: MoodboardBoard[];

  activeBoardId: string;

  activeBoard:
    | MoodboardBoard
    | undefined;

  selectedImage:
    | MoodboardImage
    | null;

  setActiveBoard: (
    boardId: string
  ) => void;

  addBoard: (
    name: string
  ) => void;

  deleteBoard: (
    boardId: string
  ) => void;

  renameBoard: (
  boardId: string,
  newName: string
) => void;

  addImage: (
    imageSrc: string,
    collection?: string
  ) => void;

  openImage: (
    image: MoodboardImage
  ) => void;

  closeImage: () => void;

  deleteImage: (
    imageId: string
  ) => void;
}

const MoodboardContext =
  createContext<MoodboardContextType>(
    {} as MoodboardContextType
  );

export function MoodboardProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [boards, setBoards] =
    useState<MoodboardBoard[]>(() => {
      const saved =
        localStorage.getItem(
          "flaneur_moodboards_v2"
        );

      if (saved) {
        return JSON.parse(saved);
      }

      return [
        {
          id: crypto.randomUUID(),
          name: "My Board",
          images: [],
        },
      ];
    });

  const [
    activeBoardId,
    setActiveBoardId,
  ] = useState(() => {
    const saved =
      localStorage.getItem(
        "flaneur_active_board"
      );

    return saved || "";
  });

  const [
    selectedImage,
    setSelectedImage,
  ] = useState<MoodboardImage | null>(
    null
  );

  useEffect(() => {
    if (
      !activeBoardId &&
      boards.length
    ) {
      setActiveBoardId(
        boards[0].id
      );
    }
  }, [
    activeBoardId,
    boards,
  ]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_moodboards_v2",
      JSON.stringify(boards)
    );
  }, [boards]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_active_board",
      activeBoardId
    );
  }, [activeBoardId]);

  function addBoard(
    name: string
  ) {
    if (!name.trim()) return;

    const board = {
      id: crypto.randomUUID(),
      name,
      images: [],
    };

    setBoards((prev) => [
      ...prev,
      board,
    ]);

    setActiveBoardId(
      board.id
    );
  }

  function deleteBoard(
    boardId: string
  ) {
    const filtered =
      boards.filter(
        (board) =>
          board.id !== boardId
      );

    setBoards(filtered);

    if (
      activeBoardId === boardId &&
      filtered.length > 0
    ) {
      setActiveBoardId(
        filtered[0].id
      );
    }
  }

  function renameBoard(
  boardId: string,
  newName: string
) {
  if (!newName.trim())
    return;

  setBoards((prev) =>
    prev.map((board) =>
      board.id === boardId
        ? {
            ...board,
            name: newName,
          }
        : board
    )
  );
}

  function addImage(
  imageSrc: string,
  collection = "General"
  ) {
    setBoards((prev) =>
      prev.map((board) =>
        board.id === activeBoardId
          ? {
              ...board,
              images: [
                {
                  id: crypto.randomUUID(),
                  src: imageSrc,
                  collection,
                },
                ...board.images,
              ],
            }
          : board
      )
    );
  }

  function openImage(
    image: MoodboardImage
  ) {
    setSelectedImage(image);
  }

  function closeImage() {
    setSelectedImage(null);
  }

  function deleteImage(
    imageId: string
  ) {
    setBoards((prev) =>
      prev.map((board) =>
        board.id === activeBoardId
          ? {
              ...board,
              images:
                board.images.filter(
                  (img) =>
                    img.id !== imageId
                ),
            }
          : board
      )
    );

    setSelectedImage(null);
  }

  const activeBoard =
    boards.find(
      (board) =>
        board.id ===
        activeBoardId
    );

  return (
    <MoodboardContext.Provider
      value={{
        boards,

        activeBoardId,

        activeBoard,

        selectedImage,

        setActiveBoard:
          setActiveBoardId,

        addBoard,

        deleteBoard,

        renameBoard,

        addImage,

        openImage,

        closeImage,

        deleteImage,
      }}
    >
      {children}
    </MoodboardContext.Provider>
  );
}

export function useMoodboard() {
  return useContext(
    MoodboardContext
  );
}