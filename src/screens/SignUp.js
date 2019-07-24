//регистрация

import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

import SignUpForm from "../forms/SignUpForm";
import { connect } from "react-redux";
import {register} from "../api/user"
import { actionSetToken } from "../redux/actions";

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
    try {
      const token = await register(email, password)
      await this.props.dispatch(actionSetToken(token));
      this.props.navigation.navigate("UserProfile");
    } catch (err) {
      console.log(err);
      this.setState({ isSubmiting: false, isError: true, err });
    }
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
          <Text style={[styles.link, { marginBottom: 20 }]}>Go to SignIn</Text>
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
