import React, {Component} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import styles from './styles'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label("Email")
    .email()
    .required(),
  password: yup
    .string()
    .label("Password")
    .required()
    .min(2, "Seems a bit short...")
    .max(10, "We prefer insecure system, try a shorter password."),
});

export default class SignUpForm extends Component {

  render() {
    return (
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values));
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={validationSchema}
      >
        {formikProps => (
          <React.Fragment>
            <Text style={{ marginBottom: 3 }}>Email</Text>
            <TextInput
              placeholder="name@example.com"
              style={styles.textInput}
              onChangeText={formikProps.handleChange("email")}
              onBlur={formikProps.handleBlur("email")}
              autoFocus
            />
            <Text style={{ color: "red" }}>
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
            <Text style={{ color: "red" }}>
              {formikProps.touched.password && formikProps.errors.password}
            </Text>

            {formikProps.isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Button title="Submit" onPress={formikProps.handleSubmit} />
            )}
          </React.Fragment>
        )}
      </Formik>
    );
  }
}

