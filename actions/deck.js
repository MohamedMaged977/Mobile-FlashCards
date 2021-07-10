import { getDecks, saveDeckTitle } from "../utils/api";
export const GET_DECKS = "GET_DECKS";
export const CREATE_DECK = "CREATE_DECK";
export function receiveDecks(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}

export function createDeck(title) {
  return {
    type: CREATE_DECK,
    title,
  };
}

export const handleReceiveDecks = () => (dispatch) =>
  getDecks().then((data) => {
    dispatch(receiveDecks(data));
  });

export const handleCreateDeck = (title) => (dispatch) =>
  saveDeckTitle(title).then(() => {
    dispatch(createDeck(title));
  });
