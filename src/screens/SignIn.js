//войти в систему

import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

import SignInForm from "../forms/SignInForm";

export default class SignIn extends Component {
  _gotoSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>SignIn Screen</Text>
        <View
          style={styles.contentContainer}
        >
          <SignInForm/>
        </View>
        <TouchableHighlight onPress={() => this._gotoSignUp()}>
          <Text style={[styles.link, { marginBottom: 20 }]}>Go to SignUp</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
