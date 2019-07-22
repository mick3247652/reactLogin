//регистрация

import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

import SignUpForm from "../forms/SignUpForm";

export default class SignUp extends Component {
  _gotoSignIn = () => {
    this.props.navigation.navigate("SignIn");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>SignUp Screen</Text>

        <SignUpForm />

        <TouchableHighlight onPress={() => this._gotoSignIn()}>
          <Text style={styles.link}>Go to SignIn</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
