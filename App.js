import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Images from "./assets/Images";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <AppButton
    //     title="Login"
    //     onPress={() => console.log("Tapped")}
    //   ></AppButton>
    // </View>

    //Card
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card title="Red jacket for sale" subTitle="$100" image={Images.jacket} />
    // </View>

    //<ViewImageScreen />

    //<ListingDetailsScreen />

    //<MessagesScreen />

    // <Screen>
    //   <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    // </Screen>

    // <Screen>
    //   <ListItem
    //     title="MyTitle"
    //     //subTitle="My Subtitle"
    //     ImageComponent={
    //       <Icon
    //         name="email"
    //         size={50}
    //         // backgroundColor="red"
    //         // iconColor="white"
    //       />
    //     }
    //   />
    // </Screen>

    //<AccountScreen />

    <ListingsScreen />
  );
}
