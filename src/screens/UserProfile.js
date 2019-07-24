//профиль пользователя

import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { actionSetToken, actionSetUserProfile } from "../redux/actions";

class UserProfile extends Component {
  state = {
    isError: true,
    err: "",
  };

  _logOut() {
    this.props.dispatch(actionSetToken(""));
    this.props.navigation.navigate("Splash");
  }

  _getUserProfile = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.46:3001/api/getUserProfile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": this.props.token,
          },
        }
      );
      console.log("данные получены (UserProfile)");
      const json = await response.json();
      if (json.error) throw json.error;
      await this.props.dispatch(actionSetUserProfile(json));
    } catch (err) {
      console.log(err);
      this.setState({ isError: true, err });
    }
  };

  componentWillMount() {
    this._getUserProfile();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>User Profile Screen</Text>
        <Text>{this.props.email}</Text>
        <Text>{this.props.firstName}</Text>
        <Text>{this.props.lastName}</Text>
        <Text>{this.props.created}</Text>
         <TouchableHighlight onPress={() => this._logOut()}>
          <Text style={styles.link}>Log out</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    email: state.userProfile.email,
    firstName: state.userProfile.firstName,
    lastName: state.userProfile.lastName,
    created: state.userProfile.created,
  };
};

export default connect(mapStateToProps)(UserProfile);
