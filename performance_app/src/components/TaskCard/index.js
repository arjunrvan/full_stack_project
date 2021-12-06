import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {useDispatch} from 'react-redux';
import { deleteGoal, fetchGoals } from "../../actions";


function TaskCard (props) {
    const item = props.data;
    const daysRem = getDays({
        created_date:item.created_at,
        comp_days:item.target_completion_days
        });

    const dispatch = useDispatch();

    function getDays(data) {
        const dateNow = new Date().getTime();
        const dateCreated = new Date(data.created_date).getTime();
        const daysElapsed = Math.round((dateNow-dateCreated)/(1000*60*60*24));

        const daysRemaining = data.comp_days - daysElapsed;
        return daysRemaining;
    }

    function deleteList () {
        dispatch(deleteGoal({
            id: item.id, 
            user_id: props.user.id,
            token: props.user.token
            }));
        dispatch(fetchGoals(props.user));
    }

    const progressPercentage = Math.round((item.current_progress/item.target)*100);
    return (
        <View style = {styles.container}>
            <View style = {styles.text_container}>
                <Text style = {styles.name}>{item.name}</Text>
                <Text style = {styles.desc}>{item.description}</Text>
            </View>
            <View style = {styles.progress_container}>

                <AnimatedCircularProgress
                    size={100}
                    width={15}
                    fill={progressPercentage}
                    tintColor="#34BE82"
                    backgroundColor="#D1E8E4">
                    {
                        (fill) => (
                        <Text style = {{color: '#50D890', fontWeight: 'bold', fontSize: 20}}>
                            { progressPercentage }%
                        </Text>
                        )
                    }
                </AnimatedCircularProgress>

                <View style = {{textAlign: 'center'}}>

                    {daysRem > 0 ? 
                    <Text style = {styles.days_text}>
                        {daysRem} days remaining
                    </Text> :
                    <Text>
                        Goal Overdue!    
                    </Text>}    

                    <View style = {styles.button_container}>
                        <TouchableOpacity style = {styles.button} onPress = {props.onPress}><Text style = {{color: 'white'}}>Update</Text></TouchableOpacity>
                        <TouchableOpacity style = {styles.button} onPress = {() => deleteList()}><Text style = {{color: 'white'}}>Delete</Text></TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </View>
    )
}

const styles = {
    container: {
        width: '100%',
        height: 250,
        backgroundColor: 'white',
        borderRadius: 30,
        // boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginVertical: 5,
        paddingHorizontal: 20,
    },
    text_container: {
        width: '100%',
    },
    name: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    desc: {
        textAlign: 'justify'
    },
    progress_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    days_text: {
        color: 'blue',
        fontStyle: 'italic',
        fontSize: 15,

    },
    button_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15,
    },
    button: {
        backgroundColor: '#3B71F3',
        padding: 10,
        textAlign: 'center',
        borderRadius: 10,
        color: 'white', 
    }
}

export default TaskCard;