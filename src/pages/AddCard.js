import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(card) {
    try {
      setBusy(true);
      setError("");
      await addCard(card);
      navigate("/cards");
    } catch {
      setError("Failed to add card");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main style={styles.container}>
      <h2>Add New Card</h2>
      {error && <p style={styles.error}>{error}</p>}
      <CardForm onSubmit={handleSubmit} disabled={busy} />
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "24px",
    border: "1px solid #eee",
    borderRadius: "10px",
  },
  error: {
    color: "red",
  },
};
