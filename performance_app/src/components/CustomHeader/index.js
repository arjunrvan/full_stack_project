import React from "react";
import { Text } from "react-native";

function CustomHeader (props) {

    return (
        <Text style = {styles.text}>{props.text}</Text>
    )
}

const styles = {
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3B71F3',
        letterSpacing: 2,
        marginVertical: 10,
    },
}

export default CustomHeader;