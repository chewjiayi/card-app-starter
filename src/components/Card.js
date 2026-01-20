export default function Card({ card, onDelete, onEdit }) {
  return (
    <div className="card">
      <img src={card.card_pic} alt={card.card_name} />
      <h2>{card.card_name}</h2>
      <p>ID: {card.id}</p>

      <Link to={`/cards/${card.id}/edit`}>Edit</Link>

      <button onClick={() => onDelete(card)} disabled={busy}>
        {busy ? "Deleting..." : "Delete"}
      </button>
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
