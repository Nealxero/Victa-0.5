import React, { useState } from "react";
import LogoutModal from "../component/logout-modal.jsx";
import { Navigate, useNavigate } from "react-router-dom";

<<<<<<< HEAD
const Logout =  () => {
=======
const Logout =   () => {
>>>>>>> Nealxero-main
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var navigate = useNavigate()
<<<<<<< HEAD
  
  const LogoutClick = (e) => {
   
    (localStorage.removeItem("token"));
  }
return (
=======
  var navigate = useNavigate()
  
  if (localStorage.getItem("jwt-token") == null || localStorage.getItem("jwt-token") == "undefined" ){
return (
    navigate("/login")
  );}
  else {return (
>>>>>>> Nealxero-main
    <div>
      <div className="pages">
        <h2>Log out</h2>
      </div>
      
      <LogoutModal
        show={show}
        loginOutClick={LogoutClick}
        handleClose={handleClose}
<<<<<<< HEAD
        
=======
>>>>>>> Nealxero-main
      />
    </div>
  )}

  
};


<<<<<<< HEAD
=======

>>>>>>> Nealxero-main
export default Logout;
