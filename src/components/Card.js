export default function Card({ card, onEdit, onDelete }) {
  return (
    <div style={styles.card}>
      <img src={card.card_URL} alt={card.card_name} style={styles.img} />
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
    border: "1px solid #ddd",
    padding: "16px",
    borderRadius: "8px",
    width: "220px",
  },
  img: {
    width: "100%",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
};
