import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import StatusCard from "../components/StatusCard";

const Home = () => {
  return (
    <View style={styles.home}>
      <StatusBar backgroundColor="#221040" barStyle="light-content" />
      <View style={styles.top}>
        <View style={styles.container}>
          <Header />
          <StatusCard />
        </View>
      </View>
      <TouchableOpacity style={styles.addTaskBtn}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#f7fafd",
  },
  top: {
    backgroundColor: "#221040",
  },
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 36,
  },
  text: {
    color: "#fff",
  },
  addTaskBtn: {
    backgroundColor: "#fff740",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
    right: 20,
    shadowColor: "#1b1b1b",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    elevation: 3,
  },
});