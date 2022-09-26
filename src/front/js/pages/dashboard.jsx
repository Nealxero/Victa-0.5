import React from "react";
import Calendar from "../component/calendar.jsx";
import Sidebar from "../component/sidebar.jsx";

const Dashboard = () => {
  return (
    <Sidebar>
    <div>
      <Calendar />
    </div>
    </Sidebar>
  );
};

export default Dashboard;
