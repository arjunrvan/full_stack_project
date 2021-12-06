import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchGoals } from "../../actions";


function EmployeeCard(props) {
    const employee = props.data;
    const navigate = useNavigate();

    const count = props.count;

    function viewDetails() {
        navigate('/details',{state: employee});
    }

    return (
        <div style = {styles.container}>
            <div style = {styles.header_container}>
                <h3>{employee.name}</h3>
                {count === 0 ? 
                    <div style = {styles.span_container}>
                        <div style = {styles.nogoals_text}>No goals yet!</div>      
                    </div> :
                    <div style = {styles.span_container}>
                        <div style = {styles.count_circle}>{count}</div> 
                        {count === 1 ? 
                        <div style = {styles.goals_text}> goal</div> : 
                        <div style = {styles.goals_text}> goals</div>
                        }
                    </div>
                }
                
            </div>
            <div style = {styles.bottom_container}>
                <div style = {styles.subtext_container}>
                    <p style = {styles.dept}>{employee.department}</p>
                    <p style = {styles.job}>{employee.job_title}</p>
                </div>
                {count > 0 && <button style = {styles.view_button} onClick = {() => viewDetails()}>View goals</button> }
                
            </div>
            
            
        </div>
    )
}

const styles = {
    container: {
        width: '300px',
        height: '120px',
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        padding: '5px 20px',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        margin: '20px 10px',
        boxSizing: 'border-box',
    },
    header_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
    },
    bottom_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: '80%',
        // backgroundColor: 'green'
    },

    subtext_container: {
        height: '90%',
        // backgroundColor: 'pink'
    },
    view_button: {
        padding: '5px 10px',
        backgroundColor: '#3B71F3',
        color: 'white',
        borderColor: '#3B71F3',
        borderRadius: '5px',
        marginBottom: '10px',
        cursor: 'pointer',
    },
    job: {
        fontStyle: 'italic',
        color: '#3B71F3'
    },
    dept: {

    },
    count_circle: {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: '#FC5404',
        textAlign: 'center',
        lineHeight: '20px',
        margin: '0px 5px',
        color: 'white',
    },
    span_container: {
        // backgroundColor: 'green',
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '25px',
    },
    goals_text: {
        color: '#FC5404'
    },
    nogoals_text: {
        color: '#FC5404',
        fontStyle: 'italic'
    }
}

export default EmployeeCard;