import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const Tasks = (props) => {
  const handleTaskClick = (id) => {
    props.setActiveTask(id);
    props.setCurrentRoute("Edit");
  };
  return (
    <View style={styles.tasks}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Tasks</Text>
        <ScrollView>
          {props.currentTasks.map((task) => {
            return (
              <TouchableHighlight
                onPress={handleTaskClick.bind(null, task.id)}
                key={task.id}
                style={styles.task}
              >
                <Text style={styles.taskTitle}>{task.title}</Text>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
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
