//войти в систему

import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import styles from './styles'

export default class SignIn extends Component {

    _gotoSignUp = () => {
        this.props.navigation.navigate("SignUp");
    }

    render(){

        return(
            <View style={styles.container}>
                <Text>SignIn Screen</Text>
                <TouchableHighlight onPress={() => this._gotoSignUp()}>
                    <Text style={styles.link}>Go to SignUp</Text>
                </TouchableHighlight>
            </View>
        )
    }
}