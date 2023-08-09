import { BASE_URL } from "../App";
import { TDeck } from "./getDecks";

export default async function deleteCard(
  deckID: string,
  index: number
): Promise<TDeck> {
  const response = await fetch(`${BASE_URL}/decks/${deckID}/cards/${index}`, {
    method: "DELETE",
  });
  return response.json();
}
