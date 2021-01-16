import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StatusCard = () => {
  return (
    <View style={styles.statusCard}>
      <View style={styles.column}>
        <View style={styles.cardComplete}>
          <View>
            <Text style={styles.title}>Completed</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>100</Text>
          </View>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.cardInprogress}>
          <View>
            <Text style={styles.title}>Completed</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>100</Text>
          </View>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.cardDeleted}>
          <View>
            <Text style={styles.title}>Completed</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>100</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({
  statusCard: {
    flexDirection: "row",
    marginBottom: 20,
  },
  column: {
    flex: 1,
    padding: 5,
    height: 120,
    // backgroundColor: "white",
  },
  cardComplete: {
    flex: 1,
    backgroundColor: "#7418ff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#7418ff",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    elevation: 4,
  },
  cardInprogress: {
    flex: 1,
    backgroundColor: "#6730bf",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#6730bf",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    elevation: 4,
  },
  cardDeleted: {
    flex: 1,
    backgroundColor: "#452080",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#452080",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    elevation: 4,
  },
  title: {
    color: "white",
    alignSelf: "center",
    fontWeight: "700",
  },
  numberContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    color: "white",
    fontSize: 40,
    fontWeight: "100",
  },
});
