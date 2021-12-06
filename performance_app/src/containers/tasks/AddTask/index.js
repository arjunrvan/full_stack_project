import React, { useState } from "react";
import { Image, Text, View, KeyboardAvoidingView } from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import {addGoal, fetchGoals} from '../../../actions';
import CustomHeader from "../../../components/CustomHeader";
import * as type from '../../../types';
import Logo from '../../../images/logo.jpg';

function AddTask(props) {
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [target,setTarget] = useState('');
    const [progress,setProgress] = useState('');
    const [days,setDays] = useState('');
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    function insertGoal() {
        dispatch(addGoal(
            {
                name,
                desc,
                target,
                progress,
                days,
                token:user.token,
                id:user.id
            }));
        dispatch(fetchGoals(user));
        props.navigation.navigate('ViewTask');
    }


    return (
        <KeyboardAvoidingView style = {styles.container}>
            <Image source ={Logo} style = {styles.img} />

            <CustomHeader
                text = 'Add Goal:'
            />

            <CustomInput 
                placeholder = 'Goal Name'
                value = {name}
                setValue = {setName}
            />

            <CustomInput 
                placeholder = 'Goal Description'
                value = {desc}
                setValue = {setDesc}
            />

            <CustomInput 
                placeholder = 'Goal Target (Enter a number)'
                value = {target}
                setValue = {setTarget}
            />

            <CustomInput 
                placeholder = 'Current Progress (0 by default)'
                value = {progress}
                setValue = {setProgress}
            />

            <CustomInput 
                placeholder = 'Planned Completion Duration (days)'
                value = {days}
                setValue = {setDays}
            />        

            <CustomButton 
                text = 'Add'
                type = 'PRIMARY'
                onPress = {() => insertGoal()}
                style = {styles.button}
            />  

            
        </KeyboardAvoidingView>
        
    )
    
}

const styles = {
    container : {
        paddingHorizontal: 50,
        flex:1,
        textAlign: 'center',
        backgroundColor: type.bgColor,
        justifyContent: 'center',
    },
    button: {
        marginTop: 35,
        marginBottom: 35,
    },
    img: {
        width: '100%',
        height: 70,
        marginBottom: 50
    }   
}

export default AddTask;