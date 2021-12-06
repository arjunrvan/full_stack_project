import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearError, fetchEmployees, fetchEverything, loginAttempt } from "../../actions";
import CustomButton from "../../components/CustomButton";
import Logo from "../../components/Logo";
import * as type from '../../types';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);
    // console.log(user);

    useEffect(() => {
        if (user.token !== '' && user.isLoading === false && user.is_admin === 1) {
            dispatch(clearError(user.token));
            dispatch(fetchEmployees(user.token));
            navigate('dashboard');
        }
    });

    function loginAuth () {
        dispatch(loginAttempt({
            email, password,
        }));
    }

    return (
        <div style = {styles.container}>

            <div style = {{marginBottom: '50px'}}>
                <Logo/>
            </div>

            <input 
                type = 'email'
                style = {styles.input}
                onChange = {ele => setEmail(ele.target.value)}
                placeholder = "Email"
            />

            <input 
                type = 'password'
                style = {styles.input}
                onChange = {ele => setPassword(ele.target.value)}
                placeholder = "Password"
            />
            
            <CustomButton 
                text = 'Sign In'
                type = 'PRIMARY'
                onPress = {() => loginAuth()}
            />
            {user.error !== '' && <span style = {styles.error}>{user.error}</span> }
            
        </div>
    )
}

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        backgroundColor: type.bgColor,
        height: '100vh',
        width: '100%'
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
    },

    error: {
        marginTop: '30px',
        color: 'red'
    }
}

export default Login;