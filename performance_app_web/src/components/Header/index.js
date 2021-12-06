import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutAttempt } from "../../actions";
import Logo from "../Logo";


function Header (props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logoutAction() {
        dispatch(logoutAttempt(user.token));
        navigate('/');
    }

    return (
        <div>
            <div style = {styles.header_container}>
                    <Logo/>
                    <button style = {styles.header_button} onClick = {() => logoutAction()}>Log Out</button>
            </div>
            <h1 style ={styles.header_h1}>{props.text}</h1>
        </div>
    )
}

const styles = {
    header_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10vh',
        width: '100%',
        marginBottom: '50px'
        // backgroundColor: 'blue'
    },

    header_h1 : {
        color: 'blue',
        fontFamily: 'Montserrat',
    },

    header_button: {
        padding: '10px 15px',
        color: 'white',
        backgroundColor: '#3B71F3',
        borderColor: '#3B71F3',
        borderRadius: '4px',
        cursor: 'pointer',
    },
}

export default Header;