import React from 'react'
import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "black",
        width: '100%',
        borderRadius: 3,
      },
    container: {
        alignItems: "flex-start",
        width: '100%',
        paddingHorizontal: 5,
    },
    submitButton: {
        marginTop: 5,
        width: '100%',
    },
    errorText: {
        fontSize: 12,
        color: 'red',
    }
})