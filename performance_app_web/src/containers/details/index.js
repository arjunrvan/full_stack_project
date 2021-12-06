import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import TaskCard from '../../components/TaskCard';
import DetailsHeader from '../../components/DetailsHeader';
import { fetchGoals } from '../../actions';
import { useLocation } from 'react-router';


function Details (props) {
    const location = useLocation();
    const dispatch = useDispatch();
    console.log('location',location);

    const user = useSelector(state => state.user);
    useEffect(()=> {
        dispatch(fetchGoals({employee: location.state, token: user.token}));
    },[]);
    
    const task = useSelector(state => state.tasks);
    const isLoading = task.isLoading;
    const taskArray = task.data;
    const employee = task.employee;

    return (

        
        <div style = {styles.container}>
            {isLoading ? <DetailsHeader text = 'Loading...'/> : <div>
                <DetailsHeader text = {`${employee.name}'s Goals:`}/>

                <div style = {styles.task_container}>
                    {taskArray.length > 0 && taskArray.map((item,pos) => 
                        <TaskCard key  = {pos} data = {item}/>
                    )
                    }
                </div>

            </div>
           
            
            }
             
            
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: 'aliceblue',
        padding: '50px',
        boxSizing: 'border-box',
    },
    text: {
        fontSize: 30,
        fontWeight: '800',
        color: '#3B71F3',
        letterSpacing: '2px',
        margin: '20px 0',
    },
    task_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '50px 0'
    }
}

export default Details;