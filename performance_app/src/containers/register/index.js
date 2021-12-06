import React, { useState } from "react";
import { Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import axios from'axios';
import {useDispatch} from 'react-redux';
import {registerAttempt} from '../../actions';
import * as type from '../../types';

function Register (props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');
    const [jobtitle, setJobTitle] = useState('');
    const [department, setDepartment] = useState('');

    const dispatch = useDispatch();

    function registerUser() {

        dispatch(registerAttempt({name,email,password,repPassword,jobtitle,department}));

        props.navigation.navigate('Login');
    }

    return (
        <View style = {styles.container}>
            <CustomInput 
                placeholder = 'Name'
                value = {name}
                setValue = {setName}
            />
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
            <CustomInput 
                placeholder = 'Repeat password'
                value = {repPassword}
                setValue = {setRepPassword}
                secureTextEntry
            />
            <CustomInput 
                placeholder = 'Job Title'
                value = {jobtitle}
                setValue = {setJobTitle}
            />
            <CustomInput 
                placeholder = 'Department'
                value = {department}
                setValue = {setDepartment}
            />
            <CustomButton 
                text = 'Submit'
                type = 'PRIMARY'
                onPress = {() => registerUser()}
            />
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingVertical: 200,
        paddingHorizontal: 50,
        backgroundColor: type.bgColor,
      },
}

export default Register;