import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Create from "./src/pages/Create";
import Edit from "./src/pages/Edit";
import Home from "./src/pages/Home";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState("Home");
  const [activeTask, setActiveTask] = useState("");
  const [currentTasks, setCurrentTasks] = useState([]);

  const showPages = () => {
    switch (currentRoute) {
      case "Home":
        return (
          <Home
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
            currentTasks={currentTasks}
            setCurrentTasks={setCurrentTasks}
            activeTask={activeTask}
            setActiveTask={setActiveTask}
          />
        );
        break;
      case "Create":
        return (
          <Create
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
            currentTasks={currentTasks}
            setCurrentTasks={setCurrentTasks}
          />
        );
        break;
      case "Edit":
        return (
          <Edit
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
            currentTasks={currentTasks}
            setCurrentTasks={setCurrentTasks}
            activeTask={activeTask}
          />
        );
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
