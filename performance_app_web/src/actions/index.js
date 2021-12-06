import axios from 'axios';
import * as type from '../types';

const URL = 'http://d3c6-49-124-200-218.ngrok.io/api';

export const loginAttempt = (data) => (dispatch) => {

    dispatch ({
        type: type.LOGIN,
    })

    console.log('data...',data);
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

            // if ()
            dispatch({
                type: type.LOGIN_SUCCESSFUL,
                payload: {
                    id: res.data.data.user.id,
                    name: res.data.data.user.name,
                    token: res.data.data.access_token,
                    is_admin: res.data.data.user.is_admin,
                }
            })

        }
    ).catch(error => {
        console.log('Something wrong fetching API', error.response);
        dispatch({
            type: type.LOGIN_FAIL,
            payload: error.response.data.message,
        })
    })
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

export const fetchEmployees = (token) => (dispatch) => {
    dispatch ({
        type: type.FETCH_EMPLOYEES,
    })

    console.log('token',token);
    axios.post(`${URL}/fetchemployees`,{},{
            headers: {
                Authorization: 'Bearer ' +token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        }).then(
        res => {
            console.log('res...',res);
            let countTemp = [];
            let empArray = res.data.employees;
            let ref = res.data.count;
            let status = false;

            console.log('ref',ref);

            for (let i = 0; i < empArray.length; i++) {
                for (let j = 0; j < ref.length; j++) {
                    if (empArray[i].id === ref[j].user_id) {
                        countTemp = [...countTemp,ref[j]];
                        status = true;
                    }
                }

                if (!status) {
                    countTemp = [...countTemp,{
                        user_id: empArray[i].id,
                        total: 0,
                    }];
                }
                status = false;  
                
            }

            dispatch({
                type: type.FETCH_EMPLOYEES_SUCCESSFUL,
                payload: {employee:res.data.employees,count:countTemp}
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
            user_id: data.employee.id,
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
                payload: {tasks:res.data.tasks, employee: data.employee},
            });

        }
    ).catch(error => {
        console.log('Something wrong fetching API', error);
    });

}

export const fetchEverything = (token) => (dispatch) => {
    dispatch({
        type: type.FETCH_EVERYTHING,
    })

    console.log('token',token);
    axios.post(`${URL}/fetcheverything`,{},
        {
            headers: {
                Authorization: 'Bearer ' +token,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
        },
    }).then(
        res => {
            console.log('res...',res);
            dispatch({
                type: type.FETCH_EVERYTHING_SUCCESSFUL,
                payload: res.data,
            });

        }
    ).catch(error => {
        console.log('Something wrong fetching API', error);
    });

}

export const clearError = (token) => (dispatch) => {
    dispatch ({
        type: type.CLEAR_LOGIN_ERROR,
    })
}