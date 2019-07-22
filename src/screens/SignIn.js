//войти в систему

import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

import SignInForm from "../forms/SignInForm";

export default class SignIn extends Component {
  state = {
    isSubmiting: false,
  }

  _gotoSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

  _onSubmitForm = values => {
    console.log("Submit Form")
    console.log(values)
    this.setState({isSubmiting: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Sign In Screen</Text>
        <View
          style={styles.contentContainer}
        >
          <SignInForm onSubmit={v => this._onSubmitForm(v)} isSubmiting={this.state.isSubmiting}/>
        </View>
        <TouchableHighlight onPress={() => this._gotoSignUp()}>
          <Text style={[styles.link, { marginBottom: 20 }]}>Go to SignUp</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
