import React, { useState } from "react";
import { Switch, View } from "react-native";
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
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState();
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

    //<ListingsScreen />

    // <Screen>
    //   <AppTextInput placeholder="Username" icon="email" />
    //   <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </Screen>

    //<LoginScreen />

    <ListingEditScreen />

    //<MessagesScreen />
  );
}
