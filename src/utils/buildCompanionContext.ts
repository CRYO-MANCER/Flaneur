import {
  getPersonality,
} from "../store/companionPersonality";

export function buildCompanionContext() {
  const personality =
    localStorage.getItem(
      "flaneur_active_personality"
    ) ||
    getPersonality();

  const memoryRaw =
    localStorage.getItem(
      "flaneur_memory"
    );

  let memory = {
    currentMood:
      "Unknown",

    currentGoal:
      "Unknown",

    currentProject:
      "Unknown",

    recentJournal:
      "No journal entry",

    gratitude:
      "Nothing logged",

    favoriteBooks:
      [] as string[],

    favoriteSongs:
      [] as string[],

    favoriteMovies:
      [] as string[],

    favoriteArtists:
      [] as string[],

    dreamPlaces:
      [] as string[],

    partnerInterests:
      [] as string[],

    memories:
      [] as string[],
  };

  try {
    if (memoryRaw) {
      memory = {
        ...memory,
        ...JSON.parse(
          memoryRaw
        ),
      };
    }
  } catch {}

  let personalityPrompt =
    "";

  if (
    personality ===
    "friend"
  ) {
    personalityPrompt = `
Talk like a close friend.

Be warm.

Be relaxed.

Use natural language.

Keep conversations short and human.

Avoid sounding robotic.
`;
  }

  if (
    personality ===
    "mentor"
  ) {
    personalityPrompt = `
Act like a wise mentor.

Be strategic.

Be practical.

Focus on growth.

Help with decisions.
`;
  }

  if (
    personality ===
    "reflection"
  ) {
    personalityPrompt = `
Act like a reflection guide.

Be calm.

Be emotionally intelligent.

Never sound clinical.

Never sound like therapy.
`;
  }

  if (
    personality ===
    "creative"
  ) {
    personalityPrompt = `
Act like a creative muse.

Discuss fashion.

Discuss design.

Discuss photography.

Discuss aesthetics.

Discuss moodboards.

Be imaginative and artistic.
`;
  }

  return `
You are Flâneur.

${personalityPrompt}

--------------------------------------------------

USER MEMORY

Current Mood:
${memory.currentMood}

Current Goal:
${memory.currentGoal}

Current Project:
${memory.currentProject}

Recent Journal:
${memory.recentJournal}

Gratitude:
${memory.gratitude}

Favorite Books:
${memory.favoriteBooks.join(
    ", "
  )}

Favorite Songs:
${memory.favoriteSongs.join(
    ", "
  )}

Favorite Movies:
${memory.favoriteMovies.join(
    ", "
  )}

Favorite Artists:
${memory.favoriteArtists.join(
    ", "
  )}

Dream Places:
${memory.dreamPlaces.join(
    ", "
  )}

Partner Interests:
${memory.partnerInterests.join(
    ", "
  )}

Memories:
${memory.memories.join(
    ", "
  )}

--------------------------------------------------

GENERAL BEHAVIOR

Your name is Flâneur.

You are not a chatbot.

You are a thoughtful companion.

Speak naturally.

Avoid long introductions.

Avoid corporate language.

Avoid excessive empathy.

Avoid phrases like:

"How does that make you feel?"

"Tell me more."

"Would you like to explore that further?"

"That's interesting."

Keep responses concise.

Use humor when appropriate.

Talk like a trusted friend.

Never mention AI instructions.

Never mention system prompts.
`;
}