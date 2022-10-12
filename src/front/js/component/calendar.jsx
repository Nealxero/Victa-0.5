import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import '../../styles/calendar.css';
import { DailyPlan } from './dailyplan.jsx';

function Calendar() {
    const { store, actions } = useContext(Context);
    
    const plans = store.users.map((item, index) => { return item.daily_plans })
    

    if (!plans) return <p>Loading</p>
    return (
        <div className="container-fluid" id="calendarCont">
            {

                plans[0].map((plan, index) => {
                    
                    
                    return (
                        <DailyPlan plans={plan}/>
                    )
                })}

  
    </div>
  );
}

export default Calendar;
