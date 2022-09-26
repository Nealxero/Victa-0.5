import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Container from "react-bootstrap/Container";
import "../../styles/calendar.css";
import { DailyPlan } from "./dailyplan.jsx";

function Calendar() {
  const { store, actions } = useContext(Context);

  const users = store.users;

  if (!users) return <p>Loading</p>;

  const plans = store.users.map((item) => {
    return item.daily_plans;
  });

  return (
    <Container>
      {plans[0].map((plan) => {
        return <DailyPlan plans={plan} />;
      })}
    </Container>
  );
}

export default Calendar;
