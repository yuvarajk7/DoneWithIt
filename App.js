import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Images from "./assets/Images";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
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

    <ListingDetailsScreen />
  );
}
