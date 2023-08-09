import { BASE_URL } from "../App";
import { TDeck } from "./getDecks";

export default async function createCard(
  deckId: string,
  text: string
): Promise<TDeck> {
  const response = await fetch(`${BASE_URL}/decks/${deckId}/cards`, {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
