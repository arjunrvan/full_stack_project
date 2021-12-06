import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import {addGoal, fetchGoals, updateGoal} from '../../../actions';
import CustomHeader from "../../../components/CustomHeader";
import * as type from '../../../types';
import Logo from '../../../images/logo.jpg';

function UpdateTask(props) {
   
    const routeData = props.route.params;
    const [name,setName] = useState(routeData.task.name);
    const [desc,setDesc] = useState(routeData.task.description);
    const [target,setTarget] = useState(routeData.task.target);
    const [progress,setProgress] = useState(routeData.task.current_progress);
    const [days,setDays] = useState(routeData.task.target_completion_days);
    const user = useSelector(state=>state.user);


    console.log(routeData)

    const dispatch = useDispatch();

    function updateData() {
        dispatch(updateGoal(
            {
                name,
                desc,
                target,
                progress,
                days,
                token:routeData.user.token,
                id: routeData.task.id,
            }));
        dispatch(fetchGoals(user));
        props.navigation.navigate('ViewTask');
    }


    return (
        <View style = {styles.container}>
            <Image source ={Logo} style = {styles.img} />
            <CustomHeader
                text = 'Update Goal:'
            />

            <Text style = {styles.text}>Name: </Text>
            <CustomInput 
                placeholder = {routeData.task.name.toString()}
                value = {name}
                setValue = {setName}
            />

            <Text style = {styles.text}>Description: </Text>
            <CustomInput 
                placeholder = {routeData.task.description.toString()}
                value = {desc}
                setValue = {setDesc}
            />

            <Text style = {styles.text}>Target: </Text>
            <CustomInput 
                placeholder = {routeData.task.target.toString()}
                value = {target}
                setValue = {setTarget}
            />

            <Text style = {styles.text}>Current Progress: </Text>
            <CustomInput 
                placeholder = {routeData.task.current_progress.toString()}
                value = {progress}
                setValue = {setProgress}
            />

            <Text style = {styles.text}>Target Completion Duration (days): </Text>
            <CustomInput 
                placeholder = {routeData.task.target_completion_days.toString()}
                value = {days}
                setValue = {setDays}
            />        

            <CustomButton 
                text = 'Update'
                type = 'PRIMARY'
                onPress = {() => updateData()}
                style = {styles.button}
            />  
        </View>
        
    )
    
}

const styles = {
    container : {
        padding: 50,
        flex:1,
        textAlign: 'center',
        backgroundColor: type.bgColor,
        justifyContent: 'center',
        paddingTop: 90,
    },
    button: {
        marginTop: 35,
        marginBottom: 35,
    },
    text: {
        alignSelf: 'flex-start',
        marginHorizontal: 5,
        marginTop: 10,
    }, 
    img: {
        width: '100%',
        height: 70,
    }   
}

export default UpdateTask;