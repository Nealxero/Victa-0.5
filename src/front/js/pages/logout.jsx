import React, { useState } from "react";
import LogoutModal from "../component/logout-modal.jsx";
import { Navigate, useNavigate } from "react-router-dom";

const Logout =  () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var navigate = useNavigate()
  
  const LogoutClick = (e) => {
   
    (localStorage.removeItem("token"));
  }
return (
    <div>
      <div className="pages">
        <h2>Log out</h2>
      </div>
      
      <LogoutModal
        show={show}
        loginOutClick={LogoutClick}
        handleClose={handleClose}
        
      />
    </div>
  );
};


export default Logout;
