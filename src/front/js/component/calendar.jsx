import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Container from 'react-bootstrap/Container';
import '../../styles/calendar.css';
import { DailyPlan } from './dailyplan.jsx';

function Calendar() {
    const { store, actions } = useContext(Context);
    
    const plans = store.users.map((item, index) => { return item.daily_plans })
    

    if (!plans) return <p>Loading</p>
    return (
        <Container>
            {

                plans[0].map((plan, index) => {
                    
                    
                    return (
                        <DailyPlan plans={plan}/>
                    )
                })}





        </Container>
    )
};

export default Calendar;