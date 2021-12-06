import * as type from '../types';
import axios from 'axios';

const URL = 'http://d3c6-49-124-200-218.ngrok.io/api';



export const loginAttempt = (data) => (dispatch) => {
    dispatch ({
        type: type.LOGIN,
    })

    axios.post(`${URL}/login`,{
        email:data.email,
        password:data.password,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    
    })
        .then(
        res => {
            console.log('res...',res);
            dispatch({
                type: type.LOGIN_SUCCESSFUL,
                payload: {
                    id: res.data.data.user.id,
                    name: res.data.data.user.name,
                    token: res.data.data.access_token,
                }
            })

        }
    ).catch(error => {
        console.log('Something wrong fetching API', error);
    })
}

export const registerAttempt = (data) => (dispatch) => {
    dispatch ({
        type: type.REGISTER,
    })

    axios.post(`${URL}/register`,{
            name:data.name, 
            email:data.email,
            password:data.password,
            password_confirmation : data.repPassword,
            job_title : data.jobtitle,
            department: data.department,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        }).then(
        res => {
            console.log('res...',res);
            dispatch({
                type: type.REGISTER_SUCCESSFUL,
            });

        }
    ).catch(error => {
        console.log('Something wrong fetching API', error);
    });

}

export const logoutAttempt = (token) => (dispatch) => {
    dispatch ({
        type: type.LOGOUT,
    })

    console.log('token',token);
    axios.post(`${URL}/logout`,{},{
            headers: {
                Authorization: 'Bearer ' +token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        }).then(
        res => {
            console.log('res...',res);
            dispatch({
                type: type.LOGOUT_SUCCESSFUL,
            });

        }
    ).catch(error => {
        console.log('Something wrong fetching API', error);
    });
}

export const addGoal = (data) => (dispatch) => {
    dispatch({
        type: type.ADD_TASK,
    })

    console.log('token',data.token);
    axios.post(`${URL}/addtask`,{
            name: data.name,
            description: data.desc,
            target: data.target,
            current_progress: data.progress,
            target_completion_days: data.days,
            user_id: data.id,
        },
        {
            headers: {
                Authorization: 'Bearer ' +data.token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
        },
    }).then(
        res => {
            console.log('res...',res);
            dispatch({
                type: type.ADD_TASK_SUCCESSFUL,
            });

        }
    ).catch(error => {
        console.log('Something wrong fetching API', error);
    });
}

export const fetchGoals = (data) => (dispatch) => {
    dispatch({
        type: type.FETCH_TASKS,
    })

    console.log('token',data.token);
    axios.post(`${URL}/fetchtasks`,{
            user_id: data.id,
        },
        {
            headers: {
                Authorization: 'Bearer ' +data.token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
        },
    }).then(
        res => {
            console.log('res...',res);
            dispatch({
                type: type.FETCH_TASKS_SUCCESSFUL,
                payload: res.data.tasks,
            });

        }
    ).catch(error => {
        console.log('Something wrong fetching API', error);
        
    });

}

export const deleteGoal = (data) => (dispatch) => {

    dispatch({
        type: type.DELETE_TASK,
    })

    axios.post(`${URL}/deletetask`,{
        id: data.id,
        user_id: data.user_id,
    },
    {
        headers: {
            Authorization: 'Bearer ' +data.token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
    },
    }).then(
        res => {
            console.log('res...',res);
            dispatch({
                type: type.DELETE_TASK_SUCCESSFUL,
            });
        }
    ).catch(error => {
        console.log('Something wrong fetching API', error);
    });
}

export const updateGoal = (data) => (dispatch) => {

    dispatch({
        type: type.UPDATE_TASK,
    })

    axios.post(`${URL}/updatetask`,{
        id: data.id,
        name: data.name,
        description: data.desc,
        target: data.target,
        current_progress: data.progress,
        target_completion_days: data.days,
    },
    {
        headers: {
            Authorization: 'Bearer ' +data.token,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
    },
    }).then(
        res => {
            console.log('res...',res);
            dispatch({
                type: type.UPDATE_TASK_SUCCESSFUL,
            });
        }
    ).catch(error => {
        console.log('Something wrong fetching API', error);
    });
}