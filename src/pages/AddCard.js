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
    <main style={styles.page}>
      <section style={styles.card}>
        <h2 style={styles.title}>Add New Card</h2>
        <p style={styles.subtitle}>
          Create a new card and add it to your collection.
        </p>

        {error && <p style={styles.error}>{error}</p>}

        <CardForm onSubmit={handleSubmit} disabled={busy} />
      </section>
    </main>
  );
}
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f6f3ff, #eef7ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "60px",
  },
  card: {
    width: "100%",
    maxWidth: "520px",
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(14px)",
    borderRadius: "28px",
    padding: "32px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#666",
    marginBottom: "24px",
  },
  error: {
    background: "#ffeaea",
    color: "#c0392b",
    padding: "10px 14px",
    borderRadius: "12px",
    marginBottom: "16px",
    fontSize: "14px",
  },
};
