import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerProfileContainer}>
        <Image
          style={styles.headerProfileImage}
          source={{ uri: "https://randomuser.me/api/portraits/men/97.jpg" }}
        />
      </View>
      <View style={styles.welcomeMessage}>
        <Text style={styles.greetings}>Hi Jon Doe</Text>
        <Text style={styles.submessage}>Last time you completed four task</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "red",
    width: "100%",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerProfileContainer: {
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
  },
  headerProfileImage: {
    height: 60,
    width: 60,
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 20,
  },
  greetings: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  submessage: {
    color: "#959cac",
    fontSize: 14,
    fontWeight: "300",
  },
});
