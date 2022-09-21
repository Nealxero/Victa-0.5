import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/forgotpass.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <div id="card2">
      <div id="card-content">
        <div id="card-title2">
          <h2>Get a new password in one click</h2>
          <div className="underline-title"></div>
        </div>
        <form className="form" id="">
          <label htmlFor="user-email">Forgot your password? Enter the email address linked to your account</label>
          <input
            id="user-email2"
            className="form-content"
            type="email"
            name="email"
            autoComplete="on"
            required
          />
          <div className="form-border"></div>

          <input id="submit-btn2" type="submit" name="submit" value="SEND" />
          <p id="signup2">
            <Link to="/signup">Cancel</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
