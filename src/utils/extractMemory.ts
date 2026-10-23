import {
  CompanionMemory,
} from "../store/companionMemoryStore";

export function extractMemory(
  text: string,
  memory: CompanionMemory
): Partial<CompanionMemory> {
  const lower =
    text.toLowerCase();

  const update:
    Partial<CompanionMemory> =
    {};

  /*
  ----------------------------------
  CURRENT GOAL
  ----------------------------------
  */

  if (
    lower.includes(
      "my goal is"
    )
  ) {
    update.currentGoal =
      text
        .split(
          /my goal is/i
        )[1]
        ?.trim();
  }

  /*
  ----------------------------------
  CURRENT PROJECT
  ----------------------------------
  */

  if (
    lower.includes(
      "i am working on"
    )
  ) {
    update.currentProject =
      text
        .split(
          /i am working on/i
        )[1]
        ?.trim();
  }

  /*
  ----------------------------------
  FAVORITE MOVIES
  ----------------------------------
  */

  if (
    lower.includes(
      "favorite movie"
    )
  ) {
    const movie =
      text
        .split(
          /favorite movie is/i
        )[1]
        ?.trim();

    if (movie) {
      update.favoriteMovies =
        [
          ...new Set([
            ...memory.favoriteMovies,
            movie,
          ]),
        ];
    }
  }

  /*
  ----------------------------------
  FAVORITE ARTISTS
  ----------------------------------
  */

  if (
    lower.includes(
      "favorite artist"
    )
  ) {
    const artist =
      text
        .split(
          /favorite artist is/i
        )[1]
        ?.trim();

    if (artist) {
      update.favoriteArtists =
        [
          ...new Set([
            ...memory.favoriteArtists,
            artist,
          ]),
        ];
    }
  }

  /*
  ----------------------------------
  DREAM PLACES
  ----------------------------------
  */

  if (
    lower.includes(
      "i want to move to"
    )
  ) {
    const place =
      text
        .split(
          /i want to move to/i
        )[1]
        ?.trim();

    if (place) {
      update.dreamPlaces =
        [
          ...new Set([
            ...memory.dreamPlaces,
            place,
          ]),
        ];
    }
  }

  /*
  ----------------------------------
  PARTNER INTERESTS
  ----------------------------------
  */

  if (
    lower.includes(
      "my girlfriend loves"
    )
  ) {
    const interest =
      text
        .split(
          /my girlfriend loves/i
        )[1]
        ?.trim();

    if (interest) {
      update.partnerInterests =
        [
          ...new Set([
            ...memory.partnerInterests,
            interest,
          ]),
        ];
    }
  }

  /*
  ----------------------------------
  MEMORIES
  ----------------------------------
  */

  if (
    lower.includes(
      "i remember"
    )
  ) {
    update.memories =
      [
        ...memory.memories,
        text,
      ];
  }

  return update;
}