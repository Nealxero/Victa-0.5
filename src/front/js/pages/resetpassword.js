import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { Navigate } from "react-router-dom";

export const ResetPassword = () => { 
  const [code, setCode] = useState("")
  const [passReset, setPassReset] = useState("")
  let navigate = useNavigate()

  const byeClick = () => {
    navigate("/login")
  }
    return  <div id="card2">
    <div id="card-content">
      <div id="card-title2">
        <h2>Reset your password</h2>
        <div className="underline-title"></div>
      </div>
      <form className="form" id="">
        <label htmlFor="user-email">Please copy the code sent to your email</label>
        <input
          id="user-recovery"
          className="form-content"
          type="text"
          name="Example = 071835"
          autoComplete="on"
          required
          value={code}
          onChange={setCode}
        /> 
        <div className="form-border"></div>
        <label htmlFor="user-email">Please enter the new password</label>
        <input
          id="user-newPassword"
          className="form-content"
          type="text"
          name="Example = 071835"
          autoComplete="on"
          required
          value={passReset}
          onChange={setPassReset}
        /> 
        <div className="form-border"></div>
        <label id="labelforgot" disabled="disabled"> NOTE = if you have not received any email, try requesting one again</label>
        <button id="submit-btn3" type="submit" name="submit" onClick={byeClick} >SUBMIT </button>
        <p id="signup2">
          <Link to="/signup">Cancel</Link>
        </p>
        
      </form>
    </div>
  </div>
}

