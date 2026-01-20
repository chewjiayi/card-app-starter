import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await getCards();
      setCards(data);
    } catch (err) {
      setError("Failed to load cards");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(card) {
    if (!window.confirm("Delete this card?")) return;

    setBusy(true);
    try {
      await deleteCard(card.id);
      setCards((prev) => prev.filter((c) => c.id !== card.id));
    } catch (err) {
      setError("Failed to delete card");
    } finally {
      setBusy(false);
    }
  }

  if (loading) return <main>Loading cards...</main>;
  if (error) return <main className="error">{error}</main>;

  return (
    <main>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onDelete={handleDelete}
            busy={busy}
          />
        ))}
      </div>
    </main>
  );
}
