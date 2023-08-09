import { BASE_URL } from "../App";

export default async function createDeck(title: string) {
  const response = await fetch(`${BASE_URL}/decks`, {
    method: "POST",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
