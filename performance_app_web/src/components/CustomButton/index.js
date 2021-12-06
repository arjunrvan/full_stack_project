import React from "react";

function CustomButton (props) {

    return (
        <button 
            onClick = {props.onPress} 
            style = {styles.container}>
            {/* <p

                style = {styles.text}
            >
                {props.text}
            </p> */}

            {props.text}
                
        </button>
    )
}

const styles = {
    container: {
        padding: 12,
        textAlign: 'center',
        width: '20%',
        marginTop: '20px',
        borderRadius: 5,
        backgroundColor: '#3B71F3',
        fontWeight: 'bold', 
        color: 'white',
        minWidth: '350px',
        cursor: 'pointer',
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },

    container_TERTIARY: {
        backgroundColor: 'lightgray',
    },

    text: {
        fontWeight: 'bold', 
        color: 'white',
    },

    text_PRIMARY: {
        color: 'white',
    },

    text_TERTIARY: {
        color: '#3B71F3',
    }
}

export default CustomButton;