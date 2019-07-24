//войти в систему

import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";

import SignInForm from "../forms/SignInForm";
import { connect } from "react-redux";
import { actionSetToken } from "../redux/actions";
import {authenticate} from "../api/user"

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
    try {
      const token = await authenticate(email, password)
      await this.props.dispatch(actionSetToken(token));
      this.props.navigation.navigate("UserProfile");
    } catch (err) {
      this.setState({ isSubmiting: false, isError: true, err });
    }
  };

  _onSubmitForm = values => {
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
