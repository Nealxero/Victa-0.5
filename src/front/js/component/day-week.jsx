import React from 'react';
import '../../styles/calendar.css';
import PropTypes from "prop-types";


export const DayOfWeek = props =>  {
    
    return(
            <div className="row" class='dayHeader'>{props.name}</div>
           
         
    )
};

DayOfWeek.propTypes = {
    match: PropTypes.object
};