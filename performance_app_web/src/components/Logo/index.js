import React from 'react';
import * as type from '../../types';
import WebFont from 'webfontloader';

function Logo () {

    return (
        <div style = {styles.container}>
            <img style = {styles.img} src="logo.png" alt="" />
            <p style = {styles.text}>GoalTracker</p>
        </div>
    )
}

const styles = {
    container: {
        width: '260px',
        height: '50px',
        // backgroundColor: 'pink',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    img : {
        width: '50px',
        height: '50px',
    },
    text: {
        fontSize: '40px',
        fontStyle: 'bold',
        color: '#2788A4',
        fontFamily: 'Lobster',
    }
}

export default Logo;