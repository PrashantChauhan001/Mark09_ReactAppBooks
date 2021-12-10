import { useState } from "react";
import "./styles.css";

const App = () => {
  const [category, setCategory] = useState("scienceFriction");

  const books = {
    scienceFriction: [
      { name: "The Martian", rating: "4.8 / 5" },
      { name: "Nineteen Eighty-Four", rating: "4.5 / 5" },
      { name: "The Three-Body Problem", rating: "4.1 / 5" }
    ],
    romance: [
      { name: "Red, White and Royal Blue", rating: "4.3 / 5" },
      { name: "The Notebook", rating: "4.0 / 5" },
      { name: "All i ever Want is YOU", rating: "4.5 / 5" }
    ],
    mythology: [
      { name: "Ramayana", rating: "4.9 / 5" },
      { name: "Mahabharata", rating: "4.8 / 5" },
      { name: "Meluha", rating: "4.9 / 5" }
    ]
  };

  return (
    <div className="App">
      <header>
        <h1>
          <span role="img" aria-label="books">
            📚
          </span>
          goodbooks
        </h1>
        <p>Know which books i love most...Select any category to start</p>
      </header>
      <section>
        {Object.keys(books).map((cat) => (
          <button
            onClick={() => setCategory(cat)}
            style={{
              cursor: "pointer",
              background: "#A1B1E1",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {cat}
          </button>
        ))}
      </section>
      <hr />
      <section>
        {books[category].map((book) => (
          <div
            style={{
              border: "2px solid black",
              margin: "10px 0",
              padding: "5px 20px",
              borderRadius: "10px"
            }}
          >
            <h2
              style={{
                margin: 0,
                padding: 0,
                color: "#0039a6"
              }}
            >
              {book.name}
            </h2>
            <p
              style={{
                margin: 0,
                padding: 0,
                color: "#318CE7"
              }}
            >
              {book.rating}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
