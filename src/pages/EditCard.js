import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    async function loadCard() {
      try {
        const cards = await getCards();
        const foundCard = cards.find((c) => c.id === Number(id));

        if (!foundCard) {
          setError("Card not found");
        } else {
          setCard(foundCard);
        }
      } catch (err) {
        setError("Failed to load card");
      } finally {
        setLoading(false);
      }
    }

    loadCard();
  }, [id]);

  // Handle form submit
  async function handleSubmit(updatedCard) {
  try {
    setBusy(true);
    setError("");
    await updateCard(id, updatedCard);
    navigate("/cards");
  } catch (err) {
    setError("Failed to update card");
  } finally {
    setBusy(false);
  }
}


  if (loading) {
    return <main>Loading...</main>;
  }

  if (error) {
    return <main className="error">{error}</main>;
  }

  return (
    <main className="form-page">
      <h1>Edit Card</h1>

      <CardForm
        initialData={card}
        onSubmit={handleSubmit}
        busy={busy}
      />
    </main>
  );
}
