import React from "react";
import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  headerText: {
      fontSize: 20,
  }
}));
