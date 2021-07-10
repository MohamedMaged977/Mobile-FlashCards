import React from "react";
import { View, StatusBar } from "react-native";
import DeckList from "./components/DeckList";
import AddDeck from "./components/AddDeck";
import DeckDetail from "./components/DeckDetail";
import DeckQuiz from "./components/DeckQuiz";
import NewCard from "./components/NewCard";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Constants from "expo-constants";
import { setStorage } from "./utils/helpers";

export const blue = "#546a8e";
export const green = "#8cc63f";
export const red = "#c1272d";
export const white = "#fff";

function FlashCardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = createMaterialTopTabNavigator(
  {
    Deck: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "DECKS",
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "NEW DECK ",
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 56,
        backgroundColor: blue,
        shadowColor: "rgba(0,0,0,0.24)",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

const MainNavigator = createStackNavigator({
  DECKS: {
    screen: Tabs,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: "Add Card",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  DeckQuiz: {
    screen: DeckQuiz,
    navigationOptions: {
      title: "DeckQuiz",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
});
const AppNavigator = createAppContainer(MainNavigator);

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
  componentDidMount() {
    console.log("App component mounted");
    //setLocalNotification();
    setStorage();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <FlashCardStatusBar backgroundColor={blue} />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
