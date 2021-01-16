import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tasks = () => {
  const tasks = [
    {
      id: `${new Date().getTime()}_${Math.random() * 20}`,
      title: `Clean Your Car`,
    },
    {
      id: `${new Date().getTime()}_${Math.random() * 20}`,
      title: `Finish Work on project`,
    },
    {
      id: `${new Date().getTime()}_${Math.random() * 20}`,
      title: `Go to Gym`,
    },
  ];
  const showTask = () => {
    return tasks.map((task) => {
      return (
        <View key={task.id} style={styles.task}>
          <Text style={styles.taskTitle}>{task.title}</Text>
        </View>
      );
    });
  };
  return (
    <View style={styles.tasks}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Tasks</Text>
        {showTask()}
      </View>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  tasks: {
    flex: 1,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 30,
    color: "#646da1",
    fontWeight: "700",
    marginBottom: 20,
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  task: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#1b1b1b",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    elevation: 5,
  },
  taskTitle: {
    fontSize: 18,
    color: "#7c8bc0",
    fontWeight: "700",
  },
});
