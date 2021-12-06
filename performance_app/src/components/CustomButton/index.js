import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

function CustomButton (props) {

    return (
        <TouchableOpacity 
            onPress = {props.onPress} 
            style = {[
                styles.container, 
                styles[`container_${props.type}`],
                props.bgColor ? {backgroundColor: props.bgColor} : {},
                props.style
                ]}>
            <Text

                style = {[
                    styles.text, 
                    styles[`text_${props.type}`],
                    props.fgColor ? {color: props.fgColor} : {}
                ]}
            >
                {props.text}
            </Text>
                
        </TouchableOpacity>
    )
}

const styles = {
    container: {
        padding: 15,
        width: '100%',
        marginVertical: 5,
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },

    container_TERTIARY: {
        backgroundColor: 'lightgray',
    },

    text: {
        fontWeight: 'bold',
        textAlign: 'center', 
    },

    text_PRIMARY: {
        color: 'white',
    },

    text_TERTIARY: {
        color: '#3B71F3',
    }
}

export default CustomButton;