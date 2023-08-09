import { BASE_URL } from "../App";

export type TDeck = {
  title: string;
  cards: string[];
  _id: string;
};

export default async function getDecks(): Promise<TDeck[]> {
  const response = await fetch(`${BASE_URL}/decks`);

  return response.json();
}
