import { BASE_URL } from "../App";

export default async function deleteDeck(deckID: string) {
  await fetch(`${BASE_URL}/decks/${deckID}`, {
    method: "DELETE",
  });
}
