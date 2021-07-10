import AsyncStorage from "@react-native-async-storage/async-storage";
import { DECK_STORAGE } from "./helpers";

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE);
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE).then((decks) =>
    JSON.parse(decks[id])
  );
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE,
    JSON.stringify({
      [title]: {
        title,
        questions: [],
      },
    })
  );
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECK_STORAGE).then((results) => {
    const decks = JSON.parse(results);
    const newDeck = {
      ...decks,
      [title]: {
        title: title,
        questions: [...decks[title].questions, card],
      },
    };
    AsyncStorage.mergeItem(DECK_STORAGE, JSON.stringify(newDeck));
  });
}
