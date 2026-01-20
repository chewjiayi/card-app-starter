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
