import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import '../../styles/calendar.css';
import Stack from 'react-bootstrap/Stack';
import { DailyMeal } from './meal-calendar.jsx';
import { DayOfWeek } from './day-week.jsx';
import PropTypes from "prop-types";

export const DailyPlan = props => {


    if (props.plans.length == 0) { return <p>Loading</p> }
    
    
    console.log(props.plans.id)
    // {props.plans.map((block,index) => { return <p></p>})}
    return (
        <Col>
            <Stack gap={4}>
                <DayOfWeek name={props.plans.name}/>


                < DailyMeal name={props.plans.name} type="Breakfast" block={props.plans.first_block}/>
                < DailyMeal name={props.plans.name} type="Lunch" block={props.plans.second_block}/>
                < DailyMeal name={props.plans.name} type="Dinner" block={props.plans.third_block}/>




            </Stack>
        </Col>

    )
};


DailyPlan.propTypes = {
    match: PropTypes.object
};