import {
  useState,
} from "react";

import QuoteCard from "../../components/inspiration/QuoteCard";
import MusicCard from "../../components/inspiration/MusicCard";
import IdeaCard from "../../components/inspiration/IdeaCard";
import BookCard from "../../components/inspiration/BookCard";
import MovieCard from "../../components/inspiration/MovieCard";

import {
  useInspirations,
} from "../../store/inspirationStore";

export default function InspirationStudio() {
  const {
    quotes,
    songs,
    ideas,
    books,
    movies,

    addQuote,
    deleteQuote,

    addSong,
    deleteSong,

    addIdea,
    deleteIdea,

    addBook,
    deleteBook,

    addMovie,
    deleteMovie,
  } = useInspirations();

  const [quote, setQuote] =
    useState("");

  const [idea, setIdea] =
    useState("");

  const [songTitle, setSongTitle] =
    useState("");

  const [songArtist, setSongArtist] =
    useState("");

  const [bookTitle, setBookTitle] =
    useState("");

  const [bookAuthor, setBookAuthor] =
    useState("");

  const [movieTitle, setMovieTitle] =
    useState("");

  const [movieYear, setMovieYear] =
    useState("");

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <h1>
        Inspiration Studio
      </h1>

      {/* CREATION HUB */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
          marginTop: "32px",
          marginBottom: "50px",
        }}
      >
        {/* QUOTE */}

        <div>
          <h3>💬 Quote</h3>

          <input
            value={quote}
            onChange={(e) =>
              setQuote(
                e.target.value
              )
            }
            placeholder="New quote..."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
            }}
          />

          <button
            style={{
              marginTop: "10px",
            }}
            onClick={() => {
              addQuote(
                quote
              );
              setQuote("");
            }}
          >
            Add Quote
          </button>
        </div>

        {/* IDEA */}

        <div>
          <h3>💡 Idea</h3>

          <input
            value={idea}
            onChange={(e) =>
              setIdea(
                e.target.value
              )
            }
            placeholder="New idea..."
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
            }}
          />

          <button
            style={{
              marginTop: "10px",
            }}
            onClick={() => {
              addIdea(
                idea
              );
              setIdea("");
            }}
          >
            Add Idea
          </button>
        </div>

        {/* SONG */}

        <div>
          <h3>🎵 Song</h3>

          <input
            value={songTitle}
            onChange={(e) =>
              setSongTitle(
                e.target.value
              )
            }
            placeholder="Song title"
            style={{
              width: "100%",
              padding: "12px",
            }}
          />

          <input
            value={songArtist}
            onChange={(e) =>
              setSongArtist(
                e.target.value
              )
            }
            placeholder="Artist"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
            }}
          />

          <button
            style={{
              marginTop: "10px",
            }}
            onClick={() => {
              addSong(
                songTitle,
                songArtist
              );

              setSongTitle("");
              setSongArtist("");
            }}
          >
            Add Song
          </button>
        </div>

        {/* BOOK */}

        <div>
          <h3>📚 Book</h3>

          <input
            value={bookTitle}
            onChange={(e) =>
              setBookTitle(
                e.target.value
              )
            }
            placeholder="Book title"
            style={{
              width: "100%",
              padding: "12px",
            }}
          />

          <input
            value={bookAuthor}
            onChange={(e) =>
              setBookAuthor(
                e.target.value
              )
            }
            placeholder="Author"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
            }}
          />

          <button
            style={{
              marginTop: "10px",
            }}
            onClick={() => {
              addBook(
                bookTitle,
                bookAuthor
              );

              setBookTitle("");
              setBookAuthor("");
            }}
          >
            Add Book
          </button>
        </div>

        {/* MOVIE */}

        <div>
          <h3>🎬 Movie</h3>

          <input
            value={movieTitle}
            onChange={(e) =>
              setMovieTitle(
                e.target.value
              )
            }
            placeholder="Movie title"
            style={{
              width: "100%",
              padding: "12px",
            }}
          />

          <input
            value={movieYear}
            onChange={(e) =>
              setMovieYear(
                e.target.value
              )
            }
            placeholder="Year"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
            }}
          />

          <button
            style={{
              marginTop: "10px",
            }}
            onClick={() => {
              addMovie(
                movieTitle,
                movieYear
              );

              setMovieTitle("");
              setMovieYear("");
            }}
          >
            Add Movie
          </button>
        </div>
      </div>

      {/* QUOTES */}

      <h2>Quotes</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(350px,1fr))",
          gap: "24px",
          marginTop: "20px",
        }}
      >
        {quotes.map(
          (
            item,
            index
          ) => (
            <div key={index}>
              <button
                onClick={() =>
                  deleteQuote(
                    index
                  )
                }
              >
                Delete
              </button>

              <QuoteCard
                quote={item}
              />
            </div>
          )
        )}
      </div>

      {/* IDEAS */}

      <h2
        style={{
          marginTop: "50px",
        }}
      >
        Ideas
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "24px",
          marginTop: "20px",
        }}
      >
        {ideas.map(
          (
            item,
            index
          ) => (
            <div key={index}>
              <button
                onClick={() =>
                  deleteIdea(
                    index
                  )
                }
              >
                Delete
              </button>

              <IdeaCard
                idea={item}
              />
            </div>
          )
        )}
      </div>

      {/* MUSIC */}

      <h2
        style={{
          marginTop: "50px",
        }}
      >
        Music Inspiration
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "24px",
          marginTop: "20px",
        }}
      >
        {songs.map(
          (
            song,
            index
          ) => (
            <div key={index}>
              <button
                onClick={() =>
                  deleteSong(
                    index
                  )
                }
              >
                Delete
              </button>

              <MusicCard
                title={
                  song.title
                }
                artist={
                  song.artist
                }
              />
            </div>
          )
        )}
      </div>

      {/* BOOKS */}

      <h2
        style={{
          marginTop: "50px",
        }}
      >
        Books
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "24px",
          marginTop: "20px",
        }}
      >
        {books.map(
          (
            book,
            index
          ) => (
            <div key={index}>
              <button
                onClick={() =>
                  deleteBook(
                    index
                  )
                }
              >
                Delete
              </button>

              <BookCard
                title={
                  book.title
                }
                author={
                  book.author
                }
              />
            </div>
          )
        )}
      </div>

      {/* MOVIES */}

      <h2
        style={{
          marginTop: "50px",
        }}
      >
        Movies
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "24px",
          marginTop: "20px",
          marginBottom: "50px",
        }}
      >
        {movies.map(
          (
            movie,
            index
          ) => (
            <div key={index}>
              <button
                onClick={() =>
                  deleteMovie(
                    index
                  )
                }
              >
                Delete
              </button>

              <MovieCard
                title={
                  movie.title
                }
                year={
                  movie.year
                }
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}