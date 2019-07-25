//экран запуска

import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import SplashScreen from 'react-native-splash-screen';

import {api_checkToken, checkToken} from '../api/user'

class Splash extends Component {
  _navigateToSignIn = () => {
      console.log("navigate to SignIn")
    this.props.navigation.navigate("SignIn")
  };

  _navigateToUserProfile = () => {
      console.log("navigate to UserProfile")
    this.props.navigation.navigate("UserProfile")
  };

  _checkToken = async () => {
    console.log(`splash screen token: ${this.props.token}`)
    if (!this.props.token) return this._navigateToSignIn();
    try {
      checkToken(this.props.token)
      console.log("token is valid");
      this._navigateToUserProfile()
    } catch (err) {
      console.log(err);
    }
  };

  _gotoNext = () =>{
    this._checkToken()
  };

  componentWillMount(){
    SplashScreen.hide()
    this._gotoNext()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Splash Screen</Text>
        <TouchableHighlight onPress={() => this._gotoNext()}>
          <Text style={styles.link}>Go to Next</Text>
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

export default connect(mapStateToProps)(Splash);
