import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {useDispatch, useSelector} from 'react-redux';
import * as type from '../../types';

import {loginAttempt} from '../../actions';
import Logo from '../../images/logo.jpg';

function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user.token !== '' && user.isLoading === false) {
            props.navigation.navigate('View Goals');
        }
    })

    function loginAuth () {
        dispatch(loginAttempt({
            email, password,
        }));
    }

    return (
        <View style = {styles.container}>

            <Image source ={Logo} style = {styles.img} />

            <CustomInput 
                placeholder = 'Email'
                value = {email}
                setValue = {setEmail}
            />
            <CustomInput 
                placeholder = 'Password'
                value = {password}
                setValue = {setPassword}
                secureTextEntry
            />
            <CustomButton 
                text = 'Sign In'
                type = 'PRIMARY'
                onPress = {() => loginAuth()}
            />
            <CustomButton 
                text = 'Register'
                type = 'TERTIARY'
                onPress = {() => props.navigation.navigate('Register')}
            />
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        // paddingVertical: 270,
        paddingHorizontal: 50,
        backgroundColor: type.bgColor,
      },
      img: {
        width: '100%',
        height: 70,
        marginBottom: 50,
        resizeMode : 'contain',
      }
}

export default Login;