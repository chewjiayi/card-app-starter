export default function Card({ card, onDelete, onEdit }) {
  return (
    <div style={styles.card}>
      <img
        src={card.card_URL}
        alt={card.card_name}
        style={styles.image}
      />

      <h3>{card.card_name}</h3>

      <div style={styles.actions}>
        <button onClick={() => onEdit(card.card_ID)}>Edit</button>
        <button onClick={() => onDelete(card.card_ID)}>Delete</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #eee",
    padding: "16px",
    borderRadius: "10px",
    width: "220px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "6px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
};
