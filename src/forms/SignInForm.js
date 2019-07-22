import React, { Component } from "react";
import { View, TextInput, ActivityIndicator, Text } from "react-native";
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
        onSubmit={(values, actions) => {}}
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
            />
            <Text style={styles.errorText}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>
            <Button
              icon={{
                name: "arrow-right",
                size: 15,
                color: "blue",
              }}
              title="Submit"
              type="outline"
              onPress={formikProps.handleSubmit}
            />
            <Button
              style={{ marginTop: 20 }}
              title="Submit"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    );
  }
}
