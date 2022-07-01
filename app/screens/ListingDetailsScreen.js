import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Images from "../../assets/Images";
import colors from "../config/colors";

import ListItem from "../components/ListItem";
import AppText from "../components/AppText";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={Images.jacket} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={Images.mosh}
            title="Yuvaraj Kesavan"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
