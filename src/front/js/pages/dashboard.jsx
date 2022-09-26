import React, { useState, useEffect, useContext } from "react";
import Calendar from "../component/calendar.jsx";
import Sidebar from "../component/sidebar.jsx";
import { Context } from "../store/appContext";

const Dashboard = () => {
  const { store, actions } = useContext(Context);
  if (store.users.length == 0) return (
    <Sidebar>
      <div>
        <p>loading</p>
      </div>
    </Sidebar>
  );

  return (
    <Sidebar>
      <div>
        <Calendar />
      </div>
    </Sidebar>
  );
};

export default Dashboard;
