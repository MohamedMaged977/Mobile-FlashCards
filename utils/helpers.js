import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
export const DECK_STORAGE = "FlashCard:decks";
const NOTIFICATION_KEY = "FlashCard:notifications";

const dummyData = {
  Math: {
    title: "Math",
    questions: [
      {
        question: "1+1 = ?",
        answer: "2",
      },
      {
        question: "2*2=?",
        answer: "4",
      },
    ],
  },
  Countries: {
    title: "Countries",
    questions: [
      {
        question: "The captial of Egypt",
        answer: "Cario",
      },
      {
        question: "The captial of France",
        answer: "Paris",
      },
      {
        question: "The captial of KSA",
        answer: "Gedaa",
      },
    ],
  },
};

export const setStorage = () => {
  AsyncStorage.setItem(DECK_STORAGE, JSON.stringify(dummyData));
};
