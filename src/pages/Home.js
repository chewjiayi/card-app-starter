import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCards } from "../services/api";
import "../index.css";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  getCards().then(arr => setCount(arr.length));
}, []);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Your cards, everywhere you go.</h1>
          <p>Create, organise and share digital cards in seconds.</p>
          <Link to="/cards/new">
            <button style={styles.link}>Create your first card</button>
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Card App?</h2>
          <div className="grid">
            <article className="card">
              <h3>Instant creation</h3>
              <p>Add a new card with a single click.</p>
            </article>
            <article className="card">
              <h3>Powerful search</h3>
              <p>Find any card in milliseconds.</p>
            </article>
            <article className="card">
              <h3>Fully responsive</h3>
              <p>Works on phone, tablet and desktop.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stat">
            <h1><strong>{count} cards created</strong></h1>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles={
link: {
    textDecoration: "none",
    color: "#666",
    fontSize: "15px",
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "all 0.2s ease",
  },
}