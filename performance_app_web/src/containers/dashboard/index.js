import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchEverything, fetchGoals, logoutAttempt } from "../../actions";
import EmployeeCard from "../../components/EmployeeCard";
import Header from "../../components/Header";
import * as type from '../../types';

function Dashboard() {

    const dispatch = useDispatch();
    const employeeArray = useSelector(state => state.employees.data);
    // const user = useSelector(state => state.user);
    
    const countArray = useSelector(state => state.employees.count);
    console.log('countArray',countArray);

    let i = -1;

    return (
        <div style = {styles.container}>
            <Header text = 'Dashboard'/>

            <h4>Total: <span style = {styles.total_text}> {employeeArray.length} employees </span></h4>

            <div style = {styles.employee_container}>
            {employeeArray && employeeArray.map((item, pos) => {
                i++;
                console.log('count',countArray[i].total);
                return <EmployeeCard key = {pos} data = {item} count = {countArray[i].total}/>
            }
            )}

            </div>

        </div>
    )
}

const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 50,
        backgroundColor: type.bgColor,
        height: '100vh',
        width: '100vw',
        padding: '50px',
        boxSizing: 'border-box',
    },

    employee_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    total_text:{
        color: 'red',
    }

}

export default Dashboard;