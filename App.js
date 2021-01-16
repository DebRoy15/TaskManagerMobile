import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Create from "./src/pages/Create";
import Home from "./src/pages/Home";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState("Create");

  const showPages = () => {
    switch (currentRoute) {
      case "Home":
        return <Home />;
        break;
      case "Create":
        return <Create />;
        break;
      default:
        break;
    }
  };

  return <View style={styles.container}>{showPages()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
