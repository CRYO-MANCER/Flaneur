import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { askGemini } from "../services/gemini";

import { buildCompanionContext } from "../utils/buildCompanionContext";

import {
  detectPersonality,
} from "./companionPersonality";

import {
  extractMemory,
} from "../utils/extractMemory";

import {
  CompanionMemory,
} from "./companionMemoryStore";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

interface CompanionContextType {
  messages: Message[];

  sendMessage: (
    text: string
  ) => Promise<void>;

  clearChat: () => void;

  isTyping: boolean;
}

const CompanionContext =
  createContext(
    {} as CompanionContextType
  );

const fallbackResponses = [
  "I'm here with you.",
  "Tell me more.",
  "That's interesting.",
  "How does that make you feel?",
  "Let's explore that together.",
];

export function CompanionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [
    messages,
    setMessages,
  ] = useState<Message[]>(() => {
    const saved =
      localStorage.getItem(
        "flaneur_companion_chat"
      );

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      {
        id: crypto.randomUUID(),

        role: "assistant",

        content:
          "Hi. I'm Flâneur. I can chat about life, productivity, coding, books, music, movies, wellness and much more. What's on your mind today?",

        createdAt:
          new Date().toISOString(),
      },
    ];
  });

  const [
    isTyping,
    setIsTyping,
  ] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_companion_chat",
      JSON.stringify(messages)
    );
  }, [messages]);

  async function sendMessage(
    text: string
  ) {
    if (!text.trim()) return;

    /*
    -------------------
    AUTO PERSONALITY
    -------------------
    */

    const autoPersonality =
      detectPersonality(
        text
      );

    localStorage.setItem(
      "flaneur_active_personality",
      autoPersonality
    );

    /*
    -------------------
    MEMORY EXTRACTION
    -------------------
    */

    const memory: Partial<CompanionMemory> =
      JSON.parse(
        localStorage.getItem(
          "flaneur_memory"
        ) || "{}"
      );

    const memoryUpdate =
      extractMemory(
        text,
        {
          favoriteMovies:
            [],
          favoriteArtists:
            [],
          dreamPlaces:
            [],
          partnerInterests:
            [],
          memories: [],
          favoriteBooks:
            [],
          favoriteSongs:
            [],
          currentMood:
            "",
          currentGoal:
            "",
          currentProject:
            "",
          recentJournal:
            "",
          gratitude:
            "",
          ...memory,
        }
      );

    localStorage.setItem(
      "flaneur_memory",
      JSON.stringify({
        ...memory,
        ...memoryUpdate,
      })
    );

    /*
    -------------------
    USER MESSAGE
    -------------------
    */

    const userMessage: Message =
      {
        id: crypto.randomUUID(),

        role: "user",

        content: text,

        createdAt:
          new Date().toISOString(),
      };

    const updatedMessages =
      [
        ...messages,
        userMessage,
      ];

    setMessages(
      updatedMessages
    );

    setIsTyping(true);

    try {
      const conversation =
        updatedMessages
          .map(
            (
              message
            ) =>
              `${message.role}: ${message.content}`
          )
          .join("\n");

      const prompt = `
${buildCompanionContext()}

Conversation:

${conversation}

Assistant:
`;

      const response =
        await askGemini(
          prompt
        );

      const streamingId =
        crypto.randomUUID();

      setMessages(
        (prev) => [
          ...prev,
          {
            id: streamingId,

            role:
              "assistant",

            content: "",

            createdAt:
              new Date().toISOString(),
          },
        ]
      );

      let currentText = "";

      for (
        let i = 0;
        i <
        (
          response ||
          ""
        ).length;
        i++
      ) {
        currentText +=
          response[i];

        setMessages(
          (
            prev
          ) =>
            prev.map(
              (
                message
              ) =>
                message.id ===
                streamingId
                  ? {
                      ...message,

                      content:
                        currentText,
                    }
                  : message
            )
        );

        await new Promise(
          (
            resolve
          ) =>
            setTimeout(
              resolve,
              10
            )
        );
      }
    } catch (
      error
    ) {
      console.error(
        error
      );

      const fallback =
        fallbackResponses[
          Math.floor(
            Math.random() *
              fallbackResponses.length
          )
        ];

      setMessages(
        (prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),

            role:
              "assistant",

            content:
              fallback,

            createdAt:
              new Date().toISOString(),
          },
        ]
      );
    }

    setIsTyping(false);
  }

  function clearChat() {
    setMessages([
      {
        id: crypto.randomUUID(),

        role: "assistant",

        content:
          "Hi. I'm Flâneur. What would you like to talk about today?",

        createdAt:
          new Date().toISOString(),
      },
    ]);
  }

  return (
    <CompanionContext.Provider
      value={{
        messages,
        sendMessage,
        clearChat,
        isTyping,
      }}
    >
      {children}
    </CompanionContext.Provider>
  );
}

export function useCompanion() {
  return useContext(
    CompanionContext
  );
}
