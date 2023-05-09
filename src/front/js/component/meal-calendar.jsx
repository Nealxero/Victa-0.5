import React, { useState } from 'react';
import '../../styles/calendar.css';
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";
import AddModal from './add-modal.jsx';
import { Example } from './mealcard-modal.jsx';


export const DailyMeal = props => {
    

    if (props.block.length == 0) return (
        <div className='row-sm ms auto meal' activeclassname="active" >
            
            <Example meals={props.block} name={props.name} type={props.type} />
            
        </div>
    )
    return (
        <div className='row-sm ms auto meal' activeclassname="active" >
            <Example meals={props.block} name={props.name} type={props.type} />
            {props.block.map((meal) => { return <p>{meal.name}</p>})}
            
        </div>
    )
};

DailyMeal.propTypes = {
    match: PropTypes.object
};

