//профиль пользователя

import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { actionSetToken, actionSetUserProfile } from "../redux/actions";
import {getUserProfile} from '../api/user'

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
      const json = await getUserProfile(this.props.token)
      await this.props.dispatch(actionSetUserProfile(json));
    } catch (err) {
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
