import React from "react";
import { StatusBar, StyleSheet, View, Text, TextInput } from "react-native";

const Create = () => {
  return (
    <View style={styles.home}>
      <StatusBar backgroundColor="#221040" barStyle="light-content" />
      <View style={styles.top}>
        <View style={styles.container}>
          <View style={styles.menuContainer}>
            <Text style={styles.backBtn}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Create Task</Text>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.textInput} placeholder="Enter Title" />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            placeholder="Enter Description"
          />
          <View style={styles.submitButton}>
            <Text style={styles.submitText}>Save</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Create;

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
  backBtn: {
    color: "white",
    borderColor: "white",
    borderRadius: 5,
    padding: 10,
  },
  menuContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 30,
    color: "#646da1",
    fontWeight: "700",
    marginBottom: 20,
  },
  formContainer: {},
  label: {
    fontWeight: "700",
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "white",
    fontSize: 18,
    padding: 10,
    marginBottom: 10,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    borderRadius: 5,
  },
  textArea: {
    backgroundColor: "white",
    fontSize: 18,
    padding: 10,
    marginBottom: 10,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    borderRadius: 5,
    height: "50%",
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#221040",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  submitText: {
    color: "white",
    fontSize: 18,
  },
});
