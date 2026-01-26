const API_URL = process.env.REACT_APP_API_URL||"";
console.log("API_URL:", API_URL);

function authHeader(){
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}


export async function login(credentials) {
  console.log("Sending credentials:", credentials);
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
}

export async function getCards() {
  const res = await fetch(`${API_URL}/allcards`);
  if (!res.ok) {
    throw new Error(`Failed to load cards (${res.status})`);
  }
  return res.json();
}

export async function addCard(card) {
  const res = await fetch(`${API_URL}/addcard`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify({
      card_name: card.card_name,
      card_img: card.card_URL,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to add card");
  }

  return res.json();
}

export async function updateCard(id, card) {
  const res = await fetch(`${API_URL}/editcard/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      card_name: card.card_name,
      card_img: card.card_img,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update car wqtffffffffd");
  }

  return res.json();
}

export async function deleteCard(id) {
  const res = await fetch(`${API_URL}/deletecard/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete card");
  }

  return res.json();
}
