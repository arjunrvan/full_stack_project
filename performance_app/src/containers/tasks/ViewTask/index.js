import React, {useEffect} from "react";
import { View, ScrollView, Image, SafeAreaView } from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from "../../../components/CustomButton";
import CustomHeader from '../../../components/CustomHeader';
import {fetchGoals} from '../../../actions';
import TaskCard from "../../../components/TaskCard";
import Logo from '../../../images/logo.jpg';

function ViewTask(props) {

    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);

    const taskData = useSelector(state=>state.task);

    const tasks = taskData.data;
    

    useEffect(() => {
        dispatch(fetchGoals(user));
    },[]);

    
    console.log('data...',tasks);

    return (
        <SafeAreaView style = {styles.container}>
            <Image source ={Logo} style = {styles.img} />
            <CustomHeader 
                    text = 'Goals:'
                />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle = {styles.scrollview}>
                {tasks && tasks.map((item,pos) => <TaskCard key = {pos} data = {item} user = {user} onPress = {() => props.navigation.navigate('UpdateTask',{ user: user, task: item })} />)}

            {/* </View> */}
            </ScrollView>
        </SafeAreaView>
        
    )
    
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 50,
        paddingHorizontal: 40,
        backgroundColor: 'aliceblue',
        height: '95%'
    }, 
    img: {
        width: '100%',
        height: 70,
        marginBottom: 50
    },
    scrollview: {
        // backgroundColor: 'blue',
        paddingHorizontal : 20,
        width: '100%',
        height: '100%',
    }
}

export default ViewTask;