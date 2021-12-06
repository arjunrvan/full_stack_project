import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function TaskCard (props) {
    const item = props.data;
    const daysRem = getDays({
        created_date:item.created_at,
        comp_days:item.target_completion_days
        });

    function getDays(data) {
        const dateNow = new Date().getTime();
        const dateCreated = new Date(data.created_date).getTime();

        const daysElapsed = Math.round((dateNow-dateCreated)/(1000*60*60*24));

        const daysRemaining = data.comp_days - daysElapsed;

        return daysRemaining;
    }

    const progressPercentage = Math.round((item.current_progress/item.target)*100);

    return (
            <div style = {styles.container}>
                
               
                <div style = {styles.text_container}>
                    <p style = {styles.name}>{item.name}</p>
                    <p style = {styles.desc}>{item.description}</p>
                </div>
                <div style = {styles.progress_container}>
                <div style = {styles.progress_circle}>
                    <CircularProgressbar value={progressPercentage} text={`${progressPercentage}%`} />
                </div>
                    <div style = {{textAlign: 'center'}}>

                        {daysRem > 0 ? 
                        <p style = {styles.days_text}>
                            {daysRem} days remaining
                        </p> :
                        <p>
                            Goal Overdue!    
                        </p>}    

                    </div>
                    
                </div>
        
            </div>
    )
}

const styles = {
    container: {
        width: '25%',
        height: '200px',
        backgroundColor: 'white',
        borderRadius: '30px',
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        margin: '5px 20px',
        padding: '0 20px',
    },
    text_container: {
        width: '100%',
        // backgroundColor: 'pink'
    },
    name: {
        color: 'black',
        fontSize: '20px',
        fontWeight: 750,
        // marginVertical: '10px',
        margin: '10px 0'
    },
    desc: {

    },
    progress_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        // backgroundColor: 'green',
        padding: '10px 0'
    },
    days_text: {
        color: 'blue',
        fontStyle: 'italic',
        fontSize: '15px',

    },
    progress_circle: {
        width: '20%',
        height: '100%',
        // backgroundColor: 'skyblue'
    }
}

export default TaskCard;