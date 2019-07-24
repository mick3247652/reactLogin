//войти в систему

import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

import SignInForm from "../forms/SignInForm";
import { connect } from "react-redux";
import { actionSetToken } from "../redux/actions";

class SignIn extends Component {
  state = {
    isSubmiting: false,
    isError: false,
    err: "",
  };

  _gotoSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

  _getToken = async (email, password) => {
    console.log(`get token with email:${email} password:${password}`);
    try {
      const response = await fetch(
        "http://192.168.1.46:3001/api/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      console.log("данные получены");
      const json = await response.json();
      console.log(json);
      if (json.error) throw json.error;
      await this.props.dispatch(actionSetToken(json.token));
      this.props.navigation.navigate("UserProfile");
    } catch (err) {
      console.log(err);
      this.setState({ isSubmiting: false, isError: true, err });
    }
  };

  _onSubmitForm = values => {
    console.log("Submit Form");
    this.setState({ isSubmiting: true });
    this._getToken(values.email, values.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Sign In Screen</Text>
        <View style={styles.contentContainer}>
          <SignInForm
            onSubmit={v => this._onSubmitForm(v)}
            isSubmiting={this.state.isSubmiting}
          />
          {this.state.isError && (
            <Text style={styles.errorText}>{this.state.err}</Text>
          )}
        </View>
        <TouchableHighlight onPress={() => this._gotoSignUp()}>
          <Text style={[styles.link, { marginBottom: 20 }]}>Go to SignUp</Text>
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

export default connect(mapStateToProps)(SignIn);
