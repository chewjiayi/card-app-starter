import { useState, useEffect } from "react";

export default function CardForm({ initialData, onSubmit, busy, submitText = "Save Card" }) {
  const [cardName, setCardName] = useState("");
  const [cardURL, setCardURL] = useState("");

  useEffect(() => {
    if (initialData) {
      setCardName(initialData.card_name || "");
      setCardURL(initialData.card_URL || "");
    }
  }, [initialData]);

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      card_name: cardName,
      card_URL: cardURL,
    });
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>Card Name</label>
      <input
        type="text"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        required
        disabled={busy}
        style={styles.input}
        placeholder="Enter card name"
      />

      <label style={styles.label}>Card Image URL</label>
      <input
        type="text"
        value={cardURL}
        onChange={(e) => setCardURL(e.target.value)}
        required
        disabled={busy}
        style={styles.input}
        placeholder="https://example.com/image.jpg"
      />

      <button disabled={busy} style={styles.button}>
        {busy ? "Saving..." : submitText}
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#444",
  },

  input: {
    padding: "14px 18px",
    borderRadius: "14px",
    border: "1px solid #ddd",
    fontSize: "15px",
    backgroundColor: "#fff",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  },

  button: {
    marginTop: "16px",
    padding: "14px",
    borderRadius: "18px",
    border: "none",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    background: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    color: "#fff",
    boxShadow: "0 10px 25px rgba(161,140,209,0.35)",
  },
};
