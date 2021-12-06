import React from "react";

function CustomInput (props) {


    return (
        // <div style = {styles.container}>
            <input
                type = {props.type}
                // value = {props.value}
                onChange = {props.setValue}
                placeholder = {props.placeholder}
                style = {styles.input}
                ref = {props.func}
            />
                
            
        // </div> 
    )
}

const styles = {
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center',
        backgroundColor: 'aliceblue',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 5,
        borderRadius: 5,
        marginVertical: 10,
    },

    input: {
        color: 'black',
        marginBottom: 10,
        width: '20%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        height: '25px',
        minWidth: '350px'
    }
}

export default CustomInput;