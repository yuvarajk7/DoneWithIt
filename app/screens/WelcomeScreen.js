import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import Images from "../../assets/Images";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground source={Images.backgroundImg} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={Images.logo} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          style={styles.loginButton}
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          color="secondary"
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
