//регистрация

import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

import SignUpForm from "../forms/SignUpForm";
import { connect } from "react-redux";

class SignUp extends Component {
  state = {
    isSubmiting: false,
    isError: false,
    err: "",
  };

  _gotoSignIn = () => {
    this.props.navigation.navigate("SignIn");
  };

  _registerUser = async (email, password) => {
    console.log(`register user email: ${email} password: ${password}`)

  };

  _onSubmitForm = values => {
    console.log("Submit Form");
    this.setState({ isSubmiting: true });
    this._registerUser(values.email, values.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>SignUp Screen</Text>
        <View style={styles.contentContainer}>
          <SignUpForm
            onSubmit={v => this._onSubmitForm(v)}
            isSubmiting={this.state.isSubmiting}
          />
          {this.state.isError && (
            <Text style={styles.errorText}>{this.state.err}</Text>
          )}
        </View>
        <TouchableHighlight onPress={() => this._gotoSignIn()}>
          <Text style={styles.link}>Go to SignIn</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(SignUp);
