import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    const data = await getCards();
    setCards(data);
  }

  async function handleDelete(id) {
    await deleteCard(id);
    loadCards();
  }

  function handleEdit(id) {
    navigate(`/cards/${id}/edit`);
  }

  return (
    <main style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Discover Your Cards</h1>
        <p style={styles.heroText}>
          A curated collection of beautifully crafted cards.
        </p>
      </section>

      {/* Cards Section */}
      <section style={styles.cardsSection}>
        {cards.map((card, index) => (
          <Card
            key={card.card_ID}
            card={card}
            index={index}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </section>
    </main>
  );
}
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #f6f3ff, #eef7ff)",
    padding: "40px",
  },
  hero: {
    maxWidth: "700px",
    marginBottom: "48px",
  },
  heroTitle: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "12px",
  },
  heroText: {
    fontSize: "16px",
    color: "#666",
  },
  cardsSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "28px",
  },
};
