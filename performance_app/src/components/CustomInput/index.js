import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

function CustomInput (props) {

    return (
        <View style = {styles.container}>
            <TextInput
                value = {props.value}
                onChangeText = {props.setValue}
                placeholder = {props.placeholder}
                style = {styles.input}
                secureTextEntry = {props.secureTextEntry}
            />
        </View>
    )
}

const styles = {
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center',
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 5,
        borderRadius: 5,
        marginVertical: 10,
    },

    input: {
        color: 'black',
    }
}

export default CustomInput;