import { BASE_URL } from "../App";
import { TDeck } from "./getDecks";

export default async function getDeck(deckId: string): Promise<TDeck> {
  const response = await fetch(`${BASE_URL}/decks/${deckId}`);
  return response.json();
}
