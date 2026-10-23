export interface CompanionContext {
  currentMood: string;
  mostUsedMood: string;

  tasksCompleted: number;
  totalTasks: number;

  habitsCompleted: number;
  totalHabits: number;

  recentJournal: string;
  recentReflection: string;
  recentGratitude: string;

  favoriteSongs: string[];
  recentSongs: string[];

  books: string[];
  movies: string[];
  ideas: string[];
}

export function buildCompanionContext(): CompanionContext {
  const mood =
    localStorage.getItem(
      "flaneur_mood"
    ) || "🙂";

  const moodHistory =
    JSON.parse(
      localStorage.getItem(
        "flaneur_mood_history"
      ) || "[]"
    );

  const tasks =
    JSON.parse(
      localStorage.getItem(
        "flaneur_tasks"
      ) || "[]"
    );

  const habits =
    JSON.parse(
      localStorage.getItem(
        "flaneur_habits"
      ) || "[]"
    );

  const journalEntries =
    JSON.parse(
      localStorage.getItem(
        "flaneur_journal_entries"
      ) || "[]"
    );

  const reflections =
    JSON.parse(
      localStorage.getItem(
        "flaneur_reflections"
      ) || "[]"
    );

  const gratitudes =
    JSON.parse(
      localStorage.getItem(
        "flaneur_gratitudes"
      ) || "[]"
    );

  const favorites =
    JSON.parse(
      localStorage.getItem(
        "flaneur_favorites"
      ) || "[]"
    );

  const recentMusic =
    JSON.parse(
      localStorage.getItem(
        "flaneur_recent_music"
      ) || "[]"
    );

  const books =
    JSON.parse(
      localStorage.getItem(
        "flaneur_books"
      ) || "[]"
    );

  const movies =
    JSON.parse(
      localStorage.getItem(
        "flaneur_movies"
      ) || "[]"
    );

  const ideas =
    JSON.parse(
      localStorage.getItem(
        "flaneur_ideas"
      ) || "[]"
    );

  const moodCounts:
    Record<string, number> = {};

  moodHistory.forEach(
    (entry: any) => {
      moodCounts[entry.mood] =
        (moodCounts[entry.mood] ||
          0) + 1;
    }
  );

  const mostUsedMood =
    Object.entries(
      moodCounts
    ).sort(
      (
        a,
        b
      ) => b[1] - a[1]
    )[0]?.[0] || mood;

  return {
    currentMood: mood,

    mostUsedMood,

    tasksCompleted:
      tasks.filter(
        (task: any) =>
          task.completed
      ).length,

    totalTasks:
      tasks.length,

    habitsCompleted:
      habits.filter(
        (habit: any) =>
          habit.completed
      ).length,

    totalHabits:
      habits.length,

    recentJournal:
      journalEntries[0]?.text ||
      "No journal entries yet.",

    recentReflection:
      reflections[0]?.answer ||
      "No reflections yet.",

    recentGratitude:
      gratitudes[0]?.text ||
      "No gratitude entries yet.",

    favoriteSongs:
      favorites.map(
        (song: any) =>
          song.title
      ),

    recentSongs:
      recentMusic.map(
        (song: any) =>
          song.title
      ),

    books:
      books.map(
        (book: any) =>
          book.title
      ),

    movies:
      movies.map(
        (movie: any) =>
          movie.title
      ),

    ideas,
  };
}