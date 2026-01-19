import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  /* TODO: Complete the CardList page
    - display a list of cards (use the Card component to display each card)
    - delete button calling handleDelete with the card object
    - handle loading, busy, and error states
    - style as a grid UI */
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    async function load(){
      setLoading(true);
      try {
        const data = await getCards();
        setCards(data);
      } catch (err) {
        console.error("Failed to load Cards:", err);
        setError('Failed to load cards. Please try again later.');
      }finally {
        setLoading(false);
      }
    }
    useEffect(() => {

    },[])

  return <main></main>;
}
