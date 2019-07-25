import React, { Component } from "react";
import {
  View,
  TextInput,
  ActivityIndicator,
  Text,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import styles from "./styles";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label("Email")
    .email()
    .required(),
  password: yup
    .string()
    .label("Password")
    .required(),
});

export default class SignInForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          Keyboard.dismiss();
          this.props.onSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        {formikProps => (
          <View style={styles.container}>
            <Text style={{ marginBottom: 3 }}>Email</Text>
            <TextInput
              placeholder="name@example.com"
              style={styles.textInput}
              onChangeText={formikProps.handleChange("email")}
              onBlur={formikProps.handleBlur("email")}
              keyboardType="email-address"
              autoCapitalize = 'none'
            />
            <Text style={styles.errorText}>
              {formikProps.touched.email && formikProps.errors.email}
            </Text>

            <Text style={{ marginBottom: 3 }}>Password</Text>
            <TextInput
              placeholder="password"
              style={styles.textInput}
              onChangeText={formikProps.handleChange("password")}
              onBlur={formikProps.handleBlur("password")}
              secureTextEntry
              autoCapitalize = 'none'
            />
            <Text style={styles.errorText}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>

            {this.props.isSubmiting ? (
              <View style={styles.indicatorContainer}>
                <ActivityIndicator />
              </View>
            ) : (
              <Button
                containerStyle={{
                  width: "100%",
                  paddingHorizontal: 20,
                  marginTop: 15,
                }}
                title="Sign In"
                type="outline"
                onPress={formikProps.handleSubmit}
              />
            )}
          </View>
        )}
      </Formik>
    );
  }
}
