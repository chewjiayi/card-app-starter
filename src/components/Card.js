export default function Card({ card, index, onEdit, onDelete }) {
  return (
    <div style={styles.card}>
      <div style={styles.index}>
        {String(index + 1).padStart(2, "0")}
      </div>

      <img
        src={card.card_URL}
        alt={card.card_name}
        style={styles.image}
      />

      <h3 style={styles.title}>{card.card_name}</h3>

      <div style={styles.actions}>
        <button style={styles.edit} onClick={() => onEdit(card.card_ID)}>
          Edit
        </button>
        <button style={styles.delete} onClick={() => onDelete(card.card_ID)}>
          Delete
        </button>
      </div>
    </div>
  );
}
const styles = {
  card: {
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(12px)",
    borderRadius: "28px",
    padding: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    position: "relative",
    transition: "transform 0.3s ease",
  },
  index: {
    position: "absolute",
    top: "16px",
    right: "20px",
    fontSize: "18px",
    color: "#aaa",
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "20px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "18px",
    marginBottom: "16px",
  },
  actions: {
    display: "flex",
    gap: "12px",
  },
  edit: {
    flex: 1,
    padding: "10px",
    borderRadius: "14px",
    border: "none",
    background: "#e6e9ff",
    cursor: "pointer",
  },
  delete: {
    flex: 1,
    padding: "10px",
    borderRadius: "14px",
    border: "none",
    background: "#ffe6e6",
    cursor: "pointer",
  },
};
