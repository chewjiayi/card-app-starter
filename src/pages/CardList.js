import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    try {
      const data = await getCards();
      setCards(data);
    } catch {
      setError("Failed to load cards");
    }
  }

  async function handleDelete(id) {
    await deleteCard(id);
    loadCards();
  }

  function handleEdit(id) {
    navigate(`/cards/${id}/edit`);
  }

  return (
    <main>
      <h2>All Cards</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {cards.map((card) => (
          <Card
            key={card.card_ID}
            card={card}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </main>
  );
}
