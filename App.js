import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text key pressed");
  console.log(require("./assets/icon.png"));
  return (
    <SafeAreaView style={[styles.container, containerBgColor]}>
      <Button
        title="Click Me"
        style={styles.topButton}
        onPress={() => alert("Click Me")}
      />
      <Text onPress={() => handlePress()}>Hello React World Yuvaraj.</Text>
      {/* <Image style={styles.tinyLogo} source={require("./assets/icon.png")} /> */}
      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>

      <Button
        title="Click Me"
        color="dodgerblue"
        onPress={() =>
          Alert.alert("MyTitle", "My Message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />

      <Button
        title="Prompt Me"
        color="dodgerblue"
        onPress={() =>
          Alert.prompt("My Title", "My Message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const containerBgColor = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tinyLogo: {
    width: 200,
    height: 300,
  },
  topButton: {
    backgroundColor: "green",
  },
});
