export default function Card({ card, onDelete, onEdit }) {
  return (
    <div style={styles.card}>
      <img src={card.card_URL} alt={card.card_name} style={styles.image} />

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
    width: 260,
    border: "1px solid #e5e5e5",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  image: {
    width: "100%",
    height: 160,
    objectFit: "cover",
    borderRadius: 6,
  },
  actions: {
    display: "flex",
    gap: 8,
    marginTop: 6,
  },
};
