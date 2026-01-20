import { useState, useEffect } from "react";

export default function CardForm({ initialData, onSubmit, disabled }) {
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
        disabled={disabled}
        style={styles.input}
      />

      <label style={styles.label}>Card Image URL</label>
      <input
        type="text"
        value={cardURL}
        onChange={(e) => setCardURL(e.target.value)}
        required
        disabled={disabled}
        style={styles.input}
      />

      <button disabled={disabled} style={styles.button}>
        {disabled ? "Saving..." : "Save Card"}
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  label: {
    fontWeight: "600",
  },
  input: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#222",
    color: "#fff",
    cursor: "pointer",
  },
};
